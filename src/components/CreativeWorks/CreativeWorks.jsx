import React from 'react'
import Container from '../Layout/Container'
import innovate from '../../assets/innovate.png'
import ecommerce from '../../assets/ecommerce.png'
import agence from '../../assets/agence.png'
import cleaning from '../../assets/cleaning-service.png'
import quriarbox from '../../assets/quriarbox.png'
import weather from '../../assets/weather-app.png'
import { FaLink } from "react-icons/fa";

const CreativeWorks = () => {
  return (
    <div className='py-[90px]'>
            <Container>
                <div>
                    <h1 className='font-primary font-bold text-[40px] leading-[45px] text-center pb-[60px]'>MY CREATIVES WORKS.</h1>
                </div>

                <div className='flex flex-wrap justify-center md:justify-between gap-6'>
                    <div className='w-[350px] h-[365px] relative group bg-gradient-to-br from-blue-600 text-shadow-green-300 rounded-[10px] pt-12 pb-[70px] px-8 overflow-hidden transition duration-300'>
                        <img src={innovate} alt=""  className='w-full h-[240px] object-cover object-top'/>
                        <div className='pl-0'>
                            <button className='absolute bottom-0 left-0 text-white text-[22px] bg-black/70 py-4 px-6 mt-5 rounded-[20px] font-extrabold'>Innovate</button>
                        </div>
                            <a href="https://react-innovate-38tc.vercel.app">
                                <div className='absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100'>
                                <button className='bg-primary text-white font-bold text-[20px] rounded-b-[10px] ml-8 py-3 px-4'>Website</button>
                                <p className='absolute top-[100px] left-[60px] text-[22px]  font-primary font-bold text-white'>Innovate Website</p>
                                <div className='rounded-full w-[40px] h-[40px] bg-primary text-white absolute right-6 bottom-6 flex items-center justify-center'>
                                    <FaLink size={24} />
                                </div>
                            </div>
                            </a>
                    </div>
                    <div className='w-[350px] h-[365px] relative group bg-gradient-to-br from-blue-600 text-shadow-green-300 rounded-[10px] pt-12 pb-[70px] px-8 overflow-hidden transition duration-300'>
                        <img src={ecommerce} alt=""  className='w-full h-[240px] object-cover object-top'/>
                        <div className='pl-0'>
                            <button className='absolute bottom-0 left-0 text-white text-[22px] bg-black/70 py-4 px-6 mt-5 rounded-[20px] font-extrabold'>Ecommerce</button>
                        </div>
                            <a href="https://ecommerce-murex-two.vercel.app">
                                <div className='absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100'>
                                <button className='bg-primary text-white font-bold text-[20px] rounded-b-[10px] ml-8 py-3 px-4'>Website</button>
                                <p className='absolute top-[100px] left-[60px] text-[22px]  font-primary font-bold text-white'>Ecommerce Website</p>
                                <div className='rounded-full w-[40px] h-[40px] bg-primary text-white absolute right-6 bottom-6 flex items-center justify-center'>
                                    <FaLink size={24} />
                                </div>
                            </div>
                            </a>
                    </div>
                    <div className='w-[350px] h-[365px] relative bg-gradient-to-br from-blue-600 text-shadow-green-300 group rounded-[10px] pt-12 pb-[70px] px-8 overflow-hidden transition duration-300'>
                        <img src={agence} alt=""  className='w-full h-[240px] object-cover object-top'/>
                        <div className='pl-0'>
                            <button className='absolute bottom-0 left-0 text-white text-[22px] bg-black/70 py-4 px-6 mt-5 rounded-[20px] font-extrabold'>Agence</button>
                        </div>
                            <a href="https://bootstrap-project-self.vercel.app">
                                <div className='absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100'>
                                <button className='bg-primary text-white font-bold text-[20px] rounded-b-[10px] ml-8 py-3 px-4'>Website</button>
                                <p className='absolute top-[100px] left-[60px] text-[22px]  font-primary font-bold text-white'>Agence Website</p>
                                <div className='rounded-full w-[40px] h-[40px] bg-primary text-white absolute right-6 bottom-6 flex items-center justify-center'>
                                    <FaLink size={24} />
                                </div>
                            </div>
                            </a>
                    </div>
                    <div className='w-[350px] h-[365px] relative bg-gradient-to-br from-blue-600 text-shadow-green-300 group rounded-[10px] pt-12 pb-[70px] px-8 overflow-hidden transition duration-300'>
                        <img src={cleaning} alt=""  className='w-full h-[240px] object-cover object-top'/>
                        <div className='pl-0'>
                            <button className='absolute bottom-0 left-0 text-white text-[22px] bg-black/70 py-4 px-6 mt-5 rounded-[20px] font-extrabold'>Cleaning-Service</button>
                        </div>
                            <a href="https://cleaning-services-tan.vercel.app">
                                <div className='absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100'>
                                <button className='bg-primary text-white font-bold text-[20px] rounded-b-[10px] ml-8 py-3 px-4'>Website</button>
                                <p className='absolute top-[100px] left-[60px] text-[22px]  font-primary font-bold text-white'>Cleaning-Service Website</p>
                                <div className='rounded-full w-[40px] h-[40px] bg-primary text-white absolute right-6 bottom-6 flex items-center justify-center'>
                                    <FaLink size={24} />
                                </div>
                            </div>
                            </a>
                    </div>
                    <div className='w-[350px] h-[365px] relative bg-gradient-to-br from-blue-600 text-shadow-green-300 group rounded-[10px] pt-12 pb-[70px] px-8 overflow-hidden transition duration-300'>
                        <img src={quriarbox} alt=""  className='w-full h-[240px] object-cover object-top'/>
                        <div className='pl-0'>
                            <button className='absolute bottom-0 left-0 text-white text-[22px] bg-black/70 py-4 px-6 mt-5 rounded-[20px] font-extrabold'>Quriarbox</button>
                        </div>
                            <a href="https://quriarbox-two.vercel.app">
                                <div className='absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100'>
                                <button className='bg-primary text-white font-bold text-[20px] rounded-b-[10px] ml-8 py-3 px-4'>Website</button>
                                <p className='absolute top-[100px] left-[60px] text-[22px]  font-primary font-bold text-white'>Quriarbox Website</p>
                                <div className='rounded-full w-[40px] h-[40px] bg-primary text-white absolute right-6 bottom-6 flex items-center justify-center'>
                                    <FaLink size={24} />
                                </div>
                            </div>
                            </a>
                    </div>
                    <div className='w-[350px] h-[365px] relative bg-gradient-to-br from-blue-600 text-shadow-green-300 group rounded-[10px] pt-12 pb-[70px] px-8 overflow-hidden'>
                        <img src={weather} alt=""  className='w-full h-[240px] object-cover object-top'/>
                        <div className='pl-0'>
                            <button className='absolute bottom-0 left-0 text-white text-[22px] bg-black/70 py-4 px-6 mt-5 rounded-[20px] font-extrabold'>Weather-App</button>
                        </div>
                            <a href="https://weather-app-lovat-five-70.vercel.app">
                                <div className='absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition duration-300'>
                                <button className='bg-primary text-white font-bold text-[20px] rounded-b-[10px] ml-8 py-3 px-4'>Web App</button>
                                <p className='absolute top-[100px] left-[60px] text-[22px]  font-primary font-bold text-white'>Weather-App</p>
                                <div className='rounded-full w-[40px] h-[40px] bg-primary text-white absolute right-6 bottom-6 flex items-center justify-center'>
                                    <FaLink size={24} />
                                </div>
                            </div>
                            </a>
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default CreativeWorks