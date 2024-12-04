 import React from 'react'

 import Hero from '@/Components/Hero'
import Top_place from '@/Components/Top_place'
import Trending_place from '@/Components/Trending_place'
// import Place_Type from '@/Components/Place_Type'
import State from '@/Components/State'
import CommingSoon from '@/Components/CommingSoon'
import Work from '@/Components/HowItWork'
 
 function page() {
   return (
     <div>
        
     <Hero/>
     <Top_place />
     <Trending_place/>
     <State/>
     <Work/>

     {/* <Place_Type/> */}
    
     <CommingSoon/>
     
    
     </div>
   )
 }
 
 export default page
 