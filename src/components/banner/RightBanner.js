import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { SiGit, SiNpm, SiVercel } from 'react-icons/si';
import { getTotalMonths } from '../../utils/experience';

const RightBanner = () => {
  const [logs, setLogs] = useState([]);
  const totalMonths = getTotalMonths('2022-11-01');

  const terminalCommands = [
    {
      icon: <SiGit />,
      type: 'git',
      color: '#F05032',
      messages: [
        'git commit -m "feat: add payment gateway integration"',
        'git commit -m "fix: resolve authentication bug"',
        'git commit -m "refactor: optimize database queries"',
        'git push origin main',
        'git commit -m "feat: implement real-time chat"',
        'git commit -m "style: update UI components"',
        'git commit -m "perf: reduce bundle size by 30%"',
      ]
    },
    {
      icon: <SiNpm />,
      type: 'npm',
      color: '#CB3837',
      messages: [
        'npm install react-query',
        'npm install framer-motion',
        'npm install @tanstack/react-table',
        'npm install axios',
        'npm install zustand',
        'npm install socket.io-client',
      ]
    },
    {
      icon: <SiVercel />,
      type: 'deploy',
      color: '#000000',
      messages: [
        '✓ Building production bundle...',
        '✓ Optimizing assets...',
        '✓ Deploying to Vercel...',
        '✓ Deployment successful!',
        '✓ Running tests... All passed!',
        '✓ Live at: https://faiz-portfolio.vercel.app',
      ]
    },
  ];

  useEffect(() => {
    const addLog = () => {
      const randomCommand = terminalCommands[Math.floor(Math.random() * terminalCommands.length)];
      const randomMessage = randomCommand.messages[Math.floor(Math.random() * randomCommand.messages.length)];

      const newLog = {
        id: Date.now(),
        icon: randomCommand.icon,
        color: randomCommand.color,
        type: randomCommand.type,
        message: randomMessage,
        timestamp: new Date().toLocaleTimeString(),
      };

      setLogs(prev => [...prev, newLog].slice(-15)); // Keep last 15 logs
    };

    // Add initial logs
    const initialTimer = setTimeout(() => {
      addLog();
      setTimeout(() => addLog(), 800);
      setTimeout(() => addLog(), 1600);
    }, 500);

    // Continue adding logs
    const interval = setInterval(addLog, 4000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stats = [
    { label: 'Experience', value: `${totalMonths}+ months`, color: 'text-blue-400' },
    { label: 'Commits', value: '2,847+', color: 'text-green-400' },
    { label: 'Projects', value: '15+', color: 'text-purple-400' },
    { label: 'Deploys', value: '127+', color: 'text-orange-400' },
  ];

  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative min-h-[400px] md:min-h-[500px] lgl:min-h-[600px]">
      <div className="w-full max-w-2xl px-2 sm:px-4">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="bg-gradient-card backdrop-blur-xl rounded-lg sm:rounded-2xl border border-designColor/30 shadow-shadowTwo overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-cardBg/90 border-b border-designColor/20 px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <FaTerminal className="text-designColor text-sm" />
                <span className="text-lightText text-xs sm:text-sm font-mono">faiz@developer:~$</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <FaSpinner className="text-designColor text-xs sm:text-sm" />
              </motion.div>
              <span className="text-[10px] sm:text-xs text-lightText/60 font-mono uppercase">Active</span>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bg-cardBg/50 border-b border-designColor/10 px-2 sm:px-5 py-2 sm:py-3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-sm sm:text-base md:text-lg font-bold font-mono ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-lightText/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Terminal Logs */}
          <div className="bg-[#0a0e27]/95 p-3 sm:p-5 h-[250px] sm:h-[300px] md:h-[350px] overflow-y-auto scrollbar-hide font-mono text-xs sm:text-sm">
            <AnimatePresence mode="popLayout">
              {logs.map((log, index) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2 sm:mb-3 flex items-start gap-2 sm:gap-3 group"
                >
                  {/* Icon */}
                  <motion.div
                    className="mt-1 flex-shrink-0 text-xs sm:text-base"
                    style={{ color: log.color }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {log.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] sm:text-xs text-lightText/40">{log.timestamp}</span>
                      <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-designColor/20 text-designColor rounded-full uppercase">
                        {log.type}
                      </span>
                    </div>
                    <div className="text-lightText/90 break-all group-hover:text-designColor transition-colors text-xs sm:text-sm">
                      $ {log.message}
                    </div>
                    {log.message.includes('✓') && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1 mt-1 text-green-400 text-[10px] sm:text-xs"
                      >
                        <FaCheckCircle />
                        <span>Success</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Cursor */}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-designColor text-xs sm:text-sm">$</span>
              <span className="w-1.5 h-3 sm:w-2 sm:h-4 bg-designColor"></span>
            </motion.div>
          </div>

          {/* Terminal Footer */}
          <div className="bg-cardBg/90 border-t border-designColor/20 px-3 sm:px-5 py-2 flex items-center justify-between text-[10px] sm:text-xs">
            <div className="hidden sm:flex items-center gap-2 md:gap-4 text-lightText/60">
              <span>Lines: {logs.length}</span>
              <span>•</span>
              <span>UTF-8</span>
              <span>•</span>
              <span>Bash</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-lightText/60">Connected</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Achievement Badges */}
        {/* <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            { icon: '🚀', text: 'Fast Learner', color: 'from-blue-500 to-cyan-500' },
            { icon: '💡', text: 'Problem Solver', color: 'from-purple-500 to-pink-500' },
            { icon: '⚡', text: 'Quick Deploy', color: 'from-yellow-500 to-orange-500' },
            { icon: '🎯', text: 'Goal Oriented', color: 'from-green-500 to-emerald-500' },
          ].map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`px-4 py-2 bg-gradient-to-r ${badge.color} rounded-full text-white text-sm font-medium shadow-lg flex items-center gap-2 cursor-default`}
            >
              <span className="text-lg">{badge.icon}</span>
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default RightBanner;