// import react from 'react'
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import topArrow from "../assets/arrow-31.svg";
const Footer = () => {
  return (
    <>
      <div
        className="mt-6   w-max-[800px] border-t border-gray-500 text-center"
        id="footer"
      >
        <p className="mt-5 text-gray-500">
          {" "}
          Made With 💕 <br /> Hashir Afzal{" "}
        </p>
        <div className="inline-flex text-gray-500 gap-4 text-3xl">
          <a href="">
            <FaGithubSquare />
          </a>
          <a href="">
            {" "}
            <FaInstagramSquare />
          </a>
          <a href="">
            {" "}
            <FaFacebookSquare />
          </a>
          <a href="">
            {" "}
            <FaDribbbleSquare />
          </a>
        </div>
      </div>
      <div className="my-2 pt-1 w-max-[800px] border-t border-gray-500 text-center">
        <div className="flex justify-between text-gray-500 gap-4 text-3xl">
          <a
            href="#navbar"
            className="text-gray-500 text-sm sm:text-xl flex  pl-6"
          >
            Back to Top <img src={topArrow} className="size-8" />{" "}
          </a>
          <a href="#footer" className="text-sm sm:text-xl">
            Based in Pakistan{" "}
          </a>
          <a href="#footer" className="text-sm sm:text-xl pr-6">
            {" "}
            &#169; 2024{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
