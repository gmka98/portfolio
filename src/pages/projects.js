import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffects'


// Images
import Lokkerroom from "../../public/images/projects/team.jpg";
import origin from "../../public/images/projects/origin.PNG";
import decktopia from "../../public/images/projects/decktopia.PNG";
import ujamaa from "../../public/images/projects/ujamaa.PNG";
import Lj from '../../public/images/projects/lj.png'
import Demezvous from '../../public/images/projects/demezvous.PNG'
import Weather from '../../public/images/projects/weather.jpg'
import Bookface from '../../public/images/projects/social.jpg'
import Mole from '../../public/images/projects/mole.jpg'
import Movie from '../../public/images/projects/movie.jpg'
import Commerce from "../../public/images/projects/commerce.jpg";
import Kazimmo from "@/assets/projects/kazimmo.png";
import Zikagen from "@/assets/projects/zikagen.png";
import Telecom from "@/assets/projects/telecom.jpg";
import Competitor from "@/assets/projects/competitor.jpg";
import Investing from "@/assets/projects/investing-movie.jpg";
import Trend from "@/assets/projects/trend.jpg";
import Trading from "@/assets/projects/trading.jpg";
import Nobel from "@/assets/projects/nobel-prize.jpg";
import LA from "@/assets/projects/los_angeles.jpg";
import Phone from "@/assets/projects/phone.jpg";


// Icons
import { SiNuxtdotjs, SiFastapi, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

// Mapping of technology names to icons
const iconMapping = {
  Nuxtjs: <SiNuxtdotjs  className="text-green-300"/>,
  Nextjs: <TbBrandNextjs className="text-black dark:text-white" />,
  FastApi: <SiFastapi  className="text-green-400"/>,
  NodeJS: <FaNodeJs className="text-green-200"/>,
  PostgreSQL: <BiLogoPostgresql className="text-blue-600"/>,
  MongoDB: <SiMongodb  className="text-green-500"/>,
  Html: <FaHtml5  className="text-orange-300"/>,
  Css: <FaCss3Alt className="text-blue-300"/>,
  Javascript: <IoLogoJavascript className="text-yellow-300"/>,
  TailwindCss: <SiTailwindcss className="text-blue-300" />,
  Express: <SiExpress className="text-black dark;text-white"/>,
  React: <FaReact className="text-blue-600"/>,
};



const FramerImage = motion(Image);


const FeaturedProject = ({type,title, summary, img, link, github, items}) => {

  return(
      <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border-solid border-dark bg-light shadow-2xl p-12 dark:bg-black dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
                             <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

          <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
              <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}}  priority 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
          </Link>

          <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
              <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
              <Link href={link} target="_blank" className="hover:underline underline-offset-2">
              <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>            
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
          
          <div className="mt-2 flex items-center">
              <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
              <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-white sm:px-4 sm:text-base">Visit Project</Link>

          </div>

          </div>

      </article>
  )

}


const Project = ({type, title, img, link, github}) =>{
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-black dark:border-light xs:p-4">
                                           <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br 3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto " whileHover={{scale:1.05}} transition={{duration:0.2}} />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4 ">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">{title}</h2>            
            </Link>
        
            <div className="w-full mt-2 flex items-center justify-between">
            <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">Visit Project</Link>

                <Link href={github} target="_blank" className="w-8 md:w-6"><GithubIcon />{""}</Link>

            </div>

            </div>

        </article>

    )
}

const projects = () =>{
    return(
        <>
        <Head>
            <title>GMK | Project Page</title>
            <meta name="description" content="Discover my Work" />
        </Head>
        <TransitionEffect />
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light text-black">
            <Layout className="pt-10">
             <div class="flex items-center justify-center ">
           
        </div>
            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
  <div className="col-span-12">
  <FeaturedProject
    title="Exploring Stock Market Trends"
    img={Trend}
    summary="An in-depth analysis of stock market behavior using Python and visualization tools. This project provides clear trend identification and supports investment decision-making through data insights."
    link="https://github.com/gmka98/Exploring-Stock-Market-Trends"
    github="https://github.com/gmka98/Exploring-Stock-Market-Trends"
    type="Data Analysis"
    items={["Python", "Pandas", "Matplotlib", "Seaborn"]}
  />
</div>

<div className="lg:col-span-12 col-span-6">
  <Project
    title="Power BI Case Study – Mortgage Trading Analysis"
    img={Trading}
    summary="A detailed Power BI dashboard that provides key performance insights into mortgage trading data. It helps stakeholders understand profitability, risk, and portfolio performance at a glance."
    link="https://github.com/gmka98/Mortgage-Trading-Analysis-PowerBi"
    github="https://github.com/gmka98/Mortgage-Trading-Analysis-PowerBi"
    type="Data Analysis"
  />
</div>

<div className="lg:col-span-12 col-span-6">
  <Project
    title="Telecom Company – Customer Churn Prediction"
    img={Phone}
    summary="A predictive model that analyzes customer data to identify churn patterns. This project helps telecom businesses reduce churn rates and improve retention strategies."
    link="https://github.com/gmka98/Customer-Churn-Prediction"
    github="https://github.com/gmka98/Customer-Churn-Prediction"
    type="Data Analysis"
  />
</div>

<div className="col-span-12">
  <FeaturedProject
    title="Power BI Case Study – Customer Churn Analysis"
    img={Telecom}
    summary="Interactive Power BI dashboards analyzing customer behavior to reveal why clients leave. The results help improve decision-making and customer satisfaction in competitive markets."
    link="https://github.com/gmka98/Customer-Churn-Analysis-PowerBI"
    github="https://github.com/gmka98/Customer-Churn-Analysis-PowerBI"
    type="Data Analysis"
    items={["Power BI", "DAX", "Data Cleaning"]}
  />
</div>

<div className="lg:col-span-12 col-span-6">
  <Project
    title="Nobel Prize Data Analysis"
    img={Nobel}
    summary="A historical data exploration project that visualizes trends in Nobel Prize distributions across categories, countries, and gender, offering unique insights into global academic recognition."
    link="https://github.com/gmka98/Visualizing-the-Hystory-of-Nobel-Prize-Winners"
    github="https://github.com/gmka98/Visualizing-the-Hystory-of-Nobel-Prize-Winners"
    type="Data Analysis"
  />
</div>

<div className="lg:col-span-12 col-span-6">
  <Project
    title="LAPD Crime Data Analysis"
    img={LA}
    summary="A comprehensive crime data analysis project for the city of Los Angeles. It reveals crime hotspots and time-based trends to assist in public safety planning and urban policy."
    link="https://github.com/gmka98/Analyzing-Crime-in-Los-Angeles"
    github="https://github.com/gmka98/Analyzing-Crime-in-Los-Angeles"
    type="Data Analysis"
  />
</div>

<div className="col-span-12">
  <FeaturedProject
    title="Kazimmo"
    img={Kazimmo}
    summary="A professional real estate website built for Kazimmo agency. It enhances the company’s image, increases credibility, and has attracted many client visits since launch, boosting both leads and visibility."
    link="https://kazimmo.vercel.app"
    github="/projects"
    type="Website"
    items={["Nuxtjs", "TailwindCss", "FastApi", "PostgreSQL"]}
  />
</div>

<div className="lg:col-span-12 col-span-6">
  <Project
    title="Power BI Case Study – Competitor Sales & Market Share Analysis"
    img={Competitor}
    summary="An advanced Power BI dashboard comparing competitor sales and market share. It enables strategic positioning by providing a clear understanding of industry trends and rivals’ performance."
    link="/"
    github="https://github.com/gmka98/Competitor-Sales-Analysis-PowerBi"
    type="Data Analysis"
  />
</div>

<div className="lg:col-span-12 col-span-6">
  <Project
    title="Investing-Netflix-Movie"
    img={Investing}
    summary="Data storytelling project combining Netflix movie popularity with investment perspectives. Provides unique visuals and findings on audience trends and platform content strategy."
    link="/"
    github="https://github.com/gmka98/Investing-Netflix-Movie"
    type="Data Analysis"
  />
</div>

<div className="col-span-12">
  <FeaturedProject
    title="Zikagen Agency"
    img={Zikagen}
    summary="A digital agency website designed to offer marketing services, blog articles, and meeting booking. The modern UI and backend system deliver a seamless, trustworthy experience that converts visitors into leads."
    link="https://zikagenagency.com/"
    github="/projects"
    type="Website"
    items={["Nuxtjs", "TailwindCss", "FastApi", "PostgreSQL"]}
  />
</div>
                <div className="lg:col-span-12 col-span-6">
                <Project
                    title="Ecommerce Api"
                    img={Commerce}
                    summary="Marktplace App where you can sell and exchange objects."
                    link="/"
                    github="https://github.com/gmka98/e_commerce_api"
                    type="Backend"
                    />
                    
                </div>
                <div className="lg:col-span-12 col-span-6">
                <Project
                    title="MvcMovie"
                    img={Movie}
                    summary="Marktplace App where you can sell and exchange objects."
                    link="/"
                    github="https://github.com/gmka98/ODEAL"
                    type="Application"
                    />
                    
                </div>
               
                <div className="lg:col-span-12 col-span-6">
                <Project
                    title="Weather App"
                    img={Weather}
                    summary="Marktplace App where you can sell and exchange objects."
                    link="/"
                    github="https://github.com/gmka98/Weather-App"
                    type="App"
                    />
                    
                </div>
                <div className="lg:col-span-12 col-span-6">
                <Project
                    title="Whack A Mole"
                    img={Mole}
                    summary="Marktplace App where you can sell and exchange objects."
                    link="/"
                    github="https://github.com/gmka98/Whack-A-Mole"
                    type="Game"
                    />
                    
                </div>
               
                <div className="col-span-12">
                    <FeaturedProject
                    
                    title="Origin"
                    img={origin}
                    summary="Visualize ancestry. Preserve family legacy. Discover roots. Uncover connections."
                    link="https://origin-bcode.netlify.app"
                    github="https://github.com/gmka98/origin"
                    type="Featured Project"
                    items={["React", "TailwindCss"]} // Must match iconMapping keys

                   
                    />
                </div>
                <div className="lg:col-span-12 col-span-6">
                <Project
                    title="Lokkerroom"
                    img={Lokkerroom}
                    summary="Marktplace App where you can sell and exchange objects."
                    link="/"
                    github="https://github.com/gmka98/lokkeroom"
                    type="Backend"
                    />
                    
                </div>
                <div className="lg:col-span-12 col-span-6">
                <Project
                    title="BookFace"
                    img={Bookface}
                    summary="Marktplace App where you can sell and exchange objects."
                    link="/"
                    github="https://github.com/gmka98/BookFace"
                    type="Backend"
                    />
                    
                </div>
            
      
               
              


            </div>
            
            </Layout>
        </main>
        </>
        

    )
}

export default projects