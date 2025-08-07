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
    type="Associate Data Science Python - DataCamp"
    place="Remote"
    info="Gained hands-on experience with data manipulation, visualization, and machine learning using Python. Covered tools like Pandas, NumPy, Scikit-learn, and Matplotlib.."
  />
  <Details
    type="PowerBI – Microsoft"
    place="edX (Online)"
    info="Learned to create dynamic, interactive dashboards and data-driven reports.
Applied DAX and Power Query for advanced analytics and data modeling."
  />
  <Details
    type="Software Development Basics – IBM Skills Network"
    place="edX (Online)"
    info="Learning software development fundamentals including programming logic, database basics, and project workflows through IBM's official training on edX."
  />

  <Details
    type="AWS Certified Cloud Practitioner – Training"
    place="Online"
    info="Ongoing preparation for AWS Cloud Practitioner certification. Covers foundational knowledge in cloud architecture, AWS core services, pricing, and security."
  />

  <Details
    type="Google Analytics 4 – Certification"
    place="Google Digital Garage (Online)"
    info="Completed Google Analytics 4 course with emphasis on event tracking, report building, audience analysis, and digital marketing data interpretation."
  />

  <Details
    type="Digital Marketing Fundamentals"
    place="Atelier Numérique – Google (Online)"
    info="Completed Google’s Digital Marketing course, covering SEO, SEM, email marketing, analytics, and digital strategy foundations."
  />

  <Details
    type="Scientific Computing with Python – Certification"
    place="freeCodeCamp (Online)"
    info="Mastered Python fundamentals, object-oriented programming, data structures, APIs, SQL, and data visualization tools within scientific computing context."
  />

  <Details
    type="Coding Fundamentals – Self-Taught"
    place="SoloLearn (Online)"
    info="Learned programming concepts, algorithms, and web development foundations through independent study and interactive coding platforms."
  />

  <Details
    type="Secondary Education – Economic Sciences"
    place="IMMI, Belgium"
    info="Studied a combination of scientific and economic subjects. Gained strong analytical thinking before transitioning into IT and self-study."
  />



          
        </ul>
      </div>
    </div>
  );
};

export default Education;
