import React from "react";
import Header from "../../component/Header.jsx";
import Intro from "./Intro.jsx";
import About from "./About.jsx";
import Expricence from "./Expricence.jsx";
import Project from "./Project.jsx";
import Courses from "./Course s.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import LeftSide from "./LeftSide.jsx";
import Resume from "./Resume.jsx";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className="bg-primary px-40">
          <Intro />
          <About />
          <Expricence />
          <Project />
          <Courses />
          <Resume/>
          <Contact/>
          <Footer/>
          <LeftSide/>
        </div>
      </div>
    </>
  );
};

export default Home;
