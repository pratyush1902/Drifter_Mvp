import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function Eatery({destinationId}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/city/${destinationId}/food`); // Replace with your target route
  };
  return (
    <div className="px-40 flex flex-1 justify-center py-5 mt-10">
      <Head>
        <title>Book Homestays</title>
      </Head>
      <div className="layout-content-container flex flex-col max-w-[1060px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[380px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1536570589770-e2402b43e390?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                borderRadius:'20px'
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                   Explore Great Places to Eat
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                   
                </h2>
              </div>
              <button
              onClick={handleClick}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ee862b] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span className="truncate">Explore</span>
              </button>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  );
}
