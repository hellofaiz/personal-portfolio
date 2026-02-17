import React, { useState } from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { calculateExperience } from '../../utils/experience';
import { FaDownload, FaEye } from 'react-icons/fa';

const LeftBanner = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Faiz_Full_stack.pdf';
    link.download = 'Faiz_Khan_Full_Stack_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [text] = useTypewriter({
    words: ["Full-Stack MERN Developer.", "React.js Specialist.", "Next.js Expert.", "Node.js Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // Dynamic experience calculation from Nov 2022
  const experience = calculateExperience('2022-11-01');

  return (
    <>
      <div className="w-full lgl:w-1/2 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-normal uppercase tracking-wider text-designColor">WELCOME TO MY WORLD</h4>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Hi, I'm{' '}
            <span className="gradient-text inline-block animate-gradient bg-gradient-to-r from-gradientStart via-accentColor to-gradientEnd">
              Faiz Khan
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            a <span className="text-designColor">{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#6366f1"
            />
          </h2>
          <p className="text-base font-bodyFont leading-7 tracking-wide text-lightText/90">
            Full-Stack MERN Stack Developer with <span className="text-designColor font-semibold">{experience} of experience</span> in building
            scalable applications using React.js, Node.js, MongoDB, Express.js, and Next.js.
            Experienced in deploying cloud-native solutions with AWS, Vercel, and Cloudflare.
            Delivered multiple projects across domains like E-Commerce, geolocation, SaaS based
            picfix.ai, chatbots etc, with a strong focus on clean code, performance, and user experience.
          </p>

          {/* Resume Download Buttons */}
          <div className="flex gap-2 sm:gap-4 mt-4">
            <button
              onClick={handleDownload}
              className="px-4 sm:px-6 py-3 bg-gradient-primary rounded-xl text-white text-xs sm:text-base font-semibold flex items-center gap-2 hover:shadow-glowPurple hover:scale-105 transition-all duration-300 group whitespace-nowrap"
            >
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
            </button>
            <button
              onClick={() => setShowPreview(true)}
              className="px-4 sm:px-6 py-3 bg-cardBg border-2 border-designColor/30 rounded-xl text-lightText text-xs sm:text-base font-semibold flex items-center gap-2 hover:bg-cardHover hover:border-designColor hover:shadow-glowPurple hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              <FaEye />
              Preview
            </button>
          </div>
        </div>
        {/* Media */}
        <Media />
      </div>

      {/* Resume Preview Modal */}
      {showPreview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-cardBg rounded-2xl border border-designColor/30 shadow-shadowTwo overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-designColor/20 bg-gradient-card">
              <h3 className="text-xl font-bold text-white">Resume Preview</h3>
              <div className="flex gap-2">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-gradient-primary rounded-lg text-white font-medium flex items-center gap-2 hover:shadow-glowPurple transition-all"
                >
                  <FaDownload />
                  Download
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-4 py-2 bg-cardHover rounded-lg text-lightText font-medium hover:text-white transition-all"
                >
                  Close
                </button>
              </div>
            </div>
            <iframe
              src="/Faiz_Full_stack.pdf"
              className="w-full h-[calc(100%-60px)]"
              title="Resume Preview"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default LeftBanner