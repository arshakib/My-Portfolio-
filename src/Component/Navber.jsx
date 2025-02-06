import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navber = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };
  return (
    <div>
      <div className="z-50 fixed flex justify-center w-full text-white font-bold">
        <div
          className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl
hidden md:flex items-center justify-center p-2 max-w-[600px] mx-auto"
        >
          <ul className="flex flex-row p-2 space-x-8">
            <a
              href="#about"
              className="transform hover:skew-x-12 hover:text-white/50
transition-all duration-300 ease-in-out"
            >
              About Me
            </a>
            <a
              href="#education "
              className="transform hover:skew-x-12 hover:text-white/50
transition-all duration-300 ease-in-out"
            >
              Education
            </a>
            <a
              href="#portfolio"
              className="transform hover:skew-x-12 hover:text-white/50
transition-all duration-300 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="transform hover:skew-x-12 hover:text-white/50
transition-all duration-300 ease-in-out"
            >
              Experience
            </a>

            <a
              href="#stack"
              className="transform hover:skew-x-12 hover:text-white/50
transition-all duration-300 ease-in-out"
            >
              Stack
            </a>
            <a
              href="#footer"
              className="transform hover:skew-x-12 hover:text-white/50
transition-all duration-300 ease-in-out"
            >
              Footer
            </a>
          </ul>
        </div>
        <div
          onClick={toggleNav}
          className="md:hidden absolute top-5 right-14 border rounded
Z-50 text-white/70 border-white/70 p-2"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-center space-y-8 h-full">
            <li>
              <a href="#about" onClick={closeNav} className="text-5x1">
                About Me
              </a>
            </li>
            <li>
              <a href="#education" onClick={closeNav} className="text-5x1">
                Education
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={closeNav} className="text-5x1">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeNav} className="text-5x1">
                Experience
              </a>
            </li>
            <li>
              <a href="#stack" onClick={closeNav} className="text-5x1">
                Stack
              </a>
            </li>
            <li>
              <a href="#footer" onClick={closeNav} className="text-5x1">
                Footer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
