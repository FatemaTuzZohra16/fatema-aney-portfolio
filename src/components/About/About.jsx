import React from 'react'
import Container from '../Layout/Container'

const About = () => {
  return (
    <div>
        <Container>
            <div className='flex justify-between gap-x-[80px] py-[80px] font-primary'>
                <div className='left w-[50%]'>
                    <h1 className='font-bold text-[35px]'>LEARN MORE ABOUT ME</h1>
                    <h2 className='font-medium text-[25px] py-4 text-black/80'>CREATIVE FRONT-END WEB DEVELOPER</h2>
                    <p className='text-[18px] mb-[30px] text-black/80 leading-[30px]'>I specialize in building responsive, visually appealing websites using modern technologies like HTML5, CSS3, SASS, JavaScript, jQuery, Bootstrap, Tailwind CSS, and React.</p>
                    <div className='font-primary font-medium bg-primary text-offwhite py-[15px] px-[30px] inline-block rounded-[10px] hover:shadow-lg transform transition-transform duration-300 hover:scale-90'>
                        <a href="">Chech My Work</a>
                    </div>
                </div>
                <div className='right w-[50%]'>
                    <p className='text-[18px] mb-[30px] text-black/80 leading-[30px]'>Hello! I’m a dedicated Front-End Developer with a strong eye for design and a love for clean code. I turn ideas into interactive, user-friendly websites that not only look great but also perform smoothly.
My goal is to craft seamless digital experiences that leave a lasting impression, whether it’s a personal portfolio, a business site, or a modern eCommerce platform.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default About