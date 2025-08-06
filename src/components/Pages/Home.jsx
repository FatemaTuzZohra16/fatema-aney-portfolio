import React from 'react'
import Banner from "../Banner/Banner";
import About from '../About/About';
import Skill from '../Skills/Skill';
import HirePart from '../HirePart/HirePart';
import Contact from '../Contact/Contact';
import CreativeWorks from '../CreativeWorks/CreativeWorks';

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Banner/>
      <About/>
      <Skill/>
      <CreativeWorks/>
      <HirePart/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home