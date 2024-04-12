// import React from 'react'
import aboutImg from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto " id="about">
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt="About Image"
              className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-extrabold mb-5 ">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 mx-auto">
                As a budding Software Engineer, I am fueled by a fervent passion
                for crafting elegant solutions to complex problems. With a keen
                eye for detail and a knack for algorithmic thinking, I dive into
                projects with enthusiasm and creativity. Collaborating with
                peers and embracing continuous learning, I thrive in this
                dynamic field, where innovation and adaptation are paramount.
              </p>
            </div>
          </div>
          <div className="flex mt-5 items-center gap-7">
            <div className="p-4 rounded-lg bg-[#333333]">
              <h3 className="md:text-3xl text-2xl font-semibold text-white">
                <span> 10+</span>
              </h3>
              <p>
                <span className="text-xs md:text-base"> Projects</span>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#333333]">
              <h3 className="md:text-3xl text-2xl font-semibold text-white">
                <span>1+</span>
              </h3>
              <p>
                <span className="text-xs md:text-base"> year Exp</span>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#333333]">
              <h3 className="md:text-3xl text-2xl font-semibold text-white">
                <span> 5+</span>
              </h3>
              <p>
                <span className="text-xs md:text-base"> Happy Clients</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
