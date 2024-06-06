import React from 'react'
import inline from '../public/inline.svg'

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://themes.coderthemes.com/booking_v/assets/20-Dp2huxfT.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content  ">
    <div >
      <p className="mb-5 text-[20px] text-white  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <h1 className="mb-5 text-6xl font-bold text-white "> Lorem ipsum began
 as        </h1>
 
 <div className="bg-white bg-opacity-30 p-2 rounded-lg border border-grey mt-20 ">
  <div className="flex items-center space-x-2  " >
  <input type="text" placeholder="Where to Go?" className="input input-bordered ml-4 w-[80%]  " />
  <button className="btn btn-primary m-7 ">Let's Go</button>
  </div>
</div>

    </div>
    
  </div>
  
</div>

      
    </div>
  )
}
