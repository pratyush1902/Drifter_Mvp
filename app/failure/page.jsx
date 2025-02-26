export default function FailurePage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-red-600">Payment Failed ❌</h1>
        <p className="mt-4">Something went wrong. Please try again later.</p>
        <a href="/" className="mt-6 text-blue-600 hover:underline">Go to Home</a>
      </div>
    );
  }
  