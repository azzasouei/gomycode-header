import React, { useState } from 'react'
import logo from "../images projet/logo.png"
import { Link } from 'react-router-dom' 
import {FaUserAlt}from 'react-icons/fa'
import {BsCartFill}from 'react-icons/bs'
const Header = () => { 
    const [showMenu,setShowMenu]=useState(false);
    const handleShowMenu =()=>(
        setShowMenu(preve => !preve)
    )
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 '>
        <div className='flex items-center h-full justify-between'>
            <Link to={""}>
                <div className='h-14'>
                <img src={logo}className='h-full' />
            </div>
            </Link>
            <div className='flex items-center gap-6 md: gap-8'>
                <nav className="flex gap-5 md:gap-7  text-base md:text-lg">
                    <Link to={""}>Home</Link>
                    <Link to={"products"}>Products</Link>
                    <Link to={"about"}>About</Link>
                    <Link to={"contact"}>Contact</Link>

                </nav> 
                <div className='text-2xl relative'>
                    <BsCartFill/> 
                    <div className='absolute -top-2 right-0 text-white bg-red-500 h-4 m-0 p-0 text-sm text-center rounded-full'>0</div>
                </div>

                <div className='text-2xl cursor-pointer' onClick={handleShowMenu}> 
                   <FaUserAlt/>
                 </div> 
                 {
                  showMenu &&  <div className='absolute right-2 bg-white px-2  mt-20 shadow drop-shadow-md'>
                  <p className='whitespace-nowrap cursor-pointer'>New product</p>
                  <p className='whitespace-nowrap cursor-pointer'>Login</p>
               </div>
                 }
                 
            </div>

        </div>
    </header>
  )
}

export default Header