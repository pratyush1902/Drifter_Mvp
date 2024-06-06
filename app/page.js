 import React from 'react'

 import Hero from '@/Components/Hero'
import Top_place from '@/Components/Top_place'
import Trending_place from '@/Components/Trending_place'
import Place_Type from '@/Components/Place_Type'
import State from '@/Components/State'
 
 function page() {
   return (
     <div>
        
     <Hero/>
     <Top_place />
     <Trending_place/>

     <Place_Type/>
     <State/>
     
    
     </div>
   )
 }
 
 export default page
 