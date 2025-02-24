import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";
import ODEAL from "../../public/images/projects/ODEAL.PNG";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, items }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto bg-cover" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }}
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" 
        />
      </Link>
      
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="flex flex-col dark:bg-gray-50 border">
      <Link href={link} target="_blank" aria-label={title}>
        <Image alt={title} className="object-cover w-full h-52 dark:bg-gray-500" src={img} />
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{summary}</h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <Link href={link} target="_blank" className="hover:underline">Visit</Link>
          <Link href={github} target="_blank" className="hover:underline">GitHub</Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <section className="dark:text-white dark:bg-black mt-20 mb-10 mx-20">
      <h2 className="text-center text-7xl mb-10">Featured Projects</h2>
      <ul>
        <li></li>
      </ul>
      <div className="grid grid-cols-3 md:grid-cols-1 gap-8 ">
        <Project
          title="Zikangen Agency"
          img={ODEAL}
          summary="Digital Marketing Website."
          link="https://zikagenagency.com/"
          github="https://github.com/gmka98/ODEAL"
          type="Featured Project"
        />

         <Project
          title="Bounce"
          img={ODEAL}
          summary="Jump Game"
          link="https://bounce-gklezma3h-gmka98s-projects.vercel.app/"
          github="https://github.com/gmka98/Bounce-Game"
          type="Featured Project"
        />
        <Project
          title="ODEAL"
          img={ODEAL}
          summary="Marketplace App where you can sell and exchange objects."
          link="/"
          github="https://github.com/gmka98/ODEAL"
          type="Featured Project"
        />
      </div>
    </section>
  );
}
