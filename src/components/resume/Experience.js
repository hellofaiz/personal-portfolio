import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[110] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Associate Software Developer"
            subTitle="Dyotis Technologies"
            result="Noida, India"
            des="Currently serving as an Associate Software Developer at Dyotis Technologies in Noida, India since November 2022. "
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Lorem Ipsum"
            subTitle="Lorem Ipsum Dolar Sit Amet"
            result="Remote"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam quisquam, itaque soluta vitae aut harum, voluptates omnis et delectus unde expedita, sequi est fugit aliquam natus in dignissimos tenetur. "
          />
           <ResumeCard
            title="Lorem Ipsum"
            subTitle="Lorem Ipsum Dolar Sit Amet"
            result="Remote"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam quisquam, itaque soluta vitae aut harum, voluptates omnis et delectus unde expedita, sequi est fugit aliquam natus in dignissimos tenetur. "
          />
           <ResumeCard
            title="Lorem Ipsum"
            subTitle="Lorem Ipsum Dolar Sit Amet"
            result="Remote"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam quisquam, itaque soluta vitae aut harum, voluptates omnis et delectus unde expedita, sequi est fugit aliquam natus in dignissimos tenetur. "
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
