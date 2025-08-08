import React from 'react'
import Container from '../Layout/Container'
import { Link } from 'react-router';

function Completed() {
    return (
        <div className='bg-black py-[100px] font-primary'>
            <Container>
                <div className='w-[600px] bg-white text-black/70 rounded-[10px] mx-auto py-[50px]'>
                    <h1 className='text-[35px] leading-11 font-bold border-b pb-[25px] border-black/40 pl-[30px]'>Thanks for submitting form</h1>
                    <p className='font-medium text-[20px] leading-9 py-[30px] pl-[30px]'>Thank you for filling out the form correctly.
                        We will contact you as soon as possible.</p>
                        <Link to='/' className='ml-[30px] bg-black/70 text-white py-3 px-9 rounded-[7px] text-lg transform hover:scale-90 transition-transform duration-300  cursor-pointer inline-block'>Go Back</Link>
                </div>
            </Container>
        </div>
    )
}

export default Completed