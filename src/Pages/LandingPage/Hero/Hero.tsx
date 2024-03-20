import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom"; 
import hero from "../../../assests/images/hero-card.jpg";
import right from "../../../assests/images/arrow-right.png";
import "animate.css";
import "./Hero.css";
import HospitalSearch from "../../../Components/HospitalSeach/HospitalSearch2";

const Hero: React.FC = () => {
 

  return (
    <div className="Banner">
      <div className="Cont">
        <div className="Bannertxt">
          <h1 className="txt animate__animated animate__heartBeat animate__repeat-2	2">
            Discover Your Perfect Care <br />
            <span className="span ">Find the nearest</span>
            Hospital <br />
            24/7, Everywhere!
          </h1>
          <p>
            Your health is precious.
            <br />
            Find the best care tailored to your needs.
          </p>
          <button className="Btn">
            <Link to="/auth">Get Started</Link>
          </button>
          <div className="learn-more">
            <ScrollLink to="about" smooth={true} duration={500}>
              Learn more <img src={right} alt="" className="ArrowRight" />
            </ScrollLink>
          </div>
        </div>
        <div className="animate__animated  animate__backInRight">
          <img src={hero} alt="" className="HeroImage" />
        </div>
      </div>
      <div className="h-search">
        <HospitalSearch />
      </div>
    </div>
  );
};

export default Hero;
