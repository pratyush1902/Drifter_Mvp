import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const STRAPI_API_TOKEN = "df7d00875d5c385a992cbfe86ecb0bfc36b7b2e1a80cf0104590fc9e9a6d43da8838b578d50d859f067ee1eb3d5da22d20f01bc796ed326f9e19faf3c129f299b7ecd89c70e7dc8b228fe37f7b2241d66d0e4a13f9238bc8ea7dc8a03759f2e9542581f07b90ff806f2db5c4930a6542de561312345b4c1f680e68a3f3f59233e";

export async function POST(req) {
  try {
    const { bookingId } = await req.json();
    console.log("📩 Booking ID received:", bookingId);

    if (!bookingId) {
      return new Response(JSON.stringify({ error: "Booking ID is required" }), { status: 400 });
    }

    const strapiRes = await fetch(
      `http://localhost:1337/api/bookings/${bookingId} `,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!strapiRes.ok) {
      const err = await strapiRes.text();
      console.error("❌ Strapi fetch failed:", err);
      return new Response(JSON.stringify({ error: "Failed to fetch booking from Strapi" }), {
        status: 500,
      });
    }

    const bookingData = await strapiRes.json();
    const attributes = bookingData?.data?.attributes;

    if (!attributes) {
      return new Response(JSON.stringify({ error: "Booking data not found" }), { status: 404 });
    }

    const userName = attributes.user_name || "Guest";
    const userEmail = attributes.user_email || "N/A";
    const bookingDate = new Date(attributes.booking_date).toLocaleDateString();
    const amount = attributes.total_amount || 0;
    const activityName = attributes.activity?.data?.attributes?.Name || "Activity";

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([500, 700]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const { height } = page.getSize();

    const drawText = (text, y) => {
      page.drawText(text, {
        x: 50,
        y,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      });
    };

    drawText("Drifter - Booking Invoice", height - 60);
    drawText(`Invoice #: ${bookingId}`, height - 100);
    drawText(`Name: ${userName}`, height - 120);
    drawText(`Email: ${userEmail}`, height - 140);
    drawText(`Activity: ${activityName}`, height - 160);
    drawText(`Booking Date: ${bookingDate}`, height - 180);
    drawText(`Amount Paid: ₹${amount}`, height - 200);
    drawText(`Payment Status: Paid`, height - 220);
    drawText("Thank you for choosing Drifter!", height - 260);

    const pdfBytes = await pdfDoc.save();

    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Drifter-Invoice-${bookingId}.pdf"`,
      },
    });
  } catch (err) {
    console.error("🔥 Invoice generation failed:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
