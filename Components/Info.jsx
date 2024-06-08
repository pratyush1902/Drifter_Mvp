 import React from 'react'
 import InfoHead from './InfoHead'
 import InfoNear from './InfoNear'
import InfoWeather from './InfoWeather'
import InfoCompare from './InfoCompare'
import InfoReach from './InfoReach'
import InfoVisit from './InfoVisit'
import InfoList from './InfoList'
 
 
 export default function Info() {
   return (
     <div>
        <InfoHead/>
        <InfoWeather/>
        <InfoCompare/>
        <InfoReach/>
     
        <InfoList/>
        <InfoNear/>
     </div>
   )
 }
 