"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from 'emailjs-com';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
    const sectionRef = useRef();
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            'service_hskedrp', // Replace with your EmailJS service ID
            'eSYca6I7q69UVHv9N', // Replace with your EmailJS template ID
            formRef.current,
            'eSYca6I7q69UVHv9N' // Replace with your EmailJS public key
        )
            .then((result) => {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.error('Failed to send email:', error);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

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

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#000] to-[#0a0a2a] py-18 px-6"
        >
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
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#0569f5] bg-opacity-20 text-[#4FABFF] font-medium mb-6"
            variants={itemVariants}
          >
            <FaEnvelope className="mr-3" />
            <span>Get In Touch</span>
          </motion.div> */}
                    <motion.h2
                        className="text-4xl sm:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#4FABFF] via-[#a368ff] to-[#e963a2] mb-6"
                        variants={itemVariants}
                    >
                        Contact Me
                    </motion.h2>
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-[#0569f5] to-[#e963a2] mx-auto rounded-full"
                        variants={itemVariants}
                    />
                    <motion.p
                        className="mt-6 text-xl text-neutral-300 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </motion.p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="flex items-start"
                            variants={itemVariants}
                        >
                            <div className="bg-[#0569f5] bg-opacity-20 p-4 rounded-full mr-6">
                                <FaEnvelope className="text-2xl text-[#4FABFF]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                                <a href="mailto:your.email@example.com" className="text-neutral-300 hover:text-[#4FABFF] transition-colors">
                                    rasikarakhewar30102004@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        {/* <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-[#a368ff] bg-opacity-20 p-4 rounded-full mr-6">
                <FaPhone className="text-2xl text-[#a368ff]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-neutral-300 hover:text-[#a368ff] transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div> */}

                        <motion.div
                            className="flex items-start"
                            variants={itemVariants}
                        >
                            <div className="bg-[#e963a2] bg-opacity-20 p-4 rounded-full mr-6">
                                <FaMapMarkerAlt className="text-2xl text-[#e963a2]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                                <p className="text-neutral-300">Nanded, Maharashtra, India</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="pt-8"
                            variants={itemVariants}
                        >
                            <h3 className="text-xl font-semibold text-white mb-6">Connect with me</h3>
                            <div className="flex space-x-6">
                                <a
                                    href="https://www.linkedin.com/in/rasika-rakhewar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#0569f5] bg-opacity-20 p-4 rounded-full text-[#4FABFF] hover:bg-opacity-30 transition-all"
                                >
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a
                                    href="https://github.com/rasikarakhewar3010"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#a368ff] bg-opacity-20 p-4 rounded-full text-white hover:bg-opacity-30 transition-all"
                                >
                                    <FaGithub className="text-2xl" />
                                </a>

                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-[#0a0a2a] bg-opacity-80 backdrop-blur-lg rounded-2xl p-8 border border-[#ffffff10]"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <motion.div variants={itemVariants}>
                                <label htmlFor="name" className="block text-neutral-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0a0a1a] border border-[#ffffff10] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4FABFF] transition-all"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-neutral-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0a0a1a] border border-[#ffffff10] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4FABFF] transition-all"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-neutral-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-[#0a0a1a] border border-[#ffffff10] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4FABFF] transition-all"
                                ></textarea>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex items-center justify-center px-6 py-4 rounded-full bg-gradient-to-r from-[#0569f5] to-[#4FABFF] text-white font-medium hover:shadow-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <FaPaperPlane className="mr-3" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </motion.div>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-900 bg-opacity-30 text-green-400 rounded-lg border border-green-800"
                                >
                                    Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-900 bg-opacity-30 text-red-400 rounded-lg border border-red-800"
                                >
                                    Failed to send message. Please try again or contact me directly via email.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;