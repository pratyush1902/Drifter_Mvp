import React from 'react'

export default function spotinfo({travelSpots}) {
  return (
    <div>
      <div class="px-40 flex flex-1 justify-center py-5">
  <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
     
    <div class="flex flex-wrap justify-between gap-3 p-4">
      <div class="flex min-w-72 flex-col gap-3">
        <p class="text-[#111518] text-4xl font-black leading-tight tracking-[-0.033em]">{travelSpots.Name}</p>
        <p class="text-[#60778a] text-base font-normal leading-normal">Explore the historical and cultural heart of Japan</p>
      </div>
    </div>

     
    <h2 class="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Historical Background</h2>
    <p class="text-[#0e151b] text-base font-normal leading-normal pb-3 pt-1 px-4">
       {travelSpots.Description}
    </p>
 
    <h2 class="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Cultural Insights</h2>
    <p class="text-[#0e151b] text-base font-normal leading-normal pb-3 pt-1 px-4">
      The culture of Kyoto is deeply rooted in tradition. From the elegant art of the tea ceremony to the vibrant colors of the kimono, every aspect of life in Kyoto is
      steeped in history. The city is also known for its traditional crafts, such as pottery, textiles, and paper. One of the most iconic symbols of Kyoto is the geisha, or
      'geiko' as they are known in Kyoto. These highly skilled entertainers are trained in various traditional arts, including dance, music, and the art of conversation. A
      visit to Kyoto is not complete without experiencing the graceful presence of a geisha. Kyoto is also a hub for traditional Japanese cuisine. From the multi-course
      kaiseki meals to the simple elegance of a bowl of udon, the food in Kyoto is a reflection of its rich culture and history.
    </p>

    
    <h2 class="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Travel Tips</h2>
    <p class="text-[#0e151b] text-base font-normal leading-normal pb-3 pt-1 px-4">
      When traveling to Kyoto, it's important to be mindful of the local customs and traditions. Respect for the culture is paramount, so be sure to familiarize yourself
      with basic Japanese etiquette. In terms of transportation, the city is well-connected with an efficient public transit system. Consider purchasing a prepaid
      transportation card for ease of travel. While English is spoken in tourist areas, it's helpful to learn a few basic phrases in Japanese. As for accommodation,
      traditional ryokans offer an authentic Japanese experience, while modern hotels provide comfort and convenience. Lastly, don't forget to explore the city's vibrant
      markets, where you can find unique souvenirs and local delicacies.
    </p>

    
  </div>
</div>

    </div>
  )
}
