import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div id="navbar">
      <div className="z-10 text-gray-500 flex justify-between lg:justify-around items-center max-w-[1200px] pt-4 sm:pt-0 sm:h-24 px-4 text-l mx-auto">
        <h1 className="text-3xl font-bold ml-4 primary-color">
          <a href="#main">Hashir D.</a>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-5">
            <a href="#main">Home</a>
          </li>
          <li className="p-5">
            <a href="#about">About</a>{" "}
          </li>
          <li className="p-5">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="p-5 ">
            <a href="#contact">Contact</a>
          </li>
          <li className="p-5">
            <a href="#footer">Socials</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "z-10 text-gray-300 fixed h-full left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#202121]  duration-500  ease-in-out"
              : "fixed left-[-100%] top-0  h-full ease-in-out duration-500"
          }
        >
          <h1 className="text-3xl m-4 primary-color z-10">Hashir D.</h1>
          <ul className="p-8 text-2xl">
            <li className="p-2">
              <a onClick={handleNav} href="#main">
                Home
              </a>
            </li>
            <li className="p-2">
              <a onClick={handleNav} href="#about">
                About
              </a>{" "}
            </li>
            <li className="p-2">
              <a onClick={handleNav} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="p-2 ">
              <a onClick={handleNav} href="#contact">
                Contact
              </a>
            </li>
            <li className="p-2">
              <a onClick={handleNav} href="#footer">
                Socials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
