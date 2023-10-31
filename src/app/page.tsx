"use client";

import Cars from "../components/Cars";
import Make from "../components/Make";

export default function Home() {

    return (
      <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-full max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'>
        <Make/>
        <Cars/>
      </div>
    )
  
}
