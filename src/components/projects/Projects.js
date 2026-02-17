import React from 'react'
import Title from '../layouts/Title'
import { jarvis, chat, picfix, mediaCenter, udemy, razorpay } from "../../assets/index";
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
        />
        <ProjectsCard
          title="Real-Time Geofencing Platform"
          des="Enterprise geolocation tracking platform leveraging Leaflet, React-Leaflet-Draw, and Turf.js for geofencing, route corridor creation, and spatial analysis. Features hierarchical project management with role-based access. Enhanced with lazy loading for map rendering improving initial load time by 25-35% and unmemoized render reducing redundant API calls by 30-40%."
          src={udemy}
        />
        <ProjectsCard
          title="MediaCenter - IVR Management"
          des="Enterprise multi-language IVR audio management system with comprehensive file management. Features category grouping, hierarchical organization, real-time audio streaming with performance optimization achieving 30-40% faster retrieval through Redux caching. Supports efficient FormData handling and seamless NMS integration with dark/light mode."
          src={mediaCenter}
        />
        <ProjectsCard
          title="E-Commerce Performance Platform"
          des="High-performance e-commerce solution with integrated payment gateway (Razorpay). Features dynamic product filtering, seamless checkout flow, and optimized inventory management. Implemented advanced caching strategies and lazy loading for high-resolution assets, ensuring a fast and responsive shopping experience."
          src={razorpay}
        />
        {/* <ProjectsCard
          title="JARVIS - AI Desktop Assistant"
          des="Advanced AI-powered desktop assistant built with Python and React. Integrates speech recognition, NLP, and machine learning to automate system tasks, manage schedules, and provide real-time information. Features a sleek, futuristic UI with smooth animations and low-latency response times."
          src={jarvis}
        /> */}
        <ProjectsCard
          title="Real-Time Chat Application"
          des="Built a real-time chat application with React and Firebase featuring Google authentication, real-time message storage with Firestore, and dynamic UI updates. Implemented with Chakra UI for a modern, sleek interface. Features instant messaging, user presence indicators, and logout functionality."
          src={chat}
        />
      </div>
    </section>
  );
}

export default Projects