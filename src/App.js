import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Splash from "./components/splash/Splash";
// import CodeTerminal from "./components/codeTerminal/CodeTerminal";
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <AnimatePresence mode="wait">
        {loading ? (
          <Splash key="splash" />
        ) : (
          <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
              <Banner />
              <Features />
              <Projects />
              {/* <CodeTerminal /> */}
              <Resume />
              {/* <Testimonial /> */}
              <Contact />
              <Footer />
              <FooterBottom />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

