import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white ' >
        <div className="max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
            <p className='text-[#00df9a] font-bold p-2' >GROW WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl  text-3xl font-bold md:py-6' >GROW WITH DATA</h1>
            <div className=' flex justify-center items-center '>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold' >fast , flexible , financing for</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 py-4'  strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop />
            </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 ' >Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3' >Get Started</button>
        </div>
    </div>
  )
}

export default Hero