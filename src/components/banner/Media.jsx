import React from "react";
import {
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiPrisma,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-col gap-2 lgl:gap-2 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-2">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <a href="https://react.dev/">
            <span className="bannerIcon">
              <FaReact />
            </span>
          </a>
          <a href="https://nodejs.org/en">
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </a>
          <a href="https://nextjs.org/">
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
          </a>
          {/* <a href="https://git-first.hashnode.dev/nodejs-and-expressjs-powering-modern-web-development"> */}
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          {/* </a>

            <a href="https://git-first.hashnode.dev/javascript-with-cricket-analogy"> */}
          <span className="bannerIcon">
            <SiHtml5 />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <SiPrisma />
          </span>
          {/* </a> */}
        </div>
      </div>
      {/* <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
      </div> */}
    </div>
  );
};

export default Media;
