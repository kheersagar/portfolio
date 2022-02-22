import React, { useEffect } from 'react'
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(()=>{
    Aos.init({
      offset: window.innerHeight > 1000 ?  500: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 50,
    });
  },[]);

  return (
    <div className='about_main' data-aos="zoom-in-up" data-aos-once={true}>
      <div className='heading_about'>
        <h1>About Me🙎</h1>
      </div>
      <div>
        <p className='about_para'>
        I am a MERN Stack Developer with working experince as front-end web developer at Across the globe (ATG)
        and had had worked as Business Development Associate. I have Developed Various Projects in Mern Stack and also worked on 
        Mobile APP in React Native.
        </p>
      </div>
    </div>
  )
}

export default About