import nodemailer from "nodemailer";
import crypto from "crypto"; // For generating unique orderId

export async function POST(req) {
  try {
    const body = await req.text();
    console.log("Received Data:", body);

    const {
      activityId,
      userEmail,
      userName,
      phone,
      numPersons,
      amount,
      paymentId
    } = JSON.parse(body);

    if (!activityId || !userEmail || !amount || !paymentId) {
      console.error("Missing required fields:", {
        activityId,
        userEmail,
        amount,
        paymentId,
      });
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const STRAPI_API_TOKEN = "df7d00875d5c385a992cbfe86ecb0bfc36b7b2e1a80cf0104590fc9e9a6d43da8838b578d50d859f067ee1eb3d5da22d20f01bc796ed326f9e19faf3c129f299b7ecd89c70e7dc8b228fe37f7b2241d66d0e4a13f9238bc8ea7dc8a03759f2e9542581f07b90ff806f2db5c4930a6542de561312345b4c1f680e68a3f3f59233";

    const bookingDate = new Date().toISOString();

    // ✅ Generate a unique Order ID
    const orderId = "ORD-" + crypto.randomBytes(4).toString("hex").toUpperCase();

    // ✅ Send booking info to Strapi
    const response = await fetch("http://localhost:1337/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          activity: activityId,
          user_email: userEmail,
          user_name: userName || "Guest",
          phone: phone || "N/A",
          num_persons: numPersons || 1,
          total_amount: amount || 0,
          order_id: orderId,        // ✅ New
          payment_id: paymentId,    // ✅ Existing
          payment_status: "success",
          booking_date: bookingDate,
        },
      }),
    });

    const responseData = await response.json();
    console.log("Strapi Response:", responseData);

    if (response.ok) {
      const bookingId = responseData.data.id;

      // ✅ Try to send confirmation email
      try {
        await sendEmail(userEmail, userName, bookingId, amount);
        console.log("✅ Email sent to user");
      } catch (emailErr) {
        console.error("❌ Email sending failed:", emailErr);
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: "Booking successful",
          bookingId,
          orderId,
        }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: responseData.error.message,
        }),
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Server Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

// ✅ Email function stays the same
async function sendEmail(email, name, bookingId, amount) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pratyushbndm@gmail.com",
      pass: "cyaxgcyknvdnnfac", // Gmail App Password
    },
  });

  await transporter.sendMail({
    from: `"Drifter" <yourgmail@gmail.com>`,
    to: email,
    subject: `Booking Confirmed – Drifter (ID: ${bookingId})`,
    text: `Hey ${name},\n\nYour booking is confirmed!\nBooking ID: ${bookingId}\nTotal Paid: ₹${amount}\n\nThank you for choosing Drifter!`,
  });
}
