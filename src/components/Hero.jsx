// import React from 'react'
import profilePic from "../assets/3d.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div
        id="hero"
        className=" sm:py-10 sm:my-7  max-w-[1200px] h-auto mx-auto flex  flex-col-reverse  sm:flex-row  sm:text-left justify-center text-center"
      >
        <div className=" flex-col sm:justify-start ">
          <p className="md:text-5xl sm:text:4xl text-2xl font-bold text-gray-200">
            My name is Hashir Dev
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-3xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "FrontEnd Dev",
                1000,
                "Web Designer",
                1000,
                "Ai Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="flex sm:justify-start justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500 ">
              with 1+ year of experience
            </p>
          </div>
          <div className="text-5xl flex items-center sm:justify-start gap-16 my-7 text-purple-600 justify-center">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>
          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-75 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300"></div>
            <a
              href="#"
              title="Download CV"
              role="button"
              className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="my-auto">
          <img
            src={profilePic}
            alt="profile Picture"
            className=" w-[450px] p-10 sm:p-0 sm-w-[500px] mx-auto  h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
