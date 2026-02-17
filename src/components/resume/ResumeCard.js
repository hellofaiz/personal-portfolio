import React from 'react'

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-cardBg border-2 border-designColor/30">
          <span className="w-3 h-3 rounded-full bg-designColor inline-flex group-hover:scale-150 group-hover:shadow-glowPurple transition-all duration-500"></span>
        </span>
      </div>
      <div className="w-full bg-gradient-card backdrop-blur-md hover:bg-cardHover duration-500 rounded-2xl p-6 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne hover:shadow-shadowTwo border border-designColor/10 hover:border-designColor/30 transition-all group-hover:scale-[1.02]">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-designColor transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-lightText/70 group-hover:text-lightText transition-colors duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-white bg-gradient-primary rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium whitespace-nowrap">
              {result}
            </p>
          </div>
        </div>
        <div className="text-sm md:text-base font-medium text-lightText/80 group-hover:text-lightText/90 transition-colors duration-300">
          {des}
        </div>
      </div>
    </div>
  );
}

export default ResumeCard