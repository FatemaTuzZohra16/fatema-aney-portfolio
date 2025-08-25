import React, { useState } from 'react'
import Container from '../Layout/Container'
import { useNavigate } from 'react-router'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
     useEffect(() => {
    AOS.init({
      offset: 80,    
      duration: 700,   
      easing: "ease-out",
      once: true,   
    });
  }, []);
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMassage] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [messageErr, setMassageErr] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
        setNameErr("")
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailErr("")
    }
    const handleMessage = (e) => {
        setMassage(e.target.value)
        setMassageErr("")

    }
    const handleSentMessage= ()=>{
        if(!name){
            setNameErr("Please Inter Your Name")
        }else{
            setNameErr("")
        }
        if(!email){
            setEmailErr("Please Inter Your Email")
        }else{
            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            setEmailErr("Invalid Email")
        }else{
            setEmailErr("")
        }
        }
        if(!message){
            setMassageErr("Please Inter Your Message")
        }else{
            setMassageErr("")
        }
        if(name && email && message && !nameErr && !emailErr && !messageErr){
             toast.success("Form submitted successfully!");
             setName("")
            setEmail("")
            setMassage("") 
            setEmailErr("")
            setMassageErr("")
            navigate("/ContactMe")
        }
    }
    return (
        <div className='py-[80px] text-center'>
            <Container>
                    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
                <h1 data-aos="fade-up" className='font-primary font-extrabold text-[36px] mb-12 cursor-pointer  hover:text-primary'>Get in Touch</h1>
                <div className='w-auto md:w-[700px] flex flex-col bg-section mx-auto py-12 px-10 rounded-2xl hover:shadow-[0_20px_20px_rgba(0,0,0,0.25)] cursor-pointer'>
                        <input type='text'
                            placeholder='Your Name'
                            value={name}
                            name='name'
                            onChange={handleName}
                            className='w-full border outline-0 border-gray-300 py-3 rounded-[70px] pl-4'
                        />
                        <p className='text-start text-red-800 pl-[15px] pt-[10px]'>{nameErr}</p>
                        <input type='email'
                            placeholder='Your Email'
                            value={email}
                            name='email'
                            onChange={handleEmail}
                            className='w-full border outline-0 border-gray-300 mt-10 py-3 rounded-[70px] pl-4'
                        />
                        <p className='text-start text-red-800 pl-[15px] pt-[10px]'>{emailErr}</p>
                        <textarea
                            type='message'
                            placeholder='Your Message'
                            value={message}
                            name='message'
                            onChange={handleMessage}
                            className='w-full border outline-0 border-gray-300 mt-10 pt-3 h-[200px] rounded-[20px] pl-4'
                        />
                        <p className='text-start text-red-800 pl-[15px] pt-[10px]'>{messageErr}</p>
                        <button onClick={handleSentMessage} type='submit' className='text-center bg-primary text-white py-[15px] px-[45px] mt-[30px] rounded-[10px] font-bold text-[20px] leading-8 hover:scale-90 duration-300 cursor-pointer inline-block'>Sent Message</button>
                </div>
            </Container>
        </div>
    )
}

export default Contact
