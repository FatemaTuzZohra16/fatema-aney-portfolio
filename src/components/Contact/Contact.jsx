import React, { useState } from 'react'
import Container from '../Layout/Container'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMassage] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMassage(e.target.value)
        console.log(message);

    }
    return (
        <div className='py-[80px] text-center'>
            <Container>
                <h1 className='font-primary font-extrabold text-[36px] mb-12 cursor-pointer hover:animate-bounce e duration-500 hover:text-primary'>Get in Touch</h1>
                <div className='w-[700px] flex flex-col bg-section mx-auto py-12 px-10 rounded-2xl hover:shadow-[0_20px_20px_rgba(0,0,0,0.25)] cursor-pointer'>
                    <form action="https://formspree.io/f/xovlkdvl" method="POST">
                        <input type='text'
                            placeholder='Your Name'
                            value={name}
                            name='name'
                            onChange={handleName}
                            className='w-full border outline-0 border-gray-300 py-3 rounded-[70px] pl-4'
                        />
                        <input type='email'
                            placeholder='Your Email'
                            value={email}
                            name='email'
                            onChange={handleEmail}
                            className='w-full border outline-0 border-gray-300 my-10 py-3 rounded-[70px] pl-4'
                        />
                        <textarea
                            type='message'
                            placeholder='Your Message'
                            value={message}
                            name='message'
                            onChange={handleMessage}
                            className='w-full border outline-0 border-gray-300 pt-3 h-[200px] rounded-[20px] pl-4'
                        />
                        <button type='submit' className='text-start bg-primary text-white py-[15px] px-[45px] mt-[30px] rounded-[10px] font-bold text-[20px] leading-8 hover:scale-90 duration-300 cursor-pointer'>Sent Message</button>
                    </form>

                </div>
            </Container>
        </div>
    )
}

export default Contact
