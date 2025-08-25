import React, { useState } from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    // setShow("true")
    setShow(prevShow => !prevShow)
  }
  return (
    <div className='bg-black/70 md:border-b border-white py-4'>
      <Container>
        <div className='lg:flex justify-between items-center'>
          <div className='flex  items-center justify-between'>
            {/* <img className='w-[135px] h-[90px] animate-pulse' src={logo} alt="" /> */}
            <p className='font-bold text-[28px] animate-pulse  bg-gradient-to-r from-[#0EAAE8] to-[#DFE3ED] bg-clip-text text-transparent'>Fatema</p>
            <div className='lg:hidden text-white text-2xl'>
              <FaBars onClick={handleClick} />
            </div>
          </div>
          <div>
            <ul className='hidden lg:flex gap-x-4 items-center text-white font-primary font-semibold text-[20px] leading-9'>
              <li className='active text-primary py-2 px-6 rounded transition-all duration-500'>
                <Link to="/">Home</Link>
              </li>
              <li className='hover:text-primary py-2 px-6 rounded transition-all duration-500'>
                <Link to="/about">About</Link>
              </li>
              <li className='hover:text-primary py-2 px-6 rounded transition-all duration-500'>
                <Link to="/work">Resent Work</Link>
              </li>
              <li className='hover:text-primary py-2 px-6 rounded transition-all duration-500'>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      {
        show &&
        <div className='relative lg:flex justify-between items-center bg-primary'>
          {/* <div className='text-white text-2xl absolute top-[50%] left-10'>
            <ImCross  onClick={()=>setShow(false)}/>
          </div> */}
          <div className='flex flex-col items-center justify-center py-[40px] transition-all duration-500'>
            <ul className=' lg:flex gap-x-9 items-center text-white font-primary font-bold text-[20px] leading-9'>
              <li className='active text-black py-2 px-6 rounded transition-all duration-500'>
                <Link to="/">Home</Link>
              </li>
              <li className='hover:text-black py-2 px-6 rounded transition-all duration-500'>
                <Link to="/about">About</Link>
              </li>
              <li className='hover:text-black py-2 px-6 rounded transition-all duration-500'>
                <Link to="/work">Resent Work</Link>
              </li>
              <li className='hover:text-black py-2 px-6 rounded transition-all duration-500'>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

      }

    </div >
  )
}

export default Navbar