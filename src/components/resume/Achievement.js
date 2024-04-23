import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018-Present</p>
          <h2 className="text-4xl font-bold">Academics</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="JEE 2021"
            subTitle="Top 1.5% amongst 11,00,000 Candidates"
            result="Success"
            des="Cleared Jee Mains 2021 with 98%ile , then Cleared Jee Advanced and was amongst top 1.5% of 11,00,000 JEE Aspirants after experience a failure at 2020 edition of JEE exams"
          />
          <ResumeCard
            title="Intermediate 2020"
            subTitle="Passed with 88.8% marks"
            result="Success"
            des="Cleared 12th Board Exams with Good percentage of marks with a planned Strategy"
          />
          <ResumeCard
            title="Matriculation 2018"
            subTitle="Passed with 94.2% marks"
            result="Success"
            des="Cleared 10th Board Exams with third higest Percentage of marks amongst the Batch of 120 students in that session of School"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-4xl font-bold">Extra Cirriculum Activities</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Spardha 2022"
            subTitle="Event Co-ordinator"
            result="Success"
            des="Served as the Event Coordinator for India's largest sports fest, Spardha, overseeing the successful execution of the Handball event."
          />
          <ResumeCard
            title="Spardha 2022"
            subTitle="Gold Medalist at Handball"
            result="Success"
            des="Achieved gold medal as the goalkeeper while also fulfilling the role of Event Coordinator at Spardha, India's Biggest sporting fest, contributing to our team's triumphant victory."
          />
          <ResumeCard
            title="Quiz Competition 2018"
            subTitle="Got 1st Prize"
            result="Success"
            des="Got 1st Prize at the Quiz competition held at my School by the Local Coaching Center"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
