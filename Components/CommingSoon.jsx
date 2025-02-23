import Head from 'next/head';

export default function Home() {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5 mt-10">
      <Head>
        <title>Book Homestays</title>
      </Head>
      <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1">
        <div className="@container">
          <div className="sm:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://cdn.usegalileo.ai/sdxl10/c7d5e200-732c-4972-921b-cde215139f7b.png")',
                borderRadius:'20px'
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="font-poppins text-white text-3xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Coming Soon: Book Homestays
                </h1>
                <h2 className="font-poppins text-white text-sm sm:text-base font-normal leading-normal">
                  Discover a new way to stay. Enjoy the comforts of home and authentic local experiences.
                </h2>
              </div>
              <button
                className="w-full sm:w-auto flex items-center justify-center overflow-hidden rounded-full h-10 px-4 sm:h-12 sm:px-5 bg-[#ee862b] text-[#181411] text-sm sm:text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
