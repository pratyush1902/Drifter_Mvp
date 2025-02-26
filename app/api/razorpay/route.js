import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay needs amount in paisa
      currency: "INR",
      payment_capture: 1,
    });

    return Response.json({ success: true, order });
  } catch (error) {
    console.error("Razorpay Order Error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
