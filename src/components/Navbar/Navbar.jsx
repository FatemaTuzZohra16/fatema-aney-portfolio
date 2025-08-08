import React from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='bg-black/70 border-b border-white'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <img className='w-[135px] h-[90px] animate-pulse' src={logo} alt="" />
          </div>
          <div>
            <ul className='flex gap-x-9 items-center text-white font-primary font-bold text-[20px] leading-9'>
              <li className='active text-primary py-2 px-6 rounded transition-all duration-500'>
                <Link to="/">Home</Link>
              </li>
              <li  className='hover:text-primary py-2 px-6 rounded transition-all duration-500'>
                <Link to="/about">About</Link>
              </li>
              <li  className='hover:text-primary py-2 px-6 rounded transition-all duration-500'>
                <Link to="/work">Resent Work</Link>
              </li>
              <li  className='hover:text-primary py-2 px-6 rounded transition-all duration-500'>
                <Link to="/">Service</Link>
              </li>
              <li  className='hover:text-primary py-2 px-6 rounded transition-all duration-500'>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default Navbar