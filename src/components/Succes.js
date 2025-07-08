import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';



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
  
  export default function Succes(){
    return(
        <div className="col-span-2 flex justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 mx-20 px-10 py-6 border shadow-xl shadow-black dark:shadow-white text-black dark:text-white my-10 sm:items-center sm:gap-4 sm:mx-auto">
        <div className="flex flex-col items-center justify-center  ">
          <span className="inline-block text-7xl  font-bold md:text-6xl sm:text-4xl xs:text-4xl">
            +
            <AnimatedNumbers value={4} />
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-sm xs:text-sm">Programming Language</h2>
        </div>

        <div className="flex flex-col items-center justify-center xl:items-center">
          <span className="inline-block text-7xl font-bold md:text-6xl sm:text-4xl xs:text-4xl">
            +
            <AnimatedNumbers value={45} />
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-sm ">+ Repository build</h2>
        </div>

        <div className="flex flex-col items-center justify-center xl:items-center">
          <span className="inline-block text-7xl font-bold md:text-6xl sm:text-4xl xs:text-4xl">
            +
            <AnimatedNumbers value={2} />
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-sm xs:text-sm">years of experience</h2>
        </div>
      </div>
    )
  }