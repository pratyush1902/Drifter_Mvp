import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function Shopping({ destinationId }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/city/${destinationId}/shopping`);
  };

  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex justify-center py-5 mt-10">
      <Head>
        <title>Explore Shopping</title>
      </Head>
      <div className="flex flex-col max-w-6xl w-full">
        <div
          className="relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[380px] p-6 sm:p-8 rounded-2xl bg-cover bg-center bg-no-repeat text-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <h1 className="text-white text-2xl sm:text-4xl font-bold leading-tight">
            Explore Great Places to Shop
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
  );
}
