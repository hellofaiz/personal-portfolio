import { motion } from 'framer-motion';

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bodyColor"
    >
      <div className="relative">
        {/* Code Editor Window */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="bg-gradient-card backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-shadowTwo border border-designColor/30 w-[85vw] max-w-[340px] sm:max-w-[450px] md:max-w-[500px] h-auto flex flex-col items-center justify-center text-center"
        >
          {/* Window Controls */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Loading Text */}
          <div className="font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-designColor text-lg mb-2"
            >
              $ loading portfolio...
            </motion.div>

            {/* Name with Gradient */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold mb-6"
            >
              <span className="gradient-text animate-gradient bg-gradient-to-r from-gradientStart via-accentColor to-gradientEnd">
                Faiz Khan
              </span>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-4 h-2 bg-cardBg rounded-full overflow-hidden relative w-full max-w-[280px] mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-primary shadow-glowPurple"
              />
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </div>

            {/* Loading Messages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 space-y-3"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="text-green-400 flex items-center gap-2"
              >
                <span className="text-lg">✓</span>
                <span>Initializing components</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="text-designColor flex items-center gap-2"
              >
                <span className="text-lg">⚡</span>
                <span>Loading 3+ years experience</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="text-accentColor flex items-center gap-2"
              >
                <span className="text-lg">🚀</span>
                <span>Preparing awesome portfolio</span>
              </motion.div>
            </motion.div>

            {/* Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="mt-4 text-right text-lightText/60 text-xs"
            >
              Almost there...
            </motion.div>
          </div>
        </motion.div>

        {/* Glowing Effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-8 bg-gradient-to-r from-designColor via-accentColor to-designColor opacity-30 blur-3xl rounded-full -z-10"
        />

        {/* Particle Effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-designColor/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Splash; 