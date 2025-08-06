import React from 'react'
import Container from '../Layout/Container'

const HirePart = () => {
  return (
    <div className='bg-section py-[60px]'>
        <Container>
            <h1 className='font-primary font-bold text-[40px] leading-[55px] text-center pb-[10px]'>LOVE THIS?</h1>
            <h2 className='font-primary font-bold text-[40px] leading-[55px] text-center pb-[30px]'>START YOUR NEXT PROJECT WITH ME!</h2>
            <div className='flex justify-center'>
                <div className='font-primary font-medium bg-primary text-offwhite py-[12px] px-[35px] inline-block rounded-[10px] hover:shadow-lg transform transition-transform duration-300 hover:scale-90'>
                <a href="">Hire Me</a>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default HirePart