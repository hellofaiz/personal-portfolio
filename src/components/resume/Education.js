import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017-2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Institutions</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology (B.Tech)"
            subTitle="Kashi Instotute of Technology -(A.K.T.U) (2017-2019)"
            // result="7.08 CGPA"
            des="Completed Bachelor of Technology in Mechanical Engineering obtained from Kashi Institute of Technology, Varanasi, Uttar Pradesh, with a CGPA of 7.08."
          />
          <ResumeCard
            title="Senior Secondary Education"
            subTitle="Haridwar Rai Intermediate College (2015-2017)"
            // result="4.75/5"
            des="Completed senior secondary education with excellence, focusing on core subjects. Demonstrated strong dedication to academic and competitive goals"
          />
          <ResumeCard
            title="High School Education"
            subTitle="Haridwar Rai Intermediate College (2013-2015)"
            // result="5.00/5"
            des="Passed Out as Highly motivated and dedicated student consistently recognized for academic excellence during high school. Developed strong study habits and time management skills"
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Courses and Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Pw Skills Web Development Masters"
            subTitle="Pw Skills (April,2023 - Current)"
            result="50% Completed"
            des="
Pursuing an immersive MERN stack web development course in Hindi, mastering both front-end and server-side skills for versatile application building. Seeking to enhance proficiency in full-stack development."
          />
          <ResumeCard
            title="Internshala Traninig - Web Development"
            subTitle="Internshala (July 2022 - August 2022)"
            result="Certified"
            des="Successfully completed a 8 weeks online certified training on
Web Development. The training consisted of HTML, CSS,
Bootstrap, DBMS, PHP, JS, React, and Final Project modules.
In the final assessment, I scored 83% marks.
"
          />
          <ResumeCard
            title="Internshala Training - Business Communication Skills"
            subTitle="Internshala (August 2022 - September 2022)"
            result="Certified"
            des="
Completed a 4-week online certified Business Communication Skills training, covering key modules, achieved a top performer status with a 94% final assessment score, and now ready to apply these skills effectively in the workplace."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education