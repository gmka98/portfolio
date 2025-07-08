import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  
    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center"
      >
        <LiIcon reference={ref} />
  
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {position}&nbsp;
            <a
              href={companyLink}
              target="_blank"
              className="text-primary dark:text-primaryDark capitalize"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {address} {/* Fixed the typo here */}
          </span>
          <p className="font-medium w-full md:text-sm">{work}</p>
        </motion.div>
      </li>
    );
  };
  

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start "]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
<motion.div
style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
               <Details
  position="Junior Data Analyst"
  company="Van Moer Logistics"
  companyLink="https://www.vanmoer.com/"
  time="Sep 2024 - May 2025"
  address="Ghent, Belgium · Hybrid"
  work="Developed Power BI dashboards and Excel reports to visualize logistics KPIs, optimize delivery performance, and support data-driven decisions across the supply chain."
/>

<Details
  position=".NET Software Developer (Freelance)"
  company="GMK-404"
  companyLink="https://www.gmk-404.com/"
  time="Jul 2023 - Oct 2023"
  address="Brussels, Belgium"
  work="Created customized websites and software solutions for individuals and small businesses using .NET, JavaScript, and modern front-end frameworks. Focused on responsive design, usability, and performance."
/>

<Details
  position="Full-Stack Developer & Data Analyst Intern"
  company="Adimian"
  companyLink="https://www.adimian.com/"
  time="Apr 2023 - May 2023"
  address="Brussels, Belgium"
  work="Built a web-based skills platform using FastAPI (Python), PostgreSQL, Docker, and Vue.js (Quasar). Designed and implemented interactive dashboards to track internal competencies and user progress."
/>

<Details
  position="Full-Stack Developer Trainee"
  company="BeCode"
  companyLink="https://becode.org/"
  time="Jan 2023 - Apr 2023"
  address="Brussels, Belgium"
  work="Participated in a full-time coding bootcamp focused on full-stack development. Built and deployed multiple web apps:
  - ORIGIN: Social app using React, Node.js, PostgreSQL, REST APIs.
  - DECKTOPIA: Card game built with React, Node.js, PostgreSQL, Docker.
  Gained strong skills in Git, Agile teamwork, and project delivery."
/>


                    <Details 
                    position="Inventory Manager" company="Bleckmann"
                    companyLink="https://www.bleckmann.com/nl"
                    time="05/2021 - 09/2022"
                    adress="Antwerp/Ghent/Belsele/Desteldonk, Belgium"
                    work="Problem Solving · Operations Management ·
                    Conflict Management-Programming-JDA Programmation-Check invetory-Update Data
                    " />

    <Details 
    position="Logistics Coordinator" 
    company="Van Mieghem Logistics"
    companyLink="www.adimian.com"
    time="10/2020 - 06/2021"
    address="Saintes, Belgium"
    work="Supervised cargo unloading, meticulously documented pallets, conducted rigorous quantity checks, and adeptly operated a Clark forklift."
/>

<Details 
    position="Logistics Specialist" 
    company="Euro Pool System"
    companyLink="https://www.europoolsystem.com"
    time="04/2020 - 06/2021"
    address="Zellik, Belgium"
    work="Performed security management, program management, and internal controls responsibilities."
/>


<Details 
    position="Logistics Coordinator" 
    company="Viangro SA"
    companyLink="https://www.viangro.be/"
    time="06/2019 - 08/2019"
    address="Anderlecht, Belgium"
    work="Managed product logistics, facilitated communication within the traffic department, and ensured timely food shipments."
/>

                </ul>
            

            </div>

        </div>

        
    )
}

export default Experience