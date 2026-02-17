import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";
import { getExperienceDuration, calculateExperience } from "../../utils/experience";

const Experience = () => {
  // Dynamic calculation from join date
  const joinDate = '2022-11-01';
  const experienceDuration = getExperienceDuration(joinDate);
  const totalExperience = calculateExperience(joinDate);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase font-semibold">{experienceDuration}</p>
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lightText/70 text-sm">
            {totalExperience} of hands-on experience in full-stack development
          </p>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-designColor/30 flex flex-col gap-10 pl-8">

          {/* Current Role: Full-Stack Developer */}
          <ResumeCard
            title="Full-Stack Developer (MERN / Next.js)"
            subTitle="Dyotis Technologies - Feb 2024 to Present"
            result="Noida, India"
            des={
              <div className="space-y-3">
                <p className="text-lightText/90 leading-7">
                  As a Full-Stack Developer, I architect, develop, and deploy production-grade web applications
                  using MERN stack and Next.js, leading end-to-end project delivery.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lightText/80 text-sm">
                  <li>Architecting and building AI-powered SaaS platforms (picfix.ai), enterprise dashboards, and media management (IVR) systems</li>
                  <li>Leading full-stack development with React.js, Node.js, Express.js, MongoDB, and Next.js</li>
                  <li>Implementing real-time features using WebSockets and integrating payment gateways (Razorpay, PayPal)</li>
                  <li>Deploying scalable cloud-native solutions on AWS, Vercel, and Cloudflare with CI/CD pipelines</li>
                  <li>Optimizing application performance and reducing load times by up to 40%</li>
                </ul>
              </div>
            }
          />

          {/* Junior Developer Role */}
          <ResumeCard
            title="Junior Full-Stack Developer"
            subTitle="Dyotis Technologies - Feb 2023 to Jan 2024"
            result="Noida, India"
            des={
              <div className="space-y-3">
                <p className="text-lightText/90 leading-7">
                  Developed and maintained multiple web applications, focusing on both frontend and backend development
                  while learning advanced MERN stack patterns and best practices.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lightText/80 text-sm">
                  <li>Built responsive web applications using React.js, Material-UI, and Tailwind CSS</li>
                  <li>Developed RESTful APIs with Node.js and Express.js, handling authentication with JWT</li>
                  <li>Implemented database schemas and queries using MongoDB with focus on optimization</li>
                  <li>Integrated third-party APIs and services for enhanced application functionality</li>
                  <li>Collaborated with senior developers on code reviews and learning clean code principles</li>
                </ul>
              </div>
            }
          />

          {/* Trainee Role */}
          <ResumeCard
            title="Trainee Software Developer"
            subTitle="Dyotis Technologies - Nov 2022 to Jan 2023"
            result="Noida, India"
            des={
              <div className="space-y-3">
                <p className="text-lightText/90 leading-7">
                  Started my professional journey learning foundational web development concepts and
                  contributing to real-world projects under mentorship.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lightText/80 text-sm">
                  <li>Learned React.js fundamentals including components, hooks, state management, and routing</li>
                  <li>Assisted in building user interfaces and implementing responsive designs</li>
                  <li>Gained hands-on experience with Node.js, Express.js, and MongoDB basics</li>
                  <li>Participated in team meetings, code reviews, and agile development processes</li>
                  <li>Fixed bugs and made minor feature enhancements across multiple projects</li>
                </ul>
              </div>
            }
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
