import React from 'react'
import Title from '../layouts/Title'
import { Tictac, udemy, chat, picfix, time_management_app, mediaCenter } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-designColor/20"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="EXPLORE MY LATEST WORK"
          des={<span className="gradient-text">Featured Projects</span>}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        <ProjectsCard
          title="PicFix.AI - AI Photo Enhancement"
          des="Full-stack SaaS platform built with Next.js, integrating cutting-edge AI technologies (Google Gemini API, Cloudflare AI). Features object recoloring, background removal, AI image generation etc. Optimized architecture supporting high-volume image processing with comprehensive SEO optimization, mobile-responsive design, and enterprise-grade security. Enhanced SEO with integrated Razorpay payment system."
          src={picfix}
          link="https://picfix.ai"
        />
        <ProjectsCard
          title="Real-Time Geofencing Platform"
          des="Enterprise geolocation tracking platform leveraging Leaflet, React-Leaflet-Draw, and Turf.js for geofencing, route corridor creation, and spatial analysis. Features hierarchical project management with role-based access. Enhanced with lazy loading for map rendering improving initial load time by 25-35% and unmemoized render reducing redundant API calls by 30-40%."
          src={udemy}
          link="https://razorpay-backend-zgwh.onrender.com"
        />
        <ProjectsCard
          title="MediaCenter - IVR Management"
          des="Enterprise multi-language IVR audio management system with comprehensive file management. Features category grouping, hierarchical organization, real-time audio streaming with performance optimization achieving 30-40% faster retrieval through Redux caching. Supports efficient FormData handling and seamless NMS integration with dark/light mode."
          src={mediaCenter}
          link="https://remarkable-flan-4bbf59.netlify.app"
        />
        <ProjectsCard
          title="Modern Fintech Application"
          des="Full-stack fintech app built with Next.js and MongoDB via Prisma. Implements secure multi-currency payment system (Razorpay) achieving 10-50% faster rendering through Next.js optimization. Features comprehensive admin panel, user management, and revenue tracking with integrated GraphCMS via Hygraph. SEO-optimized scalable architecture."
          src={time_management_app}
          link="https://time-manegement-app.vercel.app"
        />
        <ProjectsCard
          title="Real-Time Chat Application"
          des="Built a real-time chat application with React and Firebase featuring Google authentication, real-time message storage with Firestore, and dynamic UI updates. Implemented with Chakra UI for a modern, sleek interface. Features instant messaging, user presence indicators, and logout functionality."
          src={chat}
          link="https://chat-app-gilt-five.vercel.app/"
        />
        <ProjectsCard
          title="Interactive Tic-Tac-Toe"
          des="React-based game with responsive board design, intelligent state management, winning logic detection, and play-again feature. Utilized modular component architecture with customizable player icons and cards for an engaging user experience. Features smooth animations and clean, maintainable code structure."
          src={Tictac}
          link="https://tic-tac-toe-murex-two.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects