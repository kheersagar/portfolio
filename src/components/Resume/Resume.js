import React, { useEffect } from "react";
import {
  Tab,
  Nav,
  Col,
  Row,
  ProgressBar,
  Spinner,
  Card,
  Button,
} from "react-bootstrap";

import collegeMentor from "../../assests/Img/login.png";
import sae from "../../assests/Img/logo.png";
import codepen from "../../assests/Img/ogimage.jpg";
import movieapp from "../../assests/Img/hotstart-clone-2.jpg";

import "./Resume.css";
import Aos from "aos";
import "aos/dist/aos.css";

//text

const collegeMEntor_text =
  "collegeMentor is a space where students can find there mentor by simply entering into the website and searching for the related keywords, and they can chat with them through our inbuilt chat system. Study material section has been included so that it can be helpful for their learning. Students can post their projects through in built post upload system and even see others post to know what are things going on in the campus.";
const sae_text =
  "SAE is a react based frontend website to showcase the achievements and going activities of SAE club of OP Jindal University";
const codepen_clone_text =
  "SAE is a react based frontend website to showcase the achievements and going activities of SAE club of OP Jindal University";
const movieapp_text =
  "App contains Home Tab which provide the movie details with different genre then suggests you similar kind of movie depending upon the movie which you have selected. Tv tab to provide Top rated and Popular Tv shows details.I have used TMDB API to fetch movies and tv shows data . And also used react-native Bottom tab navigation and Implemented Carousel. Then building the apk of the project.";

//link
const movieapp_link_code = "https://github.com/kheersagar/Movie-app-react-native";
const collegementor_link_code = "https://github.com/kheersagar/collegeMentor";
const sae_link_code = "https://github.com/kheersagar/SAE";
const codepen_link_code = "https://github.com/kheersagar/codepen-clone";

//live link

const codepen_link_live = "https://kheersagar.github.io/codepen-clone/";
const collegementor_link_live = "https://collegementor.herokuapp.com/";
const sae_link_live = "https://kheersagar.github.io/SAE/";



  function Education() {
  return (
    <>
      <div>
        <h1>
          <Spinner animation="border" size="sm" /> St. Michael’s Eng. Med.
          School, Raigarh
        </h1>
        <br />
        <h5 style={{ marginLeft: "2rem" }}>12th PERCENTAGE – 73%</h5>
      </div>
      <div>
        <h1>
          <Spinner animation="border" size="sm" /> OP Jindal University, Raigarh
        </h1>
        <br />
        <h5 style={{ marginLeft: "2rem" }}>CGPA (4th Sem) – 9.01</h5>
      </div>
    </>
  );
}

function Programming() {
  return (
    <Row>
      <Col>
        <h3>JavaScript</h3>
        <ProgressBar
          variant="success"
          striped
          now={90}
          key={1}
          label={`${90}%`}
        />
        <h3>Node Js</h3>
        <ProgressBar
          variant="success"
          striped
          now={85}
          key={1}
          label={`${85}%`}
        />
        <h3>C++</h3>
        <ProgressBar
          variant="success"
          striped
          now={95}
          key={1}
          label={`${95}%`}
        />
        <h3>React Native</h3>
        <ProgressBar
          variant="success"
          striped
          now={60}
          key={1}
          label={`${60}%`}
        />
        <h3>HTML</h3>
        <ProgressBar
          variant="success"
          striped
          now={95}
          key={1}
          label={`${95}%`}
        />
      </Col>
      <Col>
        <h3>ReactJs</h3>
        <ProgressBar
          variant="danger"
          striped
          now={85}
          key={1}
          label={`${85}%`}
        />
        <h3>Express JS</h3>
        <ProgressBar
          variant="danger"
          striped
          now={80}
          key={1}
          label={`${80}%`}
        />
        <h3>MongoDB</h3>
        <ProgressBar
          variant="danger"
          striped
          now={80}
          key={1}
          label={`${80}%`}
        />
        <h3>CSS</h3>
        <ProgressBar
          variant="danger"
          striped
          now={90}
          key={1}
          label={`${90}%`}
        />
        <h3>JAVA</h3>
        <ProgressBar
          variant="danger"
          striped
          now={75}
          key={1}
          label={`${75}%`}
        />
      </Col>
    </Row>
  );
}

function Work() {
  return (
    <>
      <Row>
        <h2>
          <Spinner animation="border" size="sm" /> Front-End Web Developer
        </h2>
        <p>• Worked on scalable Architecture of CSS,convert Figma to HTML.</p>
        <p>
          • Day-to-Day responsibilities was to maintain their live website by
          fixing front-end issues, Develop New features, coordinating with
          backend team and Designer.
        </p>
        <p>• 6 Months Experience.</p>
      </Row>
    </>
  );
}

function Project({ img, text, title, link_code,link_live }) {
  return (
    <Card
      style={{ width: "20rem", marginBottom: "2rem", padding: "0.3rem" }}
      className="project_card"
    >
      <Card.Img variant="top" src={img} style={{ borderRadius: "5px" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{fontWeight:'500',wordWrap:'break-word',lineHeight:'25px',textAlign:'left'}}>{text}</Card.Text>
        <Row>
          <Col><Button variant="outline-warning"><a href={link_code} target="_blank" style={{textDecoration:'none',color:'black',fontSize:'1.2rem',fontWeight:"500"}}>Code</a></Button></Col>
          <Col><Button variant="outline-danger"><a href={link_live} target="_blank" style={{textDecoration:'none',color:'black',fontSize:'1.2rem',fontWeight:"500"}}>live</a></Button></Col>
        </Row>
        
        
      </Card.Body>
    </Card>
  );
}

function Resume() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 50,
      disable: "mobile",
    });
  }, []);

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Education">
      <Row className="side_nav" data-aos="fade-left" data-aos-once={true}>
        <h1 style={{ textAlign: "center", padding: "1rem 0" }}>Resume 📄</h1>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item className="tab_item">
              <Nav.Link eventKey="Education" className="tab_link">
                Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab_item">
              <Nav.Link eventKey="Work" className="tab_link">
                Work History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab_item">
              <Nav.Link eventKey="Programming" className="tab_link">
                Programming Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab_item">
              <Nav.Link eventKey="Projects" className="tab_link">
                Projects
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className="resume_second_section">
          <Tab.Content style={{ padding: "0 1rem" }}>
            <Tab.Pane eventKey="Education">
              <Education />
            </Tab.Pane>
            <Tab.Pane eventKey="Work">
              <Work />
            </Tab.Pane>
            <Tab.Pane eventKey="Programming">
              <Programming />
            </Tab.Pane>
            <Tab.Pane eventKey="Projects">
              <Row className="project_main">
                <Col>
                  <Project
                    img={collegeMentor}
                    title="CollegeMEntor"
                    text={collegeMEntor_text}
                    link_code={collegementor_link_code}
                    link_live={collegementor_link_live}
                  />
                  <Project img={sae} title="SAE" text={sae_text} link_code={sae_link_code} link_live={sae_link_live}/>
                </Col>
                <Col>
                  <Project
                    img={codepen}
                    title="Code-pen clone"
                    text={codepen_clone_text}
                    link_code={codepen_link_code}
                    link_live={codepen_link_live}
                  />
                  <Project
                    img={movieapp}
                    title="Movie App"
                    text={movieapp_text}
                    link_code={movieapp_link_code}
                    link_live={movieapp_link_code}
                  />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Resume;
