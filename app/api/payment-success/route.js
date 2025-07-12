import nodemailer from "nodemailer";
import crypto from "crypto";

export async function POST(req) {
  try {
    const body = await req.text();
    const {
      activityId,
      userEmail,
      userName,
      phone,
      numPersons,
      amount,
      paymentId,
      bookingDate, // ✅ take from frontend
    } = JSON.parse(body);

    const STRAPI_API_TOKEN = "df7d00875d5c385a992cbfe86ecb0bfc36b7b2e1a80cf0104590fc9e9a6d43da8838b578d50d859f067ee1eb3d5da22d20f01bc796ed326f9e19faf3c129f299b7ecd89c70e7dc8b228fe37f7b2241d66d0e4a13f9238bc8ea7dc8a03759f2e9542581f07b90ff806f2db5c4930a6542de561312345b4c1f680e68a3f3f59233"; // replace with yours
    const orderId = "ORD-" + crypto.randomBytes(4).toString("hex").toUpperCase();

    // 1. Save booking to Strapi
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
          order_id: orderId,
          payment_id: paymentId,
          payment_status: "success",
          booking_date: bookingDate, // ✅ use user-selected date
        },
      }),
    });

    const responseData = await response.json();
    if (!response.ok) {
      return new Response(
        JSON.stringify({ success: false, error: responseData.error.message }),
        { status: response.status }
      );
    }

    const bookingId = responseData.data.id;

    // 2. Fetch vendor info
    const activityRes = await fetch(
      `http://localhost:1337/api/activities/${activityId}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      }
    );
    const activityData = await activityRes.json();
    const activityName = activityData?.data?.attributes?.name || "Activity";
    const vendorEmail = activityData?.data?.attributes?.Vendor_Email || "";
    const vendorPhone = activityData?.data?.attributes?.Vendor_contact || "";

    // 3. Email to user
    try {
      await sendEmail(
        userEmail,
        userName,
        bookingId,
        amount,
        activityName,
        vendorEmail,
        vendorPhone
      );
    } catch (err) {
      console.error("Email to user failed:", err);
    }

    // 4. Email to vendor
    if (vendorEmail) {
      try {
        await sendVendorEmail(vendorEmail, {
          userName,
          phone,
          numPersons,
          bookingDate,
          activityName,
          amount,
        });
      } catch (err) {
        console.error("Email to vendor failed:", err);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Booking successful",
        bookingId,
        orderId,
        bookingDate, // ✅ include in response for success page
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
// ✅ Send booking confirmation to user
async function sendEmail(email, name, bookingId, amount, activityName, vendorEmail, vendorPhone) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pratyushbndm@gmail.com",
      pass: "cyaxgcyknvdnnfac", // App password
    },
  });

  const html = `
    <h2>Hi ${name},</h2>
    <p>Your booking for <strong>${activityName}</strong> has been <strong>confirmed</strong>.</p>
    <p><strong>Booking ID:</strong> ${bookingId}</p>
    <p><strong>Amount Paid:</strong> ₹${amount}</p>

    <h3>📞 Vendor Contact</h3>
    <ul>
      <li><strong>Email:</strong> ${vendorEmail || "Not Available"}</li>
      <li><strong>Phone:</strong> ${vendorPhone || "Not Available"}</li>
    </ul>

    <p>You can reach out to the vendor for any assistance or coordination.</p>
    <br/>
    <p>Thank you for booking with <strong>Drifter</strong>!</p>
  `;

  await transporter.sendMail({
    from: `"Drifter" <pratyushbndm@gmail.com>`,
    to: email,
    subject: `✅ Booking Confirmed – ${activityName} (ID: ${bookingId})`,
    html,
  });
}

// ✅ Notify the vendor
async function sendVendorEmail(email, details) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pratyushbndm@gmail.com",
      pass: "cyaxgcyknvdnnfac",
    },
  });

  const html = `
    <h3>Hello,</h3>
    <p>You’ve received a new booking for <strong>${details.activityName}</strong>.</p>
    <ul>
      <li><strong>Customer:</strong> ${details.userName}</li>
      <li><strong>Phone:</strong> ${details.phone}</li>
      <li><strong>Date:</strong> ${new Date(details.bookingDate).toDateString()}</li>
      <li><strong>Persons:</strong> ${details.numPersons}</li>
      <li><strong>Total:</strong> ₹${details.amount}</li>
    </ul>
    <p>Login to your vendor dashboard for more info.</p>
    <br/>
    <p>– Drifter Team</p>
  `;

  await transporter.sendMail({
    from: `"Drifter Booking" <pratyushbndm@gmail.com>`,
    to: email,
    subject: `📩 New Booking: ${details.activityName}`,
    html,
  });
}
