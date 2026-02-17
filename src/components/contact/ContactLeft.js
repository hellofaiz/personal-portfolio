import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript } from "react-icons/si";

const ContactLeft = () => {
  const codeLines = [
    '// Building connections...',
    'const developer = {',
    '  name: "Faiz Khan",',
    '  role: "Full-Stack",',
    '  stack: "MERN",',
    '  experience: "3+ years",',
    '  location: "Noida, India",',
    '  available: true',
    '};',
    '',
    'function connect() {',
    '  return developer;',
    '}',
  ];

  const techStack = [
    { Icon: SiReact, color: '#61DAFB', name: 'React' },
    { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
    { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  ];

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-card backdrop-blur-xl border border-designColor/30 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-shadowTwo flex flex-col gap-4 sm:gap-6 justify-center relative overflow-hidden">

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-designColor/20 rounded-full"
            animate={{
              x: [Math.random() * 300, Math.random() * 300],
              y: [Math.random() * 600, Math.random() * 600],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Code Editor Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#0a0e27]/95 rounded-xl p-6 border border-designColor/20 shadow-shadowOne mb-4"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 border-b border-designColor/20 pb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-xs text-lightText/60 font-mono">developer.js</span>
        </div>

        {/* Code Lines with Typing Effect */}
        <div className="font-mono text-sm space-y-1">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className={`${line.includes('//')
                ? 'text-gray-500 italic'
                : line.includes('const') || line.includes('function') || line.includes('return')
                  ? 'text-purple-400'
                  : line.includes('"')
                    ? 'text-green-400'
                    : line.includes('true')
                      ? 'text-orange-400'
                      : 'text-lightText/80'
                }`}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Blinking Cursor */}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-designColor ml-1"
        />
      </motion.div>

      {/* Contact Info */}
      <div className="relative z-10 flex flex-col gap-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold gradient-text"
        >
          Faiz Khan
        </motion.h3>
        <p className="text-lg font-normal text-designColor">
          Full-Stack MERN Developer
        </p>

        {/* Contact Details */}
        <div className="space-y-3 text-sm">
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 text-lightText/80 hover:text-designColor transition-colors"
          >
            <FaPhone className="text-designColor" />
            <span>+91 8935082012</span>
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 text-lightText/80 hover:text-designColor transition-colors"
          >
            <FaEnvelope className="text-designColor" />
            <span>kfaiz2215@gmail.com</span>
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 text-lightText/80 hover:text-designColor transition-colors"
          >
            <FaMapMarkerAlt className="text-designColor" />
            <span>Noida, India</span>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Icons */}
      <div className="relative z-10 flex flex-col gap-3">
        <h4 className="text-sm uppercase font-semibold text-lightText/70 tracking-wider">Tech Stack</h4>
        <div className="flex gap-3">
          {techStack.map(({ Icon, color, name }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="w-12 h-12 bg-cardBg/50 backdrop-blur-sm border border-designColor/20 rounded-lg flex items-center justify-center hover:border-designColor/50 transition-all"
              title={name}
            >
              <Icon size={24} style={{ color }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="relative z-10 flex flex-col gap-3">
        <h4 className="text-sm uppercase font-semibold text-lightText/70 tracking-wider">Connect With Me</h4>
        <div className="flex gap-3">
          {[
            { Icon: FaGithub, href: "https://github.com/hellofaiz", label: "GitHub" },
            { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/hello-faiz", label: "LinkedIn" },
            { Icon: FaTwitter, href: "https://twitter.com/hello_faiz", label: "Twitter" },
            { Icon: FaInstagram, href: "https://www.instagram.com/this_is_mr.khan_", label: "Instagram" },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-12 h-12 bg-gradient-to-br from-designColor/20 to-accentColor/20 backdrop-blur-sm border border-designColor/30 rounded-lg flex items-center justify-center hover:border-designColor hover:shadow-glowPurple transition-all text-lightText hover:text-white"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-designColor/20 to-accentColor/20 rounded-full blur-3xl opacity-50" />
    </div>
  );
}

export default ContactLeft;