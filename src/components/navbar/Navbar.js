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
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
          <div className="w-[100%] h-screen overflow-scroll absolute top-0 left-0 bg-bodyColor/98 backdrop-blur-lg p-4 scrollbar-hide border-r border-designColor/20">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <h1 className='text-3xl font-bold gradient-text mb-4'>Faiz Khan</h1>
                <p className="text-sm text-lightText/80 mt-2 leading-6">
                  Full-Stack MERN Stack Developer with 3+ years of experience building scalable applications.
                  Specialized in React.js, Node.js, MongoDB, Express.js, and Next.js with cloud deployment expertise.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://twitter.com/hello_faiz">
                    <span className="bannerIcon">
                      <FaTwitter />
                    </span>
                  </a>

                  <a href="https://github.com/hellofaiz">
                    <span className="bannerIcon">
                      <a href="sdf">
                        <FaGithub />
                      </a>
                    </span>
                  </a>

                  <a href="https://www.linkedin.com/in/hello-faiz\">
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>

                  <a href="https://www.instagram.com/this_is_mr.khan_">
                    <span className="bannerIcon">
                      <a href="AF">
                        <FaInstagram />
                      </a>
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
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