import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffects'
import Head from 'next/head';

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";



const variants = {
  initial: { y: 500, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
    <Head>
      <title>GMK | Contact Page</title>
      <meta name="Contact" content="Contact US" />
    </Head>
<TransitionEffect/>
    <section className="dark:text-white mb-10 text-black" id="contact">
      <div className="mx-20">
        <motion.div ref={ref} variants={variants} initial="initial" animate="animate" className="grid grid-cols-2 lg:grid-cols-1 justify-between">
          <motion.div>
            <motion.h1 variants={variants} className="text-xl uppercase text-accent font-medium mb-2 tracking-wide dark:text-white">
              Get in Touch
            </motion.h1>
            <motion.h2 variants={variants} className="text-[45px] lg:text-[90px] leading-none mb-12 dark:text-primaryDark text-primary">
              Let&apos;s work <br /> together!
            </motion.h2>
            <div className="space-y-6">
              <motion.div variants={variants}>
                <p className="font-semibold">Mail</p>
                <p className="text-xl">gmka98@gmail.com</p>
              </motion.div>
              <motion.div variants={variants}>
                <p className="font-semibold">Phone</p>
                <p className="text-xl">+32 451 08 44 33</p>
              </motion.div>
              <motion.div variants={variants}>
                <p className="font-semibold">Social Networks</p>
                <ul className="flex gap-x-5 mt-4">
                  <li> <IoLogoWhatsapp  className="w-9 h-9 text-green-600" /> </li>
                  <li> <FaInstagramSquare className="w-9 h-9 text-primary" />  </li>
                  <li> <FaFacebook className="w-9 h-9 text-blue-600" /></li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <div>
            {/* ✅ SVG corrigé */}
            <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }} className="mx-auto absolute">
              <motion.svg
                width="450px"
                height="450px"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 3 }}
                />
                <motion.path
                  d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 3 }}
                />
              </motion.svg>
            </motion.div>

            <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }} className="max-w-sm mx-auto">
              <div className="mb-5">
                <label>Name</label>
                <input
                  type="name"
                  id="name"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-5">
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Contact;
