import React, { useState } from 'react'
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience"

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(true);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-designColor/20">
      <div className="flex justify-center items-center text-center ">
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* Experience Tab - Show First */}
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${experienceData
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Experience
          </li>

          {/* Skills Tab - Show Second */}
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
          >
            Professional Skills
          </li>

          {/* Education Tab - Show Last */}
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${educationData
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Education
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}

    </section>
  );
}

export default Resume