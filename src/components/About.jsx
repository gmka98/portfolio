import Image from "next/image"
import ProfilPic from "@/assets/gael.png"
import PicAbout from "@/assets/PicAbout.jpg"
import Me from "@/assets/me.png"
import { GiTronArrow } from "react-icons/gi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BsArrowRightCircle  } from "react-icons/bs";
import { BsArrowDownCircle  } from "react-icons/bs";
import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Link from "next/link";


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
  
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref);
  
    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);
  
    useEffect(() => {
      springValue.on('change', (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);
  
    return <span ref={ref}></span>;
  };

const services = [ 
    {
        name: 'Problem-Solving Skills',
       
    
        
    },
    {
        name: 'Technical Proficiency',
       
    
        
    },
    {
        name: 'Attention to Detail',
       
    
        
    },
    {
        name: 'User-Centric Thinking',
    
        
    },
];


export default function IndexService() {
  return (
    <div>
<div className="grid grid-cols-3 sm:grid-cols-1 gap-4 justify-center mx-20 sm:mx-20 dark:text-white items-center text-black">
{/* Left */}
                <div className="space-y-80 sm:space-y-2 ">
                    <div className="">
                        <p className="text-5xl sm:text-center sm:text-3xl font-semibold ">Hustler <span className="dark:text-yellow-300 text-primary"><AnimatedNumbers value={1998}/></span></p>
                        <GiTronArrow className="border border-dotted rounded-full p-4  text-7xl sm:mx-auto sm:rotate-90"/>
                    </div>
                    <div className="flex  items-center hover:gap-x-2">
                        <p className="text-5xl text-left sm:text-center sm:text-3xl sm:ml-24">About</p>
                        <Link href={"/about"}>
                        <BsArrowRightCircle  className="dark:text-white text-6xl sm:h-10  sm:rotate-90 animate-bounce"/>
                        </Link>
                    </div>
                </div>
                
                {/*middle */}
                <div className="relative flex items-center justify-center">
  <div className="border-dashed border-8 border-black dark:border-white rounded-full p-4 animate-spin">
    <div className="w-[400px] h-[400px]"></div> {/* Empty spinning div */}
  </div>
  <Image
    src={PicAbout}
    alt="GMK"
    className="absolute w-full h-auto lg:hidden md:inline-block md:w-full border rounded-full"
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
    width={500}
    height={500}
  />
</div>

                {/* right */}
                <div className="space-y-6 sm:space-y-4">
                    <p className="text-right sm:text-center sm:text-sm ">I’m a self-taught <span className="dark:text-yellow-500 text-primary">developer</span>  who loves <span className="dark:text-yellow-500 text-primary">challenges</span>  and pushes myself <span className="dark:text-yellow-500 text-primary">every day</span>  If I don’t know something, I’ll <span className="dark:text-yellow-500 text-primary">learn and master</span> it, I <span className="dark:text-yellow-500 text-primary">never give up</span>.</p>

                        {services.map((service, index)=>{
                            const { name, description, link} = service
                            return (
                            <div className="space-y-2 m" key={index}>
                                <div className="">
                                    <h6 className="text-[20px] text-right font-bold  text-primary dark:text-yellow-300 sm:text-center sm:text-lg
                                     ">
                                        {name}
                                    </h6>
                                    
                                </div>
                                
                            </div>       
                            )

                        })}
                        <p className="text-right sm:text-center sm:text-sm ">
                      freelance full-stack developer known for reliability and innovation. Self-taught and <span className="text-primary dark:text-yellow-500">adaptable</span>, they tackle challenges head-on to deliver<span className="dark:text-yellow-500 text-primary">impactful solutions</span> .
                      </p>
                      </div>
                      

            </div>

        
    </div>
  )
}