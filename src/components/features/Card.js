import React from 'react'
import { motion } from 'framer-motion';

const Card = ({ item: { title, des, icon } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative w-full p-8 rounded-2xl bg-gradient-card backdrop-blur-xl border border-designColor/20 hover:border-designColor/50 shadow-shadowOne hover:shadow-shadowTwo transition-all duration-500 overflow-hidden"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-designColor/5 to-accentColor/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-6 text-6xl text-designColor group-hover:text-accentColor transition-colors duration-300"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-titleFont font-bold text-white mb-4 group-hover:text-designColor transition-colors duration-300">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-lightText/80 group-hover:text-lightText/90 leading-relaxed transition-colors duration-300">
          {des}
        </p>

        {/* Bottom Accent Line */}
        <motion.div
          className="mt-6 h-1 bg-gradient-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '40%' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-designColor/10 to-accentColor/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default Card