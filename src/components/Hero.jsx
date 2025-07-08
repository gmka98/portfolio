"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from '@/components/Icons';
import { TypeAnimation } from "react-type-animation";






{/* Images*/}
import Python from "@/assets/python.png";
import Javascript from "@/assets/javascript.png";
import Csharp from "@/assets/C_-.png";
import profilePic from '../../public/images/profile/ai-gmk.png';

import { CiMail } from "react-icons/ci";

const ResumeSelector = () => {
  const [selectedCV, setSelectedCV] = useState("/cv1.pdf");

  const resumes = [
    { label: "Backend Developer Resume", value: "/cv1.pdf" },
    { label: "Data Analyst Resume", value: "/cv2.pdf" },
    { label: "Full-Stack Developer Resume", value: "/cv3.pdf" },
    { label: "Software Developer Resume", value: "/cv4.pdf" },
    { label: "Frontend Developer Resume", value: "/cv5.pdf" },
  ];
}


export default function HeroSection() {
  
  return (
    <section className="dark:bg-black dark:text-white px-6 mx-10 text-black">
      <div className="container mx-auto ">
        <h1 className="text-center text-2xl">
          Gael Mukendi Kabongo
        </h1>
        <div className="text-center">
            <span className="sm:text-sm text-3xl mr-4">Hi IM</span>
              <TypeAnimation 
              sequence={[
                'Software Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Digital Marketing',
                2000,
              ]}
              style={{fontSize: ''}}
                className="text-primary dark:text-yellow-300 font-semibold sm:text-sm text-3xl"
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
              </div>
        <div className="flex lg:flex-wrap   justify-between">
          {/* Texte de gauche */}
          <div className="space-y-6 sm:mt-4 mt-20 w-full">
            <div className="flex items-center gap-x-4 ">
                <p className="text-center uppercase text-4xl font-semibold lg:text-xl    sm:text-lg">
                Turning <span className="text-primary dark:text-yellow-400">ideas</span>  into innovative <span className="text-primary dark:text-yellow-400">digital solutions</span> 
                </p>
            </div>
            <div className="flex justify-center items-center self-start mt-2 lg:justify-center lg:self-center">
                <Link
                  href="/Gael-Mukendi-Kabongo-S-Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link 
                href="mailto:gmka98@gmail.com?subject=Service%20Inquiry&body=Hello,%20I%20have%20a%20question%20about%20your%20services."
                className="flex items-center text-lg font-medium underline ml-2 hover:border p-2.5 px-6 border-black rounded-lg"
                aria-label="Send an email to gmka98@gmail.com">
                  Contact
                  <CiMail className="w-6 ml-1"/>

                </Link>
              </div>
          </div>

          {/* Laptop 3D au centre */}
          <div className="w-full">
          <Image
            src={profilePic}
            alt="GMK"
            className="w-full h-auto lg:hidden md:inline-block md:w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            width={500}
            height={500}
          />
          </div>

          {/* Texte de droite */}
          <div className="space-y-6 mr-4 w-full mt-20 sm:mt-2">
            <h2 className="text-3xl sm:text-md font-semibold text-center">🛠️ <span className="text-primary dark:text-yellow-300">Expertise</span> Technique</h2>
           
            <div className="text-white mt-10">
                  <ul className="flex justify-between sm:shrink-0">
                    <li>
                        <Image
                        src={Python}
                        width={80}
                        height={100}
                        alt=""/>
                    </li>
                    <li>
                    <Image
                        src={Javascript}
                        width={80}
                        height={100}
                        alt=""/>
                    </li>
                    <li>
                    <Image
                        src={Csharp}
                        width={80}
                        height={100}
                        alt=""/>
                    </li>
                </ul>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        
      </div>
    </section>
  );
}
