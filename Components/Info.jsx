 import React from 'react'
 import InfoHead from './InfoHead'
 import InfoNear from './InfoNear'
import InfoWeather from './InfoWeather'
import InfoCompare from './InfoCompare'
import InfoReach from './InfoReach'
import InfoScam from './InfoScam'
import InfoList from './InfoList'
import Transport from './InfoLocalTransport'
import Credit from './InfoCredit'
import InfoActivity from './InfoActivity'
 
 
 export default function Info( ) {
   return (
     <div>
        <InfoHead/>
        <InfoWeather/>
        <InfoCompare/>
        <Transport/>
        <InfoReach/>
     
        <InfoList/>
        <InfoActivity/>
        <InfoNear/>
        <InfoScam/>
        <Credit/>
        
     </div>
   )
 }
 