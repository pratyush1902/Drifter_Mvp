 import React from 'react'
 import InfoHead from './InfoHead'
//  import InfoNear from './InfoNear'
import InfoWeather from './InfoWeather'
import InfoCompare from './InfoCompare'
 
 
 
 export default function Info() {
   return (
     <div>
        <InfoHead/>
        <InfoWeather/>
        <InfoCompare/>
        {/* <InfoNear/> */}
     </div>
   )
 }
 