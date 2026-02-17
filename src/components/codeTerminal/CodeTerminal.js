import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaPlay } from 'react-icons/fa';

const CodeTerminal = () => {
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
    const [displayedCode, setDisplayedCode] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const codeSnippets = [
        {
            title: 'React Component',
            language: 'jsx',
            code: `// Modern React Component with Hooks
import React, { useState, useEffect } from 'react';

const UserDashboard = ({ userId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData(userId)
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <div className="dashboard">
      {loading ? <Spinner /> : <UserProfile data={data} />}
    </div>
  );
};`,
        },
        {
            title: 'Node.js API Endpoint',
            language: 'javascript',
            code: `// Express.js REST API with JWT Authentication
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token, user: { name: user.name, email } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});`,
        },
        {
            title: 'MongoDB Aggregation',
            language: 'javascript',
            code: `// MongoDB Aggregation Pipeline
const getProjectStats = async (userId) => {
  const stats = await Project.aggregate([
    { $match: { owner: userId, status: 'active' } },
    { 
      $group: {
        _id: '$category',
        count: { $sum: 1 },
        totalRevenue: { $sum: '$revenue' },
        avgCompletion: { $avg: '$completionRate' }
      }
    },
    { $sort: { totalRevenue: -1 } },
    { $limit: 10 }
  ]);
  
  return stats;
};`,
        },
        {
            title: 'Next.js API Route',
            language: 'typescript',
            code: `// Next.js 14 API Route with TypeScript
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  await connectDB();
  const result = await processPayment({
    amount: body.amount,
    currency: 'USD',
    customerId: body.customerId
  });
  
  return NextResponse.json({ 
    success: true, 
    transactionId: result.id 
  });
}`,
        },
    ];

    useEffect(() => {
        const snippet = codeSnippets[currentCodeIndex].code;
        let currentIndex = 0;
        setDisplayedCode('');
        setIsTyping(true);

        const typingInterval = setInterval(() => {
            if (currentIndex < snippet.length) {
                setDisplayedCode(snippet.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false);

                // Wait 3 seconds before moving to next snippet
                setTimeout(() => {
                    setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
                }, 3000);
            }
        }, 30); // Typing speed

        return () => clearInterval(typingInterval);
    }, [currentCodeIndex]);

    const currentSnippet = codeSnippets[currentCodeIndex];

    // Syntax highlighting function
    const highlightCode = (code) => {
        const keywords = ['const', 'let', 'var', 'function', 'async', 'await', 'return', 'if', 'else', 'import', 'export', 'from', 'require', 'try', 'catch', 'new', 'class'];
        const types = ['string', 'number', 'boolean', 'object', 'array', 'null', 'undefined'];

        let highlighted = code;

        // Keywords
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
            highlighted = highlighted.replace(regex, '<span class="text-purple-400 font-semibold">$1</span>');
        });

        // Strings
        highlighted = highlighted.replace(/(['"`])(.*?)\1/g, '<span class="text-green-400">$1$2$1</span>');

        // Numbers
        highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="text-orange-400">$1</span>');

        // Comments
        highlighted = highlighted.replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>');

        // Function calls
        highlighted = highlighted.replace(/\b(\w+)(?=\()/g, '<span class="text-yellow-400">$1</span>');

        return highlighted;
    };

    return (
        <section
            id="code-terminal"
            className="w-full py-20 border-b-[1px] border-b-designColor/20"
        >
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm text-designColor tracking-[4px] uppercase font-semibold mb-4">
                        LIVE CODE PREVIEW
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="gradient-text">Watch Me Code</span>
                    </h2>
                    <p className="text-lightText/70 mt-4 max-w-2xl mx-auto">
                        Real code snippets from my projects, featuring React, Node.js, MongoDB, and Next.js
                    </p>
                </motion.div>

                {/* Terminal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-gradient-card backdrop-blur-xl rounded-2xl border border-designColor/30 shadow-shadowTwo overflow-hidden">
                        {/* Terminal Header */}
                        <div className="bg-cardBg/80 border-b border-designColor/20 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex items-center gap-2 text-lightText">
                                    <FaTerminal className="text-designColor" />
                                    <span className="font-mono text-sm">{currentSnippet.title}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-lightText/60 font-mono uppercase">
                                    {currentSnippet.language}
                                </span>
                                {isTyping && (
                                    <div className="flex items-center gap-1">
                                        <FaPlay className="text-designColor text-xs animate-pulse" />
                                        <span className="text-xs text-designColor font-mono">Running...</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Code Display Area */}
                        <div className="bg-[#0a0e27]/95 p-6 min-h-[400px] max-h-[500px] overflow-auto scrollbar-hide">
                            <pre className="font-mono text-sm leading-relaxed">
                                <code
                                    className="text-lightText"
                                    dangerouslySetInnerHTML={{
                                        __html: highlightCode(displayedCode)
                                    }}
                                />
                                {isTyping && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                        className="inline-block w-2 h-5 bg-designColor ml-1"
                                    />
                                )}
                            </pre>
                        </div>

                        {/* Terminal Footer with Navigation */}
                        <div className="bg-cardBg/80 border-t border-designColor/20 px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    {codeSnippets.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentCodeIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentCodeIndex
                                                    ? 'bg-designColor w-8'
                                                    : 'bg-lightText/30 hover:bg-lightText/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <div className="text-xs text-lightText/60 font-mono">
                                    {currentCodeIndex + 1} / {codeSnippets.length}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {['React', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'TypeScript', 'JWT', 'REST API'].map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="px-4 py-2 bg-cardBg border border-designColor/20 rounded-full text-sm text-lightText/80 hover:border-designColor/50 hover:text-designColor transition-all duration-300"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodeTerminal;
