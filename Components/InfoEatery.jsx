import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import LoadingScreen from './Loading';

export default function Eatery({ destinationId }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    router.push(`/city/${destinationId}/food`);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex justify-center py-5 mt-10">
          <Head>
            <title>Book Homestays</title>
          </Head>
          <div className="flex flex-col max-w-6xl w-full">
            <div className="relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[380px] p-6 sm:p-8 rounded-2xl bg-cover bg-center bg-no-repeat text-center"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1536570589770-e2402b43e390?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              }}
            >
              <h1 className="text-white text-2xl sm:text-4xl font-bold leading-tight">
                Explore Great Places to Eat
              </h1>
              <button
                onClick={handleClick}
                className="mt-4 sm:mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-[#ee862b] text-black font-semibold rounded-full text-sm sm:text-base hover:bg-[#f47b20] transition duration-300"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
