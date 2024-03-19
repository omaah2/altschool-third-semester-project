import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "../../../assests/images/hero-card.jpg";
import right from "../../../assests/images/arrow-right.png";
import "animate.css";
import "./Hero.css";
import HospitalSearch from "../../../Components/HospitalSeach/HospitalSearch2";


const Hero: React.FC = () => {
  const textVariants = {
    animate: {
      scale: [0.9, 1.1, 0.9],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <div className="Banner">
      <div className="Cont">
        <div className="Bannertxt">
          <h1 className="txt">
            Discover Your Perfect Care <br />
            <motion.span
              initial={{ scale: 0 }}
              variants={textVariants}
              animate="animate"
            >
              {Array.from("Find the Nearest").map((letter, index) => (
                <motion.span
                  key={index}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>{" "}
            Hospital <br />
            24/7, Everywhere!
          </h1>
          <p>
            Your health is precious. <br />
            Find the best care tailored to your needs.
          </p>
          <button className="Btn">
            <a href="/auth">Get Started</a>
          </button>
          <Link to="/about" className="Link">
            Learn more <img src={right} alt="" className="ArrowRight" />
          </Link>
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
