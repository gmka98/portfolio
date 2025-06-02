import { motion } from "framer-motion";


{/* Icons */}
import { FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { TbBrandDeezer } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { LuRotate3D } from "react-icons/lu";




const services = [ 
    {
        icon:<FaCode/>,
        name: 'Code',
       
    
        
    },
    {
        icon:<MdDesignServices/>,
        name: 'Design',
       
    
        
    },
    {
        icon:<TbBrandDeezer/>,
        name: 'Market',
       
    
        
    },
    {
        icon:<MdOutlineRocketLaunch />,
        name: 'Deploy',
    
        
    },
    {
        icon:<BsClipboardData />,
        name: 'Data',
    
        
    },
    {
        icon:<LuRotate3D />,
        name: '3D',
    
        
    },
   
    
];

export default function Banner() {
    return (
        <div className="overflow-hidden sm:overflow-hidden">
            <ul className="relative  flex justify-between gap-4 text-white bg-gray-300 dark:bg-yellow-500 bg-primary font-bold bg-dark-900  border-solid border-gray-900 py-5 px-4 rotate-3 my-10 z-10 sm:my-2">
            <motion.div
  className="flex gap-40"
  initial={{ x: "0%" }}
  animate={{ x: "-100%" }} // Défilement vers la gauche
  transition={{
    repeat: Infinity,
    repeatType: "loop",
    duration: 60,
    ease: "linear",
  }}
>
  {[...services, ...services, ...services, ...services, ...services, ...services].map((service, index) => (  // Duplication pour éviter le vide
    <li key={index} className="flex items-center text-6xl lg:gap-20">
      <div className="flex items-center">
        <span className="text-xl">{service.icon}</span>
        <span className="text-4xl font-semibold">{service.name}</span>
      </div>
    </li>
  ))}
</motion.div>

                            
        
            </ul>
            <ul className="overflow-x-hidden relative -top-32 flex  gap-4 text-white  font-bold bg-gray-900 dark:bg-gray-100 dark:text-black  border-solid border-gray-900 py-5 px-4 px-20 -rotate-3 my-10 z-20">
            <motion.div
  className="flex gap-40 whitespace-nowrap"
  initial={{ x: "-100%" }}  // Départ à gauche
  animate={{ x: "100%" }}   // Défilement vers la droite
  transition={{
    repeat: Infinity,
    repeatType: "loop",
    duration: 60,
    ease: "linear",
  }}
>
  {[...services, ...services, ...services,...services, ...services, ...services].map((service, index) => (
    <li key={index} className="flex items-center text-6xl lg:gap-20">
      <div className="flex items-center">
        <span className="text-xl">{service.icon}</span>
        <span className="text-4xl font-semibold">{service.name}</span>
      </div>
    </li>
  ))}
</motion.div>



            </ul>
        </div>
    )
}