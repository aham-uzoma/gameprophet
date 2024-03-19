import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ImageSlider from '../backgroundImageSlider/ImageSlider'
// import {soccer1} from './assets/images'


const Navbar = () => {
    const [isMenueOpen, setIsMenueOpen] = useState(false)

 const toggleMenuOption = () =>{
    const navLinks = document.querySelector('.nav-links')
    setIsMenueOpen(!isMenueOpen)
    navLinks.classList.toggle('top-[9%]')
 }



  return (
    <>
    <header className='bg-white'>
        <nav className='flex justify-between items-center w-[95%] h-16 mx-auto'> 
        {/* bg-red-500 */}
          <div className='text-lg'>
            Navbar
          </div>
          <div className='nav-links md:static absolute bg-white left-0 top-[-100%] md:min-h-fit md:w-auto min-h-[60vh] w-full flex items-center px-5'>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                <li>
                    <a className='hover:text-gray-500 text-lg' href='#Home'>Home</a>
                </li>
                <li>
                    <a className='hover:text-gray-500 text-lg' href='#History'>History</a>
                </li>
                <li>
                    <a className='hover:text-gray-500 text-lg' href='#Pricing'>Pricing</a>
                </li>
                <li>
                    <a className='hover:text-gray-500 text-lg' href='#VIP'>VIP</a>
                </li>
            </ul>
          </div>
        <div className='flex items-center gap-6'>
            <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[hsl(218,73%,73%)]'>Sign-in</button>
            <FontAwesomeIcon icon={isMenueOpen? faBars : faXmark} className='text-xl cursor-pointer md:hidden' onClick={toggleMenuOption} />
        </div>
        </nav>
    </header>
    <main>
    {/* bg-[image-url]  bg-custom-image *  bg- bg-[./assets/images/soccer1.jpg] */}
      {/* <section className=" bg-[url('./assets/images/soccer1.jpg')] bg-cover h-screen ">

      </section> */}
      <ImageSlider/>
    </main>
    </>
  )
}

export default Navbar