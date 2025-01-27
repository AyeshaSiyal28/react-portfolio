import React, { useRef } from 'react'
import {NavLink } from 'react-router-dom'
import '../component/Navbar.css'
// import logo from '../images/logo.png'
import menu from '../images/menu.svg'
import close from '../images/close.svg'
const Navbar = () => {
   const menuRef = useRef();

   const openMenu =()=>{
    menuRef.current.style.right="0";
   }
   const closeMenu =()=>{
    menuRef.current.style.right="-350px";
   }
  return (
     <>
        
            <div className="navbar">
            <h2>Ayesha <span>Siyal</span></h2>
              <img src={menu} onClick={openMenu} alt="" className='open' />
            {/* <img src={logo} alt="" /> */}
            <div ref={menuRef} className="menu">
              <img src={close} onClick={closeMenu} alt="" className="close" />
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Services'> Services</NavLink>
            <NavLink to='/Projects'>Projects</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
            </div>
            <div className="connect">Connect With US</div>
            </div>
            </>
  )
}

export default Navbar