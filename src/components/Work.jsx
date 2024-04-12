// import React from "react";
import proj1 from "../assets/p1.png";
import proj2 from "../assets/p2.png";
import proj3 from "../assets/image1.png";
import proj4 from "../assets/image.png";
const Work = () => {
  return (
    <>
      <div id="portfolio" className="py-6 pb-10 max-w-[1200px] mx-auto">
        <div className="mx-auto px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-400 text-2xl">
                My <span>Projects</span>
              </h2>
              <p className="text-gray-500">
                Some Latest Projects for My Clients
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5  md:gap-6 xl:gap-8">
            <a className="h-68 overflow-hidden sm:col-span-2  rounded-lg shadow-lg md:h-80">
              <img
                src={proj1}
                alt="Project 1"
                className="h-full w-full object-cover object-right transition duration-200 hover:scale-110"
              />
            </a>
            <a className="h-68 overflow-hidden  rounded-lg shadow-lg sm:col-span-3 md:h-80">
              <img
                src={proj2}
                alt="Project 1"
                className="h-full w-full object-cover object-center transition duration-200 hover:scale-110"
              />
            </a>
            <a className="h-68 overflow-hidden  rounded-lg shadow-lg sm:col-span-3 md:h-80">
              <img
                src={proj3}
                alt="Project 1"
                className="h-full w-full object-cover object-center transition duration-200 hover:scale-110"
              />
            </a>
            <a className="h-68 overflow-hidden  rounded-lg sm:col-span-2  shadow-lg md:h-80">
              <img
                src={proj4}
                alt="Project 1"
                className="h-full w-full object-cover object-center transition duration-200 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
