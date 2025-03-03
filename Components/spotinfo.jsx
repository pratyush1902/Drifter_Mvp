import React from 'react'

export default function spotinfo({travelSpots}) {
  return (
    <div>
      <div class="px-40 flex flex-1 justify-center py-5">
  <div class="layout-content-container flex flex-col max-w-[1160px] flex-1">
     
    <div class="flex flex-wrap justify-between gap-3 p-4">
      <div class="flex min-w-72 flex-col gap-3">
        <p class="text-[#111518] text-4xl font-black leading-tight tracking-[-0.033em]">{travelSpots.Name}</p>
        <p class="text-[#60778a] text-base font-normal leading-normal">Explore {travelSpots.Spotbio}</p>
      </div>
    </div>

     
    <h2 class="font-poppins text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Historical Background</h2>
    <p class="text-[#0e151b] text-base font-normal leading-normal pb-3 pt-1 px-4">
       {travelSpots.Spotbackground}
    </p>
 
    <h2 class="font-poppins text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Cultural Insights</h2>
    <p class="text-[#0e151b] text-base font-normal leading-normal pb-3 pt-1 px-4">
       {travelSpots.SpotInsight}
    </p>

    
    <h2 class="font-poppins text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Travel Tips</h2>
    <p class="text-[#0e151b] text-base font-normal leading-normal pb-3 pt-1 px-4">
       {travelSpots.SpotTips}
    </p>

    
  </div>
</div>

    </div>
  )
}
