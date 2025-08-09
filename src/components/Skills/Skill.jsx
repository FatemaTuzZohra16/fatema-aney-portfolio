import React from 'react'
import Container from '../Layout/Container'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { SiNextdotjs } from "react-icons/si";

const Skill = () => {

    return (
        <div className='bg-section pt-[60px] pb-[90px]'>
            <Container>
                <div>
                    <h1 className='font-primary font-bold text-[40px] leading-[45px] text-center pb-[60px]'>My Skills</h1>
                </div>

                <div className="flex flex-wrap justify-center gap-9 text-center">
                    <div className="flex flex-col items-center text-blue-600 bg-black/70 rounded shadow-2xl py-3 px-9 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <FaHtml5 size={40} />
                        <p className="mt-2 text-white">HTML5</p>
                    </div>
                    <div className="flex flex-col items-center text-blue-600 bg-black/70 rounded shadow-2xl py-3 px-11 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <FaCss3Alt size={40} />
                        <p className="mt-2 text-white">CSS3</p>
                    </div>
                    <div className="flex flex-col items-center text-yellow-500 bg-black/70 rounded shadow-2xl py-3 px-7 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <FaJs size={40} />
                        <p className="mt-2 text-white">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center text-cyan-500 bg-black/70 rounded shadow-2xl py-3 px-11 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <FaReact size={40} />
                        <p className="mt-2 text-white">React</p>
                    </div>
                    <div className="flex flex-col items-center text-purple-700 bg-black/70 rounded shadow-2xl py-3 px-10 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <SiRedux size={40} />
                        <p className="mt-2 text-white">Redux</p>
                    </div>
                    <div className="flex flex-col items-center text-purple-600 bg-black/70 rounded shadow-2xl py-3 px-7 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <FaBootstrap size={40} />
                        <p className="mt-2 text-white">Bootstrap</p>
                    </div>
                    <div className="flex flex-col items-center text-sky-400 bg-black/70 rounded shadow-2xl py-3 px-7 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <SiTailwindcss size={40} />
                        <p className="mt-2 text-white">Tailwind CSS</p>
                    </div>
                    <div className="flex flex-col items-center text-sky-400 bg-black/70 rounded shadow-2xl py-3 px-9 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <SiNextdotjs size={40} />
                        <p className="mt-2 text-white">Next.js</p>
                    </div>

                    <div className="flex flex-col items-center text-orange-500 bg-black/70 rounded shadow-2xl py-3 px-10 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <FaGitAlt size={40} />
                        <p className="mt-2 text-white">Git</p>
                    </div>
                    <div className="flex flex-col items-center text-black bg-black/70 rounded shadow-2xl py-3 px-9 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <FaGithub size={40} />
                        <p className="mt-2 text-white">GitHub</p>
                    </div>
                    <div className="flex flex-col items-center text-pink-600 bg-black/70 rounded shadow-2xl py-3 px-10 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <SiFigma size={40} />
                        <p className="mt-2 text-white">Figma</p>
                    </div>
                    <div className="flex flex-col items-center text-indigo-600 bg-black/70 rounded shadow-2xl py-3 px-7 hover:shadow-[0_4px_4px_4px_rgba(0,0,0,0.5)] hover:animate-pulse">
                        <VscCode size={40} />
                        <p className="mt-2 text-white">VS Code</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skill