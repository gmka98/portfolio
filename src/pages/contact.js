import React from "react";
import {fadeIn} from "../variants";
import { motion } from "framer-motion";

const Contact = () =>{
    return(
        <section className="py-16 lg:section" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-row  lg:flex-col">
                    {/*text*/}
                    <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex-1 flex justify-start items-center">
                     <div>
                        <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide dark:text-white ">Get in Touch</h4>
                        <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 dark:text-primaryDark text-primary  ">
                            Let's work <br/> together!
                        </h2>
                        </div>
                    </motion.div>
                       
                    {/*form*/}
                <motion.form
                 variants={fadeIn('left', 0.3)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.3 }}
                className="flex-1 border rounded-2xl flex flex-col gap-y-6
                pb-24 p-6 items-start">
                    <input className="bg-transparent border-b py-3 outline-none w-full 
                    placeholder:text-primary   focus:border-accent transition-all dark:placeholder:text-primaryDark" 
                    type="text" 
                    placeholder="Your name"
                    />
                     <input className="bg-transparent border-b py-3 outline-none w-full 
                    placeholder:text-primary  focus:border-accent transition-all dark:placeholder:text-primaryDark" 
                    type="text" 
                    placeholder="Your email"
                    />
                    <textarea className="bg-transparent border-b py-12 outline-none w-full
                  placeholder:text-primary  focus:border-accent transition-all dark:placeholder:text-primaryDark 
                    resize-none mb-12" 
                    placeholder='Your message' >

                    </textarea>
                    <motion.button
                    whileHover={{
                        backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                        transition: { duration: 1, repeat: Infinity }
                      }} className="btn btn-lg border-solid border-2 rounded-full p-5 text-white dark:text-white ">Send message</motion.button>
                </motion.form>

                </div>
            </div>
        </section>
    ) 
}

export default Contact;