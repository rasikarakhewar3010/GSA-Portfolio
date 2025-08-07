"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaVideo } from "react-icons/fa";
import { FaRobot, FaPeopleGroup } from "react-icons/fa6";

const AboutMe = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight';
    document.body.appendChild(spotlight);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }
      spotlight.style.left = `${clientX}px`;
      spotlight.style.top = `${clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      spotlight.remove();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.2; }
          100% { opacity: 0.1; }
        }
        html {
          cursor: none;
        }
        .custom-cursor {
          position: fixed;
          width: 24px;
          height: 24px;
          border: 2px solid #0569f5;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transform: translate(-50%, -50%);
          transition: 
            transform 0.1s ease, 
            width 0.3s ease, 
            height 0.3s ease,
            border-color 0.3s ease;
        }
        .custom-cursor.active {
          width: 48px;
          height: 48px;
          background: rgba(5, 105, 245, 0.1);
          border-color: #4FABFF;
        }
        .spotlight {
          position: fixed;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(5, 105, 245, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 0;
          transition: background 0.3s ease;
        }
      `}</style>

      <div className="custom-cursor" id="custom-cursor" />

      <motion.section 
        className="relative min-h-screen w-full flex items-center justify-center px-4 py-15 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#0569f5] opacity-10 blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#e963a2] opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#0569f5] via-[#a368ff] to-[#e963a2] opacity-5 animate-gradient-rotate" />
        </div>

        <motion.div 
          className="relative w-full max-w-5xl mx-auto bg-gradient-to-br from-black to-[#0a0a2a] bg-opacity-90 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#ffffff10] overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#0569f5] opacity-20"
              style={{
                width: Math.random() * 10 + 2 + 'px',
                height: Math.random() * 10 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 40],
                x: [0, (Math.random() - 0.5) * 40],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <motion.h2 
              className="text-5xl sm:text-6xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0569f5] to-[#4FABFF] mb-4"
              variants={textVariants}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-[#0569f5] to-[#e963a2] mx-auto rounded-full"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            />
          </motion.div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.p 
                className="text-lg sm:text-xl text-neutral-300 leading-relaxed flex items-start"
                variants={textVariants}
              >
                <FaRobot className="text-[#0569f5] text-2xl mr-4 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Rasika Rakhewar</strong> — As the Web Development Co-Head at GDG On-Campus MGM, I’ve led two impactful workshops focused on empowering students with hands-on experience in web technologies, Firebase, and Google tools like Gemini and Google Cloud.
                </span>
              </motion.p>

              <motion.p 
                className="text-lg sm:text-xl text-neutral-300 leading-relaxed flex items-start"
                variants={textVariants}
                transition={{ delay: 0.1 }}
              >
                <FaPeopleGroup className="text-[#4FABFF] text-2xl mr-4 mt-1 flex-shrink-0" />
                <span>
                  I designed and developed the official website for <strong className="text-white">HackSpectra Hackathon</strong> at MGM College, demonstrating my commitment to creating impactful technical solutions for community events.
                </span>
              </motion.p>
            </motion.div>

            <motion.div 
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0569f5] to-[#e963a2] opacity-20 blur-xl -z-10" />
              <div className="bg-[#0a0a1a] rounded-2xl p-6 border border-[#ffffff10]">
                <h3 className="text-xl font-semibold text-[#4FABFF] mb-4">Technical Expertise</h3>
                <ul className="space-y-3">
                  {[
                    "Web Development & UI/UX Design",
                    "Google Technologies Integration",
                    "Workshop Facilitation",
                    "Community Building",
                    "Hackathon Organization"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center text-neutral-300"
                      variants={textVariants}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0569f5] mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Buttons */}
          <motion.div 
            className="mt-16 flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="/resume.pdf"
              download="Rasika_Rakhewar_Resume.pdf"
              className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#0569f5] to-[#4FABFF] text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#4FABFF] to-[#e963a2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center">
                <FaDownload className="mr-3" />
                Download Resume
              </span>
            </motion.a>

            {/* <motion.a
              href="https://your-video-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#a368ff] to-[#e963a2] text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0569f5] to-[#a368ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center">
                <FaVideo className="mr-3" />
                Watch Introduction
              </span>
            </motion.a> */}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default AboutMe;