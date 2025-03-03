import React from 'react';

export default function Spotreach({ travelSpots }) {
  return (
    <div>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1160px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#111518] text-4xl font-black leading-tight tracking-[-0.033em]">
                How to get around
              </p>
              <p className="text-[#60778a] text-base font-normal leading-normal">
                Public transport, taxis, car rentals, and more
              </p>
            </div>
          </div>

         

          <h2 className="font-poppins text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Public transport
          </h2>
          <div className="transport-option bg-white px-4 min-h-[72px] py-2 flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="icon-container bg-[#f0f2f5] rounded-lg flex items-center justify-center text-[#111518] shrink-0">
                🚌
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                  Bus
                </p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                  {travelSpots?.SpotLocalTransport || 'Information not available'}
                </p>
              </div>
            </div>
          </div>

          <h2 className="font-poppins text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Taxis
          </h2>
          <div className="transport-option bg-white px-4 min-h-[72px] py-2 flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="icon-container bg-[#f0f2f5] rounded-lg flex items-center justify-center text-[#111518] shrink-0">
                🚖
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                  Hailing a cab
                </p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                  {travelSpots?.SpotTaxi || 'Information not available'}
                </p>
              </div>
            </div>
          </div>

          <h2 className="font-poppins text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Car rentals
          </h2>
          <div className="transport-option bg-white px-4 min-h-[72px] py-2 flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="icon-container bg-[#f0f2f5] rounded-lg flex items-center justify-center text-[#111518] shrink-0">
                🚗
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                  Car Rentals
                </p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                  {travelSpots?.SpotCarRental || 'Information not available'}
                </p>
              </div>
            </div>
          </div>
          <h2 className="font-poppins text-[#111518] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Entry Fee, Time & Location
          </h2>
          <div className="bg-white  px-4 min-h-[72px] py-2 flex flex-col gap-2">
            <p className="text-[#111518] text-xl text-base font-medium leading-normal">
              Entry Fee: {travelSpots?.SpotEntryfee|| 'Information not available'}
            </p>
            <p className="text-[#60778a] text-xl font-normal leading-normal">
              Time: {travelSpots?.SpotTime || 'Information not available'}
            </p>
            <p className="text-[#60778a] text-xl font-normal leading-normal">
              Location: {travelSpots?.SpotLocation ? (
                <a href={travelSpots.SpotLocation} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Open in Maps
                </a>
              ) : 'Information not available'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
