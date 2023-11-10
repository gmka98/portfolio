import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import origin from "../../public/images/projects/origin.PNG";
import decktopia from "../../public/images/projects/decktopia.PNG";
import ujamaa from "../../public/images/projects/ujamaa.PNG";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffects'
import { HtmlIcon, CssIcon, JavascriptIcon, NuxtIcon, TailwindcssIcon, DockerIcon, NodejsIcon, PythonIcon, ReactIcon } from "@/components/Icons";
import ODEAL from '../../public/images/projects/ODEAL.PNG'
import bounce from '../../public/images/projects/jump.PNG'
import Demezvous from '../../public/images/projects/demezvous.PNG'

const FramerImage = motion(Image);



const iconMapping = {
    HTML: <HtmlIcon />,
    CSS: <CssIcon />,
    JavaScript: <JavascriptIcon />,
    TailwindCSS: <TailwindcssIcon />,
    Docker: <DockerIcon />,
    NuxtJS: <NuxtIcon />,
    NodeJS: <NodejsIcon />,
    Python: <PythonIcon/>,
    Re: <ReactIcon/>
    // Add more items and their corresponding icons as needed
  };

const FeaturedProject = ({type,title, summary, img, link, github, items}) => {

    return(
        <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
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
            <ul className="flex gap-4 w-full h-full">
        {items &&
          items.map((item, index) => (
            <li key={index}>
              {iconMapping[item] /* Render the icon based on the item name */}
              {item} {/* Optionally, you can also render the item name */}
            </li>
          ))}
      </ul>
            <div className="mt-2 flex items-center">
                <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark sm:px-4 sm:text-base">Visit Project</Link>

            </div>

            </div>

        </article>
    )

}

const Project = ({type, title, img, link, github}) =>{
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
                                           <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br 3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}} />
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
            <meta name="description" content="my description" />
        </Head>
        <TransitionEffect />

        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Where Ideas Build Real!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
            
            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
                <FeaturedProject
  title="DemezVous"
  img={Demezvous}
  summary="Moving Website"
  link="demdem-3yoksqb7l-gmka98s-projects.vercel.app"
  github="https://github.com/gmka98/demdem"
  type="Featured Project"
/>

                </div>
                <div className="col-span-12">
                <FeaturedProject
  title="Ujamaa"
  img={ujamaa}
  summary="Visualize ancestry. Preserve family legacy. Discover roots. Uncover connections."
  link="https://comite-ujamaa.com"
  github="https://github.com/gmka98/Ujamaa"
  type="Featured Project"
/>

                </div>
                <div className="col-span-12">
                   
                </div>
                <div className="col-span-12">
                    <FeaturedProject
                    
                    title="Origin"
                    img={origin}
                    summary="Visualize ancestry. Preserve family legacy. Discover roots. Uncover connections."
                    link="https://origin-bcode.netlify.app"
                    github="https://github.com/gmka98/origin"
                    type="Featured Project"
                   
                    />
                </div>
            
                
                
                
                <div className="col-span-6 sm:col-span-12">
                
                </div>
                <div className="col-span-6 sm:col-span-12">
                
                </div>
                
                <div className="col-span-12">
                <div className="col-span-6 sm:col-span-12">
                <Project
                    
                    title="ODEAL"
                    img={ODEAL}
                    summary="Marktplace App where you can sell and exchange objects."
                    link="/"
                    github="https://github.com/gmka98/ODEAL"
                    type="Featured Project"
                   
                    />
                </div>
                </div>
                <div className="col-span-12">
                <FeaturedProject
                    
                    title="Decktopia"
                    img={decktopia}
                    summary="card marketplace."
                    link="https://decktopia.netlify.app"
                    github="https://github.com/gmka98/Decktopia/tree/master"
                    type="Featured Project"
                   
                    />
                </div>


            </div>
            
            </Layout>
        </main>
        </>
        

    )
}

export default projects