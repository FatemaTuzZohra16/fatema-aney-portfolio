import React from 'react'
import Container from '../Layout/Container'
import banner from '../../assets/banner.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import aney from '../../assets/aney1.png';

const Banner = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat text-white py-[70px] md:py-[110px] border-b-4 border-primary"
        style={{ backgroundImage: `url(${banner})` }}>
        <Container>
          <div className='lg:flex gap-x-[61px] items-center'>
            <div className="left w-auto lg:w-[70%]">
            <h1 className='text-[26px] sm:text-[40px] leading-[55px] font-bold'>Hello, I'm Fatema Tuz Zohra</h1>
          <h2 className='text-[25px] sm:text-[30px] leading-[35px] text-white pt-[5px] sm:pt-[15px] pb-[30px]'>Front-end Developer</h2>
          <p className='w-auto md:w-[588px] font-primary text-[14px] sm:text-[18px] leading-[24px] sm:leading-[28px] pb-9 sm:pb-12 text-white'>Passionate front-end developer crafting modern, responsive, and user-friendly web experiences. I believe in clean code, creative problem-solving, and continuous learning. Every project I build is a reflection of my dedication to both aesthetics and functionality. My mission is simple — to turn ideas into meaningful, engaging digital solutions that connect with people.</p>
          <div className='font-primary font-medium bg-primary text-offwhite py-[15px] px-[30px] inline-block rounded-[10px] hover:shadow-lg transform transition-transform duration-300 hover:scale-90 text-lg cursor-pointer'>
            <a className='flex items-center gap-x-[10px]' href="">lets Get Started
              <FaArrowRightLong  className=''/>
            </a>
          </div>
          </div>
          <div className="right w-full sm:w-[500px] lg:w-[30%] h-auto sm:h-[507px] lg:h-[347px] border-2 border-black outline-4 outline-offwhite rounded-full bg-black flex justify-center items-center py-2 mt-[60px] lg:mt-0 sm:mx-auto md:mx-0">
            <img className='' src={aney} alt="" />
          </div>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default Banner