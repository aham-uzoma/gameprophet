import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
// import {soccer1} from './assets/images'


const Navbar = () => {
    const [isMenueOpen, setIsMenueOpen] = useState(false)

    const {auth, isAdmin} = useAuth() 

 const toggleMenuOption = () =>{
    const navLinks = document.querySelector('.nav-links')
    setIsMenueOpen(!isMenueOpen)
    navLinks.classList.toggle('top-[7.8%]')
 }
 const navigate = useNavigate()
 const goToHome =()=> navigate('/')
 const goToHistory =()=> navigate('/history')
 const goToPricing =()=> navigate('/pricing')
 const goToVIP =()=> navigate('/vip')
 const goToUserProfilePage=()=> navigate('/profilePage')
 const goToMyProfilePage=()=> navigate('/myProfile')
 const goToLogInPage=()=> navigate('/logIn')

  return (
    <>
    <header className='bg-white'>
        <nav className='flex justify-between items-center w-[90%] h-16 mx-auto font-sen mb-5 md:mb-0'> 
        {/* bg-red-500 */}
          <div className='text-xl md:text-2xl font-bold text-red-600'>
            GAME-PROPHET
          </div>
          <div className='nav-links bg-white md:static absolute  shadow z-50  left-0 top-[-100%] md:min-h-fit md:w-auto  w-full flex items-center px-5 py-5'>
            <ul className='flex md:flex-row flex-col bg-white md:items-center md:gap-[4vw] gap-8'>
            
                <li className='hover:text-red-500 text-base cursor-pointer' onClick={goToHome}>Home</li>
                <li className='hover:text-red-500 text-base cursor-pointer' onClick={goToHistory}>History</li>
                <li className='hover:text-red-500 text-base cursor-pointer' onClick={goToVIP}>VIP</li>
                {/* <li className='hover:text-red-500 text-base cursor-pointer' onClick={goToPricing}>Subscription</li> */}
                <li className='hover:text-red-500 text-base cursor-pointer' onClick={goToMyProfilePage}>My Profile</li>
                {isAdmin && <li className='hover:text-red-500 text-base cursor-pointer' onClick={goToUserProfilePage}>Admin</li>}



            </ul>
          </div>
        <div className='flex items-center gap-6'>
            <button className='bg-[#f33f3f] text-white px-5 py-2 rounded-full hover:bg-[rgba(252,124,124,0.9)]'
            onClick={goToLogInPage}>
              Sign-in
              </button>
              {/* <FontAwesomeIcon icon={faBars} className='text-xl cursor-pointer ' /> */}
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