import React from 'react'
import lapImage from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 ' >
        <div className='max-w-[1240px] mx-auto grid  md:grid-cols-2  ' >
        <img className='w-[500px] mx-auto my-4' src={lapImage}  alt="laptop images" />
        <div className=' flex flex-col justify-center' >
            <p className='text-[#00df9a] font-bold ' >DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2  ' >Manage Data Analytics Centrally</h1>
            <p className='' >Lorem ipsum dolor sit amet, c1onsectetur adipisicing elit. Nam sit nemo, ad doloribus praesentium cumque rem repellat omnis perspiciatis, animi error, quidem doloremque dolore ratione. Nemo temporibus consequatur dolorem eos.</p>
        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0  px-6 py-3' >Get Started</button>
            
        </div>
        </div>
    </div>
  )
}

export default Analytics