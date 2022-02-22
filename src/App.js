import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Typical from "react-typical";

import profile from "./assests/Img/profile.jpeg"
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

function App() {
  useEffect(()=>{
    Aos.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 50,
    });
  },[]);

  return (
    <div className="App">
      <NavigationBar />
      <div className="main" data-aos="fade-up">
        <div className="main_fisrt_section">
          <div className="first_section_text">
          <h1>Hello 👋,</h1>
          <h1>I am Kheersagar</h1>
          <h1>
          <Typical
            steps={[
              "MERN Stack Developer 👨‍💻",
              4000,
              "Coder",
              4000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
          </h1>
          </div>
          <div className="first_section_button">
            <Button variant="outline-danger" style={{color:"white",marginRight:'1rem'}}><a href="https://drive.google.com/file/d/1gbwBVibwq9htemRAS0FexbGBwO6Yt5dN/view?usp=sharing"download target="_blank" style={{textDecoration:'none',color:'white',fontSize:'1.5rem',fontWeight:"500"}}>Resume</a></Button>{" "}
            <a href="https://github.com/kheersagar" target="_blank"> <img src={require("./assests/Img/github.png")} width="40" style={{cursor:'pointer'}}/>{" "}</a>
            <a href="https://www.linkedin.com/in/kheersagar-parja-02302b1b8/" target="_blank"> <img src={require("./assests/Img/linkedin.png")} width="40" style={{borderRadius:'50%',cursor:'pointer'}}/> </a>
          </div>
        </div>
        <div className="main_second_section">
        <div className="image_container">
          <img src={profile} className="profile_img"/>
        </div>
        </div>
        <img src={require("./assests/Img/curve-white.png")} className="curve"/>
      </div>
      <div className="about_section" id="about">
        <About />
      </div>
      <div id="resume">
        <Resume />
      </div>
    </div>
  );
}

export default App;
