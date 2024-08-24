// app/not-found.js
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-800">
      <div className="relative w-96 h-96 animated-svg">
        <Image src="/undraw_page_not_found_re_e9o6.svg" alt="404" layout="fill" objectFit="contain" />
      </div>
      <h1 className="text-6xl font-bold mt-8">Oops!</h1>
      <h2 className="text-4xl mt-4">We can't find that page</h2>
      <p className="text-lg mt-4 max-w-lg text-center">
        The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-lg text-white">
        Go back home
      </Link>
    </div>
  );
}
