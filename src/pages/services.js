import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import AnimatedText from "@/components/AnimatedText";
import ServicesSlider from "@/components/ServicesSlider";
import Link from "next/link";


const services = [ 
    {
        name: 'UI/UX Design',
        description:'Design the projects and his structure',
        link: 'learn more',
    
        
    },
    {
        name: 'Developement',
        description:'Web application development and website creation for a seamless digital presence',
        link: 'learn more',
    
        
    },
    {
        name: 'Digital Marketing',
        description:'I enhance online presence through SEO, craft engaging content for social media, execute targeted PPC campaigns, and analyze data for measurable results.',
        link: 'learn more',
    
        
    },
    {
        name: 'Product Branding',
        description:'rategic brand identity and consistent visual storytelling',
        link: 'learn more',
    
        
    },
];



const Services = () =>{
    return(
        <section className="section" id="services">
            <AnimatedText
            text="TURNING YOUR VISIONS INTO REALITY"
            className="mb-9 mt-9"/>
            <div className="container mx-auto">
                <div className="flex flex-row lg:flex-col">
                    {/*text & image */}
                    <motion.div
                    variants={fadeIn('right', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                     className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mb-12 lg:mb-0">
                        <h2 className="h2 text-accent mb-6 text-primary dark:text-primaryDark lg:text-center">What I Do.</h2>
                        <h3 className="h3 max-w-[455px] mb-16 text-black dark:text-white lg:text-center">
                            I&apos;m a Freelance Full-Stack Developer 
                        </h3>
                        <Link href="/projects">
                        <motion.button
                        className="btn btn-lg border-solid border-2 rounded-full p-5 text-white mb-9 items-center"
                        whileHover={{
                        backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                        transition: { duration: 1, repeat: Infinity }}} >See my work</motion.button>
                        </Link>
                    </motion.div>
                   
                    {/*services*/}
                    <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }} 
                    className="flex-1">
                      {/* service list */}
                      <div>
                        {services.map((service, index)=>{
                            const { name, description, link} = service
                            return (
                            <div className="border-b border-white/20 h-[146px] mb-[38px]" key={index}>
                                <div className="max-x-[476px]">
                                    <h4 className="text-[20px] tracking-wider font-primary text-primary dark:text-primaryDark
                                    font-semibold mb-6">
                                        {name}
                                    </h4>
                                    <p className="font-secondary leading-tight dark:text-white">
                                        {description}
                                    </p>
                                </div>
                                <div className="flex flex-col flex-1 items-end">
                                    <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                                        {/*<BsArrowUpRight/>*/}
                                    </a>
                                    <a href="#" className="text-gradient text-sm dark:text-white">
                                        {link}
                                    </a>
                                </div>
                            </div>       
                            )

                        })}
                      </div>
                    </motion.div>
                </div>
           </div>
            
        </section>
    )

}

export default Services
