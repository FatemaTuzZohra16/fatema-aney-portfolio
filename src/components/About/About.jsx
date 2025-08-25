import React from 'react'
import Container from '../Layout/Container'
import { Link } from 'react-router'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
     useEffect(() => {
    AOS.init({
      offset: 80,     
      duration: 700,   
      easing: "ease-out",
      once: true,     
    });
  }, []);
    return (
        <div>
            <Container>
                <div className='md:flex justify-between items-center gap-x-[80px] py-[100px] font-primary'>
                    <div className='left w-auto md:w-[50%]'>
                        <h1 data-aos="fade-up" className='font-bold text-[28px] sm:text-[35px] md:text-[27px] lg:text-[35px]'>LEARN MORE ABOUT ME</h1>
                        <h2 className='font-medium text-[20px] sm:text-[25px] py-4 text-black/80'>CREATIVE FRONT-END WEB DEVELOPER</h2>
                        <p className='text-[14px] sm:text-[18px] md:text-[16px] lg:text-[18px] mb-[30px] text-black/80 leading-[26px] sm:leading-[30px]'>I specialize in building responsive, visually appealing websites using modern technologies like HTML5, CSS3, SASS, JavaScript, jQuery, Bootstrap, Tailwind CSS, and React.</p>
                        <Link to="/work" className='font-primary font-medium bg-primary text-offwhite py-[15px] px-[30px] inline-block rounded-[10px] hover:shadow-lg transform transition-transform duration-300 hover:scale-90 text-lg'>
                            {/* <Link href="/work">Check My Work</Link> */}
                            Check My Work
                        </Link>
                    </div>
                    <div className='right w-auto md:w-[50%]'>
                        <p className='text-[14px] sm:text-[18px] md:text-[16px] lg:text-[18px] mb-[30px] text-black/80 leading-[26px] sm:leading-[30px] mt-7 md:mt-0'>Hello! I’m a dedicated Front-End Developer with a strong eye for design and a love for clean code. I turn ideas into interactive, user-friendly websites that not only look great but also perform smoothly.
                            My goal is to craft seamless digital experiences that leave a lasting impression, whether it’s a personal portfolio, a business site, or a modern eCommerce platform.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About