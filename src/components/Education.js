import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li suppressHydrationWarning className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <div ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center">
        <LiIcon reference={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {place}
          </span>
          <p className="font-medium w-full md:text-sm">{info}</p>
        </motion.div>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
    type="Software Development Basics Training"
    time="2023 - Present"
    place="edX - IBM"
    info="Learning software programming, databases, and more through IBM Skills Network's online course."
/>

<Details
    type="AWS Cloud Practitioner Training"
    time="2023 - Present"
    place="Online"
    info="Currently pursuing AWS Cloud Practitioner certification through online training, gaining foundational knowledge in cloud computing and AWS services."
/>

<Details
    type="Google Analytics 4 Training"
    time="2023 - July 13"
    place="Online"
    info="Successfully completed training in Google Analytics 4, focusing on advanced analytics techniques, data tracking, and digital marketing insights."
/>

<Details
    type="Digital Marketing Course"
    time="2023"
    place="Online - Google"
    info="Successfully completed an online course through Google's Atelier Numérique, acquiring fundamental knowledge in marketing principles and strategies."
/>

          <Details
            type="Scientific Computing with Python"
            time="2023"
            place="FreeCodeCamp"
            info="In the Scientific Computing with Python Certification, you'll learn Python fundamentals like variables, loops, conditionals, and functions. Then you'll quickly ramp up to complex data structures, networking, relational databases, and data visualization."
          />
          <Details
    type="Coding Fundamentals"
    time="2020-2022"
    place="SoloLearn"
    info="Self-taught coding, code creation, algorithm development"
/>

          <Details
            type="Economic Sciences"
            time="2010-2016"
            place="IMMI, Belgium"
            info="emphasizes both scientific and economic subjects, providing students with a well-rounded understanding of these fields(Drop school)"
          />
        

          
        </ul>
      </div>
    </div>
  );
};

export default Education;
