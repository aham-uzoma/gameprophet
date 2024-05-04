import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import {soccer1} from './assets/images'


const Navbar = () => {
    const [isMenueOpen, setIsMenueOpen] = useState(false)

 const toggleMenuOption = () =>{
    const navLinks = document.querySelector('.nav-links')
    setIsMenueOpen(!isMenueOpen)
    navLinks.classList.toggle('top-[9%]')
 }
 const navigate = useNavigate()
 const goToHome =()=> navigate('/')
 const goToHistory =()=> navigate('/history')
 const goToPricing =()=> navigate('/pricing')
 const goToVIP =()=> navigate('/vip')
 const goToUserProfilePage=()=> navigate('/profilePage')



  return (
    <>
    <header className='bg-white'>
        <nav className='flex justify-between items-center w-[95%] h-16 mx-auto font-sen'> 
        {/* bg-red-500 */}
          <div className='text-lg'>
            Navbar
          </div>
          <div className='nav-links md:static absolute bg-white left-0 top-[-100%] md:min-h-fit md:w-auto min-h-[60vh] w-full flex items-center px-5'>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
            
                <li className='hover:text-red-500 text-lg cursor-pointer' onClick={goToHome}>Home</li>
                <li className='hover:text-red-500 text-lg cursor-pointer' onClick={goToHistory}>History</li>
                <li className='hover:text-red-500 text-lg cursor-pointer' onClick={goToVIP}>VIP</li>
                <li className='hover:text-red-500 text-lg cursor-pointer' onClick={goToPricing}>Pricing</li>

            </ul>
          </div>
        <div className='flex items-center gap-6'>
            <button className='bg-[#f33f3f] text-white px-5 py-2 rounded-full hover:bg-[rgba(252,124,124,0.9)]'
            onClick={goToUserProfilePage}>
              Sign-in
              </button>
            <FontAwesomeIcon icon={isMenueOpen? faXmark:faBars} className='text-xl cursor-pointer md:hidden' onClick={toggleMenuOption} />
        </div>
        </nav>

    </header>
  
    {/* <div className="flex items-center justify-center min-h-screen">
      <ImageSlider/>
    </div> */}
   

    </>
  )
}

export default Navbar