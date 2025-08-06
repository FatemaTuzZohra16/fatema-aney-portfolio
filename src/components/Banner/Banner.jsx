import React from 'react'
import Container from '../Layout/Container'
import banner from '../../assets/banner.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import aney from '../../assets/aney.png';

const Banner = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat text-white pt-[60px] pb-[60px]"
        style={{ backgroundImage: `url(${banner})` }}>
        <Container>
          <div className='flex gap-x-[61px]'>
            <div className="left w-[70%]">
            <h1 className='text-[40px] leading-[45px]'>Hello, I'm Fatema Tuz Zohra</h1>
          <h2 className='text-[30px] leading-[35px] text-lime-100 pt-[10px] pb-[25px]'>Front-end Developer</h2>
          <p className='font-primary text-[18px] leading-[28px] pb-9 text-offwhite'>Passionate front-end developer crafting modern, responsive, and user-friendly web experiences. I believe in clean code, creative problem-solving, and continuous learning. Every project I build is a reflection of my dedication to both aesthetics and functionality. My mission is simple — to turn ideas into meaningful, engaging digital solutions that connect with people.</p>
          <div className='font-primary font-medium bg-primary text-offwhite py-[15px] px-[30px] inline-block rounded-[10px] hover:shadow-lg transform transition-transform duration-300 hover:scale-90'>
            <a className='flex items-center gap-x-[10px]' href="">lets Get Started
              <FaArrowRightLong  className=''/>
            </a>
          </div>
          </div>
          <div className="right w-[30%] border-2 border-black outline-4 outline-offwhite rounded-full bg-white">
            <img className='' src={aney} alt="" />
          </div>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default Banner