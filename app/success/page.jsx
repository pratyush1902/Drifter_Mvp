export default function SuccessPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h1>
        <p className="mt-4">Your booking has been confirmed. Check your email for details.</p>
        <a href="/" className="mt-6 text-blue-600 hover:underline">Go to Home</a>
      </div>
    );
  }
  