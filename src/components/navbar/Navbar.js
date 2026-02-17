import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor/95 backdrop-blur-md mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-designColor/20 shadow-lg">
      <div>
        <h1 className='text-3xl font-bold gradient-text animate-gradient bg-gradient-to-r from-gradientStart via-accentColor to-gradientEnd'>Faiz Khan</h1>
      </div>
      <div className="flex items-center gap-6">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="/Faiz_Full_stack.pdf"
          download="Faiz_Khan_Full_Stack_Developer_Resume.pdf"
          className="hidden mdl:flex px-4 py-2 bg-gradient-primary rounded-lg text-white font-medium hover:shadow-glowPurple transition-all duration-300 whitespace-nowrap"
        >
          Resume
        </a>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-gradient-primary w-10 h-10 inline-flex items-center justify-center rounded-full text-white cursor-pointer hover:shadow-glowPurple transition-all duration-300"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[85%] h-screen overflow-y-auto fixed top-0 left-0 bg-[#0a0e27] z-[60] p-8 scrollbar-hide border-r border-designColor/20 transition-all duration-500">
            <div className="flex flex-col gap-6 relative">
              <div className="flex flex-col gap-3">
                <h1 className='text-3xl font-bold gradient-text animate-gradient bg-gradient-to-r from-gradientStart via-accentColor to-gradientEnd'>Faiz Khan</h1>
                <p className="text-sm text-lightText/70 leading-6 font-bodyFont">
                  Full-Stack MERN Stack Developer specializing in building high-performance web applications.
                </p>
              </div>
              <ul className="flex flex-col gap-5 py-6 border-y border-designColor/10">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-lg font-medium hover:text-designColor duration-300 cursor-pointer"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-6">
                <h2 className="text-sm uppercase font-titleFont text-designColor tracking-[2px]">
                  Connect with me
                </h2>
                <div className="flex gap-4">
                  <a href="https://twitter.com/hello_faiz" target="_blank" rel="noreferrer">
                    <span className="bannerIcon !w-12 !h-12 !text-lg">
                      <FaTwitter />
                    </span>
                  </a>
                  <a href="https://github.com/hellofaiz" target="_blank" rel="noreferrer">
                    <span className="bannerIcon !w-12 !h-12 !text-lg">
                      <FaGithub />
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/hello-faiz\" target="_blank" rel="noreferrer">
                    <span className="bannerIcon !w-12 !h-12 !text-lg">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a href="https://www.instagram.com/this_is_mr.khan_" target="_blank" rel="noreferrer">
                    <span className="bannerIcon !w-12 !h-12 !text-lg">
                      <FaInstagram />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute -top-4 -right-4 bg-cardBg w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer border border-designColor/20 shadow-lg"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar