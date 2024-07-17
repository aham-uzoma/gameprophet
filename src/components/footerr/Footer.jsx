import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const goToLogIn = () => navigate('/logIn')
  return (
    <footer className='flex flex-col justify-center items-center font-sen w-[100%] bg-red-600 p-9'>
      <div className='flex lg:flex-row items-center lg:items-baseline flex-col justify-between w-[80%]'>
        <div className='flex w-32 h-32' data-aos='fade-up' data-aos-delay='1000'>
            <h1 className='text-white'>GAME-PROPHET LOGO HERE</h1>
          {/* <img src={require('../../assets/casa.png')} alt='casaLogo' /> */}
        </div>
        <div className='links_ul' data-aos='fade-up' data-aos-delay='1200'>
          <div className='font-bold mb-5 text-lg text-white text-center lg:text-justify'>LINKS</div>
          <ul>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='/'>Home</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#history'>History</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#VIP'>VIP</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#My Profile'>My Profile</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#joinUs'>JoinUs</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#'>Careers</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify' onClick={goToLogIn} >LogIn</li>

          </ul>
        </div>
        <div className='legal_ul' data-aos='fade-up' data-aos-delay='1400'>
          <div className='font-bold mb-5 text-base text-white text-center lg:text-justify'>SOCIAL</div>
          <ul>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#'>Facebook</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#'>Instagram</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#'>Twitter</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#'>Snapchat</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#'>Tiktok</a></li>
            <li className='mb-3 text-base cursor-pointer text-white text-center lg:text-justify'><a href='#'>Blog</a></li>
          </ul>
        </div>
        <div className='flex flex-col p-2 md:w-auto w-[90vw] items-center lg:items-baseline'>
          <div className='font-bold mb-5 text-base text-white'>NEWSLETTER</div>
          <div className='text-base mb-4 text-white'>Subscribe to our newsLetter</div>
          <form className='flex flex-row items-center justify-between 
          rounded-xl border-2 border-white md:p-3 p-[1px] h-14 max-w-md'>
            <div className='flex flex-row justify-between items-center' >
              <input className='h-10 md:w-60 w-[50vw] mx-5 rounded-xl p-1 border-none' type='text' placeholder='Enter Your Email' />
              <button className='h-16 md:w-36 text-base rounded-xl font-bold border-none cursor-pointer'>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex flex-col w-[100%] justify-center items-center mt-3 mb-24' data-aos='fade-up' data-aos-delay='1800'>
        <hr className='bg-white w-[90vw] h-[1px] mt-8' />
        <p className='text-white'>2024 | GameProphet Predictions</p>
        <div className='text-white'>Copyright @2024 GameProphet</div>
      </div>
    </footer>
  )
}

export default Footer