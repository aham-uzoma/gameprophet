import React from 'react'

const Pricing = () => {
  return (
    <body className='flex flex-col w-screen  bg-amber-50'>
        {/* bg-slate-400 */}
        <div className='flex flex-col w-screen h-28  justify-center items-center'>
        <h1 className='text-8xl font-bold text-orange-400'>VIP Pass</h1>
        </div>
        <div className='flex flex-col  w-screen justify-center items-center'>
            <h1 className='text-4xl text-gray-600 font-bold mb-8 mt-12'>Pricing</h1>
            <div className='flex bg-orange-400' style={{ width: '30vw', height: '2vh'}}></div>

            <div className='flex flex-col justify-center items-center  bg-gray-100 shadow-2xl mb-12'style={{ width: '30vw', height: '60vh', gap:'20px'}} >
            
            <h2 className='text-2xl font-bold text-gray-600'>Monthly Plan</h2>
            <h1 className='text-6xl font-bold text-gray-600'>N1,500</h1>
            <p className='text-2xl text-gray-600'>per month</p>
            <button className='mt-20 h-16 w-60 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'>Subscribe</button>

            </div>
            
            </div>

       
    </body>
  )
}

export default Pricing