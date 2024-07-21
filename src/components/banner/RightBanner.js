import React from 'react'
import { bannerImg } from "../../assets/index";
import { portfolioImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[70%] h-[70%] lgl:w-[70%] lgl:h-[70%] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[60%] h-[60%] lgl:w-[60%] lgl:h-[60%] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner