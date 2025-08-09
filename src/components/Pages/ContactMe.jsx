import React from 'react'
import Container from '../Layout/Container'
import contactBannar from '../../assets/contactBannar.webp'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router';

export const ContactMe = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [message, setMessage] = useState("")
    const [messageError, setMessageError] = useState("")

    const handleName = (e)=>{
        setName(e.target.value)
        setNameError("")
        console.log(name);       
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
        setEmailError("")
    }
    const handleMassage = (e)=>{
        setMessage(e.target.value) 
        setMessageError("")      
    }
    const handleSubmit= ()=>{
        const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        if(!name){
            setNameError("Please Inter Your Name")
        }
        if(!email){
            setEmailError("Please Inter Your Email")
        }else{
            if(!emailValid){
                setEmailError("Invalid Email")
            }
        }
        if(!message){
            setMessageError("Please Inter Your Message")
        }
        if(name && email && message && emailValid && !nameError && !emailError && !messageError){
            alert("Successfully completed")
            setName("")
            setEmail("")
            setMessage("")
            navigate("/completed")
        }
    }
    const handleReset= ()=>{
        if(name && email && message){
            setName("")
            setEmail("")
            setMessage("")
            setNameError("")
            setEmailError("")
            setMessageError("")
        }
    }
  return (
    <div className='py-[100px] bg-center bg-cover bg-black/70' 
    style={{backgroundImage: `url(${contactBannar})`}}>
        <Container>
            <div className='w-auto lg:w-[840px] bg-black text-white py-[45px] px-9 rounded-[10px] mx-auto hover:shadow-[0_6px_20px_rgba(255,255,255,0.7)]'>
                <h1 className='font-primary font-bold text-[35px] mb-[50px]'>Contact  Me</h1>
                <div className='flex flex-wrap gap-6'>
                    <div className='w-full border border-white rounded bg-transparent text-lg'>
                        <input type='text' 
                    placeholder='NAME'
                    value={name}
                    onChange={handleName}
                    className='outline-0 p-4'/>
                    </div>
                    <p className='text-red-900'>{nameError}</p>
                   <div className='w-full border border-white rounded bg-transparent text-lg'>
                     <input type='email' 
                    placeholder='EMAIL' 
                    value={email}
                    onChange={handleEmail}
                    className='outline-0 p-4'/>
                   </div>
                        <p className='text-red-900'>{emailError}</p>
                   <div className='w-full border border-white rounded bg-transparent text-lg mt-[20px]'>
                     <textarea name="message" id="" 
                    placeholder='MESSAGE' 
                    value={message}
                    onChange={handleMassage}
                    className='outline-0 p-4 h-[200px]'/>
                   </div>
                   <p className='text-red-900'>{messageError}</p>
                </div>
                <div className='flex gap-x-[20px] mt-8'>
                    <div>
                        <button onClick={handleSubmit} href="" className='font-primary font-medium bg-white text-black py-[19px] md:py-[12px] px-[19px] md:px-[35px] inline-block rounded-[10px] hover:shadow-lg transform transition-transform duration-300 hover:scale-90 text-[13px] sm:text-lg'>Sent Message</button>
                    </div>
                    <div>
                        <button onClick={handleReset} href="" className='font-primary font-medium bg-transparent border text-white py-[12px] px-[35px] inline-block rounded-[10px] hover:shadow-lg transform transition-transform duration-300 hover:scale-90 text-lg'>Reset</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
