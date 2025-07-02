import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Shopping() {
  const [state, setState] = useState(null); // Use null to represent single state object

  useEffect(() => {
    const fetchState = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/states?populate=*');
        const data = await res.json();

        if (data.data && data.data.length > 0) {
          setState(data.data[0]); // Extract the first (and only) state
        }
      } catch (error) {
        console.error('Error fetching state:', error);
      }
    };

    fetchState();
  }, []);

  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex justify-center py-5 mt-10">
      <Head>
        <title>Explore Meghalaya</title>
      </Head>

      <div className="flex flex-col max-w-6xl w-full">
        <div
          className="relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[380px] p-6 sm:p-8 rounded-2xl bg-cover bg-center bg-no-repeat text-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1581583730666-a6a2aab9a2d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <h1 className="font-poppins text-white text-2xl sm:text-4xl font-bold leading-tight">
            Explore Meghalaya like never before
          </h1>

          {state && (
            <Link href={`/Stateinfo/${state.id}`}>
              <button className="mt-4 sm:mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-[#ee862b] text-black font-semibold rounded-full text-sm sm:text-base hover:bg-[#f47b20] transition duration-300">
                Explore
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
