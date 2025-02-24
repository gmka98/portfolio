import React from "react";
import Layout from "./layout";
import Link from "next/link";
import { motion } from 'framer-motion';
const MotionLink = motion(Link);

const Footer = () => {
    
    const listItemAnimation = {
        hover: {
            backgroundColor: [
                "#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)",
                "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"
            ],
            transition: { duration: 1, repeat: Infinity },
        },
    };
    return (
        <footer className="bg-black text-white w-full  border-solid border-dark font-medium text-lg   sm:text-base ">
            <div className="ml-60 mb-4 sm:ml-20">
            <ul className="uppercase flex space-x-80 sm:space-x-16">
                {["dribbble", "linkedin", "behance"].map((item, index) => (
                    <li key={index} className="bg-gradient-to-r from-gray-900 via-white bg-clip-text text-transparent hover:text-white">
                        {item}
                    </li> 
                ))}
            </ul>

            </div>
            <div className="ml-20 sm:ml-10">
            <ul className="uppercase flex space-x-80 sm:space-x-10">
                {["instagram", "figma", "community"].map((item, index) => (
                    <li key={index} className="bg-gradient-to-r from-gray-900 via-white bg-clip-text text-transparent hover:text-white ">
                        {item}
                    </li> 
                ))}
            </ul>

                    
            </div>
            <p className="bg-gradient-to-r from-gray-900 via-white bg-clip-text text-transparent text-center text-9xl uppercase font-bold mt-4  sm:text-7xl">Let&apos;s Talk</p>
            <div className="mx-20 mt-4 ">
            <ul className="uppercase flex justify-center space-x-4 text-2xl sm:text-sm sm:space-x-2">
                    {["Home", "About", "Services", "Projects", "Articles"].map((item, index) => (
                        <motion.li
                            key={index}
                            variants={listItemAnimation}
                            whileHover="hover"
                            className="p-1 px-4 rounded-full cursor-pointer border sm:px-2"
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div>
            </div>
            <div className="py-8 flex items-center justify-between lg:flex-col lg:py-6 border-t-2 mt-10 px-20">
                <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                Build with <span className="text-primary  text-2xl px-1">&#9825;</span>
                by Gael Mukendi Kabongo&nbsp;
                </div>
            </div>
        </footer>
    )
}

export default Footer