import React from 'react'
import logo from "../Assets/images/logo.jpg"
import '../css/Layout/Header.css'

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <img
          src={logo}
          alt='Logo'
          className='header-logo'
        />
        <ul className='header-menu'>
          <li className='cursor-pointer'>HOME</li>
          <li className='cursor-pointer'>ABOUT US</li>
          <li className='cursor-pointer'>PROJECT</li>
          {/* <li className='cursor-pointer'>CONTACT</li> */}
        </ul>
      </div>
    </>
  )
}

export default Header
