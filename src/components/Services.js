import { LuGamepad2 } from "react-icons/lu";
import { BiMobileVibration } from "react-icons/bi";
import { FaLaptopCode, FaDatabase, FaRobot } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { SiAlwaysdata, SiMarketo, SiBrandfolder, SiMaterialdesign } from "react-icons/si";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaArrowCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

const ServiceCard = ({ title, description, icon1, icon2, arrow }) => {
    return (
        <div className="border border-dotted rounded p-4">
            <div className="flex justify-between items-center mx-2 mt-2">
                <div className="flex space-x-2 text-3xl">{icon1}{icon2}</div>
                <div>{arrow}</div>
            </div>
            <div className="py-4">
                <h3 className="capitalize font-semibold text-4xl sm:text-xl mb-4">{title}</h3>
                <ul className="text-xs space-y-2">
                    {description.map((desc, index) => <li key={index}>{desc}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default function Services() {
    return (
        <div className="dark:text-white text-black mt-40 px-20 bg-black">
            <h2 className="text-3xl uppercase mb-2">Our Services</h2>
            <div className="flex items-center justify-between">
                <p>We craft solutions to elevate your digital presence.</p>
                <div className="flex justify-end items-center gap-1">
                    <button className="dark:bg-white border rounded-full px-4 font-bold dark:text-black text-sm">See More</button>
                    <FaArrowAltCircleRight />
                </div>
            </div>

            <div className="grid grid-cols-7 grid-row-10 gap-4 mt-10">
                <div className="row-span-3 col-span-2">
                    <ServiceCard 
                        title="Website and Application Development"
                        description={["Build responsive websites, including e-commerce platforms, corporate sites, and personal portfolios.", "Develop custom mobile and web applications tailored to specific business needs."]}
                        icon1={<FaLaptopCode />}
                        icon2={<MdDevices />}
                        arrow={<FaArrowAltCircleRight />}
                    />
                </div>
                <div className="row-span-2 col-span-5">
                    <ServiceCard 
                        title="Mobile Mini-Games and Lightweight Applications"
                        description={["Create engaging mini-games for mobile platforms, ideal for entertainment or promotional campaigns.", "Design lightweight and user-friendly apps for Android and iOS."]}
                        icon1={<LuGamepad2 />}
                        icon2={<BiMobileVibration />}
                        arrow={<FaArrowAltCircleDown />}
                    />
                </div>
                <div className="row-span-6 col-span-2">
                    <ServiceCard 
                        title="Data Analysis and Data Science"
                        description={["Analyze complex datasets to provide actionable insights and generate detailed reports.", "Develop machine learning models and data-driven solutions for business challenges."]}
                        icon1={<SiAlwaysdata />}
                        icon2={<FaDatabase />}
                        arrow={<FaArrowAltCircleRight />}
                    />
                </div>
                <div className="row-span-6 col-span-3">
                    <ServiceCard 
                        title="SEO, Digital Marketing, and Branding"
                        description={["Optimize websites for search engines to improve visibility and rankings (SEO).", "Plan and execute targeted digital marketing campaigns across platforms.", "Design brand identities, including logos and visual guidelines, to enhance market presence."]}
                        icon1={<SiMarketo />}
                        icon2={<SiBrandfolder />}
                        arrow={<FaArrowAltCircleLeft />}
                    />
                </div>
                <div className="row-span-5 col-span-2">
                    <ServiceCard 
                        title="UI/UX Design and Prototyping"
                        description={["Design user-friendly interfaces for web and mobile applications.", "Create interactive prototypes to test and refine user experiences before development."]}
                        icon1={<SiMaterialdesign />}
                        icon2={<FaRobot />}
                        arrow={<FaArrowCircleUp />}
                    />
                </div>
            </div>
        </div>
    );
}
