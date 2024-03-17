import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-white'>
        <nav className=''>
          <div>
            Navbar
          </div>
          <div>
            <ul>
                <li>
                    <a href='#Home'>Home</a>
                </li>
                <li>
                    <a href='#History'>History</a>
                </li>
                <li>
                    <a href='#Pricing'>Pricing</a>
                </li>
                <li>
                    <a href='#VIP'>VIP</a>
                </li>
            </ul>
          </div>
        <div>
            <button className='bg-[#a6c1ee] text-white'>Sign-in</button>
        </div>
        </nav>
    </header>
  )
}

export default Navbar