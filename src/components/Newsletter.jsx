import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4' >
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 ' >
        <div className='lg:col-span-2 '>        
        <h1 className='md:text-4xl sm:text-3xl text-2xl' >Want tips & tricks to optimize your flow ?</h1>
        <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
              <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 w-full flex rounded-md text-black ' type="email" placeholder='Enter your email' />
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-bold ml-3 items-center my-6 mx-auto md:mx-2  px-6 py-3' >Sign Up</button>
                
              </div>
        <p>We care about the protection of your data . Read our  <span className='text-[#00df9a]' >Privacy Policy </span>.</p>
        </div>

      </div>
    </div>
  )
}

export default Newsletter