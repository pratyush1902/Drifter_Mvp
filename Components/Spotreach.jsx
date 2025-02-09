import React from 'react'

export default function Spotreach() {
  return (
    <div>
        <div class="px-40 flex flex-1 justify-center py-5">
  <div class="layout-content-container flex flex-col max-w-[1160px] flex-1">
 
    <div class="flex flex-wrap justify-between gap-3 p-4">
      <div class="flex min-w-72 flex-col gap-3">
        <p class="text-[#111518] text-4xl font-black leading-tight tracking-[-0.033em]">How to get around</p>
        <p class="text-[#60778a] text-base font-normal leading-normal">Public transport, taxis, car rentals, and more</p>
      </div>
    </div>

     
    <h2 class="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Public transport</h2>
    <div class="transport-option bg-white px-4 min-h-[72px] py-2 flex justify-between items-center gap-4">
      <div class="flex items-center gap-4">
        <div class="icon-container bg-[#f0f2f5] rounded-lg flex items-center justify-center text-[#111518] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24ZM72,40H184a16,16,0,0,1,16,16v64H56V56A16,16,0,0,1,72,40ZM184,200H72a16,16,0,0,1-16-16V136H200v48A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-[#111518] text-base font-medium leading-normal line-clamp-1">MRT</p>
          <p class="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">MRT, LRT and public buses are the most efficient and accessible mode of public transportation in Singapore. The fare depends on the distance traveled.</p>
        </div>
      </div>
      <div class="shrink-0">
        <div class="arrow-container text-[#111518] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </div>
      </div>
    </div>
    
    <h2 class="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Taxis</h2>
    <div class="transport-option bg-white px-4 min-h-[72px] py-2 flex justify-between items-center gap-4">
      <div class="flex items-center gap-4">
        <div class="icon-container bg-[#f0f2f5] rounded-lg flex items-center justify-center text-[#111518] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M220.2,100l-18-31.18a28,28,0,0,0-47.3-1.92L139.56,40.31a28,28,0,0,0-48.12-.63,28,28,0,0,0-43,34.78l3.34,5.79a28,28,0,0,0-22,41.92l38,65.82a87.46,87.46,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3A88,88,0,0,0,220.2,100Zm-6.67,62.63A72,72,0,0,1,81.63,180l-38-65.82a12,12,0,0,1,20.79-12l22,38.1a8,8,0,1,0,13.85-8l-38-65.81a12,12,0,0,1,13.5-17.59,11.9,11.9,0,0,1,7.29,5.59l34,58.89a8,8,0,0,0,13.85-8l-26-45h0a12,12,0,0,1,20.78-12L160,107.78a48.08,48.08,0,0,0-11,61,8,8,0,0,0,13.86-8,32,32,0,0,1,11.71-43.71,8,8,0,0,0,2.93-10.93l-10-17.32a12,12,0,0,1,20.78-12l18,31.18A71.49,71.49,0,0,1,213.53,162.62ZM184.27,29.93a8,8,0,0,1,9.8-5.66c15.91,4.27,29,14.11,36.86,27.73a8,8,0,0,1-13.86,8c-5.72-9.92-15.36-17.12-27.14-20.27A8,8,0,0,1,184.27,29.93ZM80.91,237a8,8,0,0,1-11.24,1.33c-11-8.69-20.11-19.58-28.6-34.28a8,8,0,0,1,13.86-8c7.44,12.88,15.27,22.32,24.65,29.72A8,8,0,0,1,80.91,237Z"></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-[#111518] text-base font-medium leading-normal line-clamp-1">Hailing a cab</p>
          <p class="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">Taxis are a convenient and comfortable mode of transportation in Singapore. You can hail a taxi on the street, book one through a mobile app, or find them at taxi stands located throughout the city.</p>
        </div>
      </div>
      <div class="shrink-0">
        <div class="arrow-container text-[#111518] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </div>
      </div>
    </div>
    
    <h2 class="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Car rentals</h2>
    <div class="transport-option bg-white px-4 min-h-[72px] py-2 flex justify-between items-center gap-4">
      <div class="flex items-center gap-4">
        <div class="icon-container bg-[#f0f2f5] rounded-lg flex items-center justify-center text-[#111518] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M212,108H208L177.7,43.2A20,20,0,0,0,159.7,32H96.3a20,20,0,0,0-18,11.2L48,108H44a28,28,0,0,0-28,28v40a20,20,0,0,0,20,20v4a28,28,0,0,0,56,0v-4H164v4a28,28,0,0,0,56,0v-4a20,20,0,0,0,20-20V136A28,28,0,0,0,212,108ZM96.3,48H159.7a4,4,0,0,1,3.6,2.3L192.6,108H63.4ZM56,204a12,12,0,1,1,12-12A12,12,0,0,1,56,204Zm128,0a12,12,0,1,1,12-12A12,12,0,0,1,184,204Zm40-36a4,4,0,0,1-4,4H36a4,4,0,0,1-4-4V136a12,12,0,0,1,12-12H212a12,12,0,0,1,12,12v32Z"></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-[#111518] text-base font-medium leading-normal line-clamp-1">Renting a car</p>
          <p class="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">Car rentals are available for those who prefer to drive themselves. Rental companies offer a range of vehicles to suit different needs and budgets.</p>
        </div>
      </div>
      <div class="shrink-0">
        <div class="arrow-container text-[#111518] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </div>
      </div>
    </div>
    
  </div>
</div>

      
    </div>
  )
}
