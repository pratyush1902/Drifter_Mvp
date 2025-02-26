export async function POST(req) {
    try {
      const body = await req.text();
      console.log("Received Data:", body);
  
      const { activityId, userEmail, userName, phone, numPersons, amount, paymentId } = JSON.parse(body);
  
      console.log("Parsed Data:", { activityId, userEmail, userName, phone, numPersons, amount, paymentId });
  
      if (!activityId || !userEmail || !amount || !paymentId) {
        console.error("Missing required fields:", { activityId, userEmail, amount, paymentId });
        return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
      }
  
      const STRAPI_API_TOKEN = "cd23e4d62e01af81c1ee43ec2bc0c0c08fdcbdbdd6f20416e5de74e98c0c6d5a7cfadd6920758b6c5aa240cb71dc5386d42d857a86cadc1a5faf5e704a5245c6db6079cc9c4c804c84f1a73d2d2d6b49bd31188109a6d25bc4dd1c1952f892eecad66739ed7b84b4c52a422473972d3c9266b335681185cf2b714b1fbaab50cd"; // Replace with actual token
  
      // Get the current date and time for booking_date
      const bookingDate = new Date().toISOString();
  
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
            payment_id: paymentId,
            payment_status: "success", // ✅ Ensure it's valid
            booking_date: bookingDate, // ✅ Store booking date
          },
        }),
      });
  
      const responseData = await response.json();
      console.log("Strapi Response:", responseData);
  
      if (response.ok) {
        return new Response(
          JSON.stringify({
            success: true,
            message: "Booking successful",
            bookingId: responseData.data.id, // Return booking ID
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
  