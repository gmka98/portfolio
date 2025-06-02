"use client";
import { GoArrowUpRight } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function ServiceSlide() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Triggers once when in view
    const services = [
        { name: "Website & Application " },
        { name: "Mobile & Mini-Games" },
        { name: "Data Analysis & Data Science" },
        { name: "SEO, Digital Marketing, and Branding" },
        { name: "UI/UX Design and Prototyping" },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-20 dark:text-white dark:bg-black mb-10 text-black"
        >
            <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-3xlfont-semibold mb-4"
        >
            <div  className="flex justify-center gap-x-10 items-center">
                <div className="bg-gray-300 border px-20 py-8 rounded-full"
                style={{
                    backgroundImage: "url('/images/services/pexels-projects.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>

                </div>
            {isInView && ( // Only renders when in view
                <TypeAnimation 
                    sequence={['My Quality Services', 1000]}
                    className="dark:text-white font-semibold text-3xl "
                    speed={10}
                    wrapper="span"
                />
            )}
            </div>

        </motion.h2>
        <div className="flex items-center justify-center gap-x-10 mb-4 ">
            <p className="text-center">
                Ready to elevate your project? Let&apos;s make it happen today!
            </p>
            <div className="border px-20 py-6 rounded-full bg-gray-700  text-white"
            style={{
                    backgroundImage: "url('/images/services/pexels-code.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                    What We Do 
            </div>
            </div>    
            <div className="flex sm:flex-col justify-between items-center gap-10">
                {/* Services List with Animation */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-2/3 sm:w-full"
                >
                    <ul className="space-y-2">
                        {services.map((service, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-between hover:bg-primary dark:hover:bg-yellow-400 hover:text-white p-2 py-4 px- group font-medium sm:w-full"
                            >
                                <span>
                                    <span className="font-bold sm:text-center sm:w-full ">{index + 1}.</span>
                                    {service.name}
                                </span>
                                <GoArrowUpRight className="transition-transform transform group-hover:rotate-45 sm:group-hover:rotate-210 ml-2 sm:text-lg" />
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Image Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-2 dark:border-yellow-400 border-primary rounded-lg p-4 sm:p-1"
                >
                    <video src="/code.mp4" autoPlay loop muted />
                </motion.div>
            </div>
        </motion.section>
    );
}
