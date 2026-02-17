import React from 'react'
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, link }) => {
  return (
    <div className="w-full group">
      <div className="w-full p-6 xl:px-8 h-auto xl:py-8 rounded-2xl shadow-shadowOne hover:shadow-shadowTwo flex flex-col bg-gradient-card backdrop-blur-md border border-designColor/10 hover:border-designColor/30 transition-all duration-500 group-hover:scale-[1.02]">
        <div className="w-full h-[80%] overflow-hidden rounded-xl relative">
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-500 cursor-pointer"
            src={src}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bodyColor/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-primary rounded-lg text-white font-medium flex items-center gap-2 hover:shadow-glowPurple transition-all"
            >
              View Project <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        </div>
        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-semibold tracking-wider">
                {title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-cardBg border border-designColor/20 inline-flex justify-center items-center text-lightText hover:text-white hover:bg-gradient-primary hover:shadow-glowPurple transition-all duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>
            <p className="text-sm tracking-wide mt-3 text-lightText/80 group-hover:text-lightText/100 duration-300 leading-6">
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard