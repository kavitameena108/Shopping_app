import React from 'react'
import { BsCartCheckFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import logo from "../images/logo-no-background.png"
import { useSelector } from 'react-redux';
const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (
    <div >

      <nav className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto '>
        <NavLink to='/'>
          <div className='ml-20'>
          <img src={logo} width="90px"/>
          </div>
        </NavLink>

<div className='flex items-center font-medium text-slate-100 mr-40 space-x-6'>
  <NavLink to="/">
  <p>Home</p>
  </NavLink>
 <NavLink to="/cart">
  <div className='relative'>
  <BsCartCheckFill className='text-2xl' />
  {
    cart.length>0 &&
    <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'
    >{cart.length}</span>
  }
  
  </div>
 </NavLink>
  
</div>
      </nav>
    </div>
  )
}

export default Navbar