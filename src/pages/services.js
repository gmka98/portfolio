import TransitionEffect from "@/components/TransitionEffects";
import React from "react";
import Head from "next/head";

const services = [
  {
    title: "Custom Web Development",
    features: ["Responsive Design", "E-commerce Solutions", "API Integrations"]
  },
  {
    title: "Mobile App Development",
    features: ["Cross-Platform Apps", "Native Development", "App Store Deployment"]
  },
  {
    title: "SEO & Digital Marketing",
    features: ["SEO Optimization", "Social Media Management", "PPC Campaigns"]
  },
  {
    title: "UI/UX Design",
    features: ["Wireframing & Prototyping", "User Research", "Brand Identity"]
  },
  {
    title: "Data Analysis & Visualization",
    features: ["Business Intelligence", "Data Cleaning", "Dashboard Creation"]
  },
  {
    title: "Cloud Solutions",
    features: ["AWS & Azure", "Cloud Security", "Scalability Solutions"]
  },
];

const Services = () => {
  return (
    <>
     <Head>
        <title>GMK | Services Page</title>
        <meta name="description" content="See My Services" />
    </Head>
    <TransitionEffect/>
    <div className="p-10 text-center text-black">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 border shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <ul className="text-left">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fle§x-shrink-0 w-6 h-6 dark:text-violet-600"  size={18}>
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
					</svg>
                   {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
