"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaUsers, FaChartLine, FaTrophy, FaLaptopCode, FaRobot, FaTimes } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gdgEvent from "/gdg-event.jpg?url";
import hackathon from "/hackathon.jpg?url";
import certificate from "/solution-challenge-certificate.jpg?url";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CampusImpact = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const cardsRef = useRef([]);
  const photoRefs = useRef([]);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    // Initialize animations
    const ctx = gsap.context(() => {
      // Section entrance
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out"
      });

      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "back.out(1.2)"
      });

      // Cards animation
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power2.out"
        });
      });

      // Photo animations
      photoRefs.current.forEach((photo, i) => {
        gsap.from(photo, {
          scrollTrigger: {
            trigger: photo,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          x: i % 2 === 0 ? -30 : 30,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power2.out"
        });
      });

      // Floating elements
      gsap.to(".floating-shape", {
        y: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Particle animation
      gsap.to(".floating-particle", {
        y: -20,
        x: "random(-20,20)",
        duration: "random(8,12)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#000] to-[#000] py-24 px-6"
    >
      {/* Certificate Dialog */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="relative bg-[#0a0a2a] rounded-xl max-w-2xl w-full border border-[#ffffff20] shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-[#ffffff10]">
              <h3 className="text-xl font-semibold text-white">Google Solution Challenge Certificate</h3>
              <button 
                onClick={() => setShowCertificate(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <img 
                src={certificate} 
                alt="Google Solution Challenge Certificate" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="p-4 border-t border-[#ffffff10] flex justify-end">
              <button
                onClick={() => setShowCertificate(false)}
                className="px-6 py-2 rounded-full bg-[#0569f5] text-white hover:bg-[#4FABFF] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="floating-shape absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-[#0569f5] opacity-10 blur-xl" />
        <div className="floating-shape absolute bottom-[25%] right-[15%] w-40 h-40 bg-[#e963a2] opacity-10 blur-xl rotate-45" />
        <div className="floating-shape absolute top-[40%] right-[10%] w-24 h-24 border-2 border-[#4FABFF] opacity-20 rounded-lg" />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute rounded-full bg-white opacity-[0.03]"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Header with Gemini theme */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#0569f5] bg-opacity-20 text-[#4FABFF] font-medium mb-6">
            <FaRobot className="mr-3" />
            <span>Community Leadership</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#4FABFF] via-[#a368ff] to-[#e963a2] mb-6">
            Campus Impact
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#0569f5] to-[#e963a2] mx-auto rounded-full" />
          <p className="mt-6 text-xl text-neutral-300 max-w-3xl mx-auto">
            Empowering student communities through technical workshops and events
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Photo 1 - GDG */}
          <div 
            ref={el => photoRefs.current[0] = el}
            className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border-2 border-[#ffffff15] group"
          >
            <img
              src={gdgEvent}
              alt="GDG Event"
              className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">GDG MGM Nanded</h3>
              <p className="text-neutral-300">Web Development Workshop</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <FaUsers className="text-3xl" />, number: "100+", label: "Students Engaged", color: "from-[#0569f5] to-[#4FABFF]" },
              { icon: <FaChartLine className="text-3xl" />, number: "2", label: "Workshops", color: "from-[#a368ff] to-[#e963a2]" },
              { icon: <FaLaptopCode className="text-3xl" />, number: "5+", label: "Projects", color: "from-[#4FABFF] to-[#0569f5]" },
              { icon: <FaTrophy className="text-3xl" />, number: "5", label: "Team Members", color: "from-[#e963a2] to-[#a368ff]" }
            ].map((stat, i) => (
              <div 
                key={i}
                ref={el => cardsRef.current[i] = el}
                className={`bg-gradient-to-br ${stat.color} p-0.5 rounded-2xl hover:shadow-lg transition-all duration-300`}
              >
                <div className="bg-[#0a0a2a] h-full p-6 rounded-[15px] flex flex-col items-center justify-center text-center">
                  <div className={`text-white mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <p className="text-neutral-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo 2 - Hackathon */}
          <div 
            ref={el => photoRefs.current[1] = el}
            className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border-2 border-[#ffffff15] group"
          >
            <img
              src={hackathon}
              alt="Hackathon"
              className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">HackSpectra Hackathon</h3>
              <p className="text-neutral-300">Website Development</p>
            </div>
          </div>
        </div>

        {/* Leadership Details */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* GDG Role */}
          <div 
            ref={el => cardsRef.current[4] = el}
            className="bg-[#0a0a2a] bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl border border-[#ffffff10] hover:border-[#0569f5] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#0569f5] opacity-10 rounded-full blur-xl" />
            <div className="flex items-center mb-6">
              <div className="bg-[#0569f5] bg-opacity-20 p-3 rounded-full mr-4">
                <SiGooglecloud className="text-2xl text-[#4FABFF]" />
              </div>
              <h3 className="text-xl font-semibold text-white">GDG Web Development Co-Head @ MGM Nanded</h3>
            </div>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <span className="text-[#4FABFF] mr-2">•</span>
                Conducted 2 hands-on web development workshops for 100+ students
              </li>
              <li className="flex items-start">
                <span className="text-[#4FABFF] mr-2">•</span>
                Guided participants in building their first web projects using modern technologies
              </li>
              <li className="flex items-start">
                <span className="text-[#4FABFF] mr-2">•</span>
                Collaborated with core team to organize technical events and study jams
              </li>
            </ul>
          </div>

          {/* Hackathon Role */}
          <div 
            ref={el => cardsRef.current[5] = el}
            className="bg-[#0a0a2a] bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl border border-[#ffffff10] hover:border-[#e963a2] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#e963a2] opacity-10 rounded-full blur-xl" />
            <div className="flex items-center mb-6">
              <div className="bg-[#e963a2] bg-opacity-20 p-3 rounded-full mr-4">
                <FaLaptopCode className="text-2xl text-[#e963a2]" />
              </div>
              <h3 className="text-xl font-semibold text-white">HackSpectra Hackathon Volunteer</h3>
            </div>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <span className="text-[#e963a2] mr-2">•</span>
                Designed and developed the official hackathon website
              </li>
              <li className="flex items-start">
                <span className="text-[#e963a2] mr-2">•</span>
                Assisted in participant registration and event coordination
              </li>
              <li className="flex items-start">
                <span className="text-[#e963a2] mr-2">•</span>
                Contributed to making the event accessible to 200+ participants
              </li>
            </ul>
          </div>
        </div>

        {/* Google Solution Challenge */}
        <div 
          ref={el => cardsRef.current[6] = el}
          className="mt-16 bg-gradient-to-r from-[#0569f5] to-[#a368ff] p-1 rounded-2xl max-w-2xl mx-auto"
        >
          <div className="bg-[#0a0a2a] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Google Solution Challenge 2025 Participant</h3>
            <p className="text-neutral-300 mb-6 text-lg">
              {/* Contributed to solving one of UN's 17 Sustainable Development Goals using Google technologies */}
            </p>
            <button 
              onClick={() => setShowCertificate(true)}
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#0569f5] bg-opacity-30 text-lg font-medium text-white hover:bg-opacity-50 transition-all cursor-pointer"
            >
              <SiGooglecloud className="mr-3" />
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusImpact;