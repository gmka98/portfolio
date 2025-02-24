import React from "react";
import {motion} from "framer-motion";

const Skill =  ({name, x, y}) => {
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold  text-black p-8 shadow-dark cursor-pointer absolute dark:text-white  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                whileHover={{scale:1.05}}
                initial={{x:0,y:0}}
                whileInView={{ x:x, y:y, transition:{duration: 1.5}}}
                viewport={{once: true}}>
                
                    {name}
                </motion.div>
    )

}

const Skillls = () => {
    return(
        <>
            <h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl md:mt-32 dark:text-white">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">

                <motion.div className="flex items-center justify-center rounded-full font-semibold  text-black p-8 shadow-dark cursor-pointer dark:text-white  lg:p-6 md:p-4 xs:text-xs xs:p-2"
                whileHover={{scale:1.05}}
               >
                    Web
                </motion.div>

                <Skill name="HTML" x="-15vw" y="0vw" />
                <Skill name="CSS" x="0vw" y="-10vw" />
                <Skill name="JavaScript" x="15vw" y="0vw" />
                <Skill name="Python" x="0vw" y="10vw" />
                <Skill name="Aws" x="-20vw" y="10vw" />
                <Skill name="Netlify" x="-20vw" y="-10vw" />
                <Skill name="Vue" x="20vw" y="10vw" />
                <Skill name="Web Design" x="20vw" y="-10vw" />
                <Skill name="React" x="-15vw" y="25vw" />
                <Skill name="Postgresql" x="15vw" y="-25vw" />
                <Skill name="MongoDB" x="15vw" y="25vw" />
                <Skill name="Figma" x="-20vw" y="-25vw" />
                <Skill name="Strapi" x="-35vw" y="0vw" />
                <Skill name="Express" x="0vw" y="-20vw" />
                <Skill name="NodeJS" x="35vw" y="0vw" />
                <Skill name="FastApi" x="0vw" y="20vw" />
                
                


            </div>
        </>
    );
};

export default Skillls