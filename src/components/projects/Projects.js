import React from 'react'
import Title from '../layouts/Title'
import { jarvis,Tictac,udemy,razorpay,chat, picfix, weather_app, mediaCenter} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Picfix.ai (AI Photo Editor)"
          des="Developed Picfix.ai with 5 advanced AI model APIs, Use Next auth for seamless interactions, MongoDB via Prisma, and PhonePay payment gateway, ensuring security and efficiency. Also, implemented SEO strategies to boost Picfix.ai's visibility and ranking on Google."
          src={picfix}
          link="https://picfix.ai"
        />
        <ProjectsCard
          title="Weather App"
          des="I built an application utilizing JavaScript, HTML, and CSS, allowing users to check live weather conditions either by inputting location names or utilizing device geolocation. this app provides instant access to accurate weather updates at the touch of a button."
          src={weather_app}
          link="https://hellofaiz.github.io/MCT-1/"
        />
        <ProjectsCard
          title="Interactive Voice Response (IVR)"
          des="The Interactive Voice Response (IVR) Node Editor is a web-based tool designed to simplify the creation and management of IVR systems. It allows users to visually design call flows by arranging nodes, each representing a step in the process, such as playing messages or gathering input."
          src={udemy}
          link="https://razorpay-backend-zgwh.onrender.com"
        />
        <ProjectsCard
          title="React Chat App"
          des="Developed a real-time chat app with React and Firebase, featuring Google authentication, message storage and logout Functionality, and dynamic UI updates. Utilized Chakra UI for a sleek interface."
          src={chat}
          link="https://chat-app-gilt-five.vercel.app/"
        />
        <ProjectsCard
          title="Media Center"
          des="Build a Media Center system to optimize file management, simplifying file upload, organization, and deletion for users. Introduced customizable dark and light mode options for personalized interfaces. Seamlessly integrated the Media Center with the existing Network Monitoring System (NMS)."
          src={mediaCenter}
          link="https://remarkable-flan-4bbf59.netlify.app"
        />
        <ProjectsCard
          title="Tic Tac Toe"
          des="Built a React Tic-Tac-Toe game with a responsive board, state management, winning logic, and play-again feature. Modular components, like squares and player cards, elevate the UI, complemented by customizable icons for a visually engaging"
          src={Tictac}
          link="https://tic-tac-toe-murex-two.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects