import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css'; // Import the full Swiper bundle CSS
import 'swiper/css/pagination'; // Import the pagination style
import 'swiper/css/navigation'; // Import the navigation style

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  BsFillRssFill,
  GiDiamondTrophy,

} from 'react-icons/rx';
import { TiWiFi } from 'react-icons/ti';
import { FiActivity } from "react-icons/fi";
import { FaBullhorn } from "react-icons/fa";



SwiperCore.use([Pagination, Navigation]);

export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Craft a strong and memorable brand identity that resonates with your target audience.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Create visually stunning and user-friendly designs that captivate and engage your audience, leaving a lasting impression.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Transform your ideas into functional and responsive websites or applications, tailored to meet your business goals.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: "Deliver compelling and persuasive content that communicates your brand's' message effectively and drives action."
  },
  {
    icon: <TiWiFi />,
    title: 'SEO',
    description: 'Optimize your online presence to improve search engine rankings and increase organic traffic to your website or platform.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Digital Marketing',
    description: 'Utilize digital channels and strategies to reach, engage, and convert your target audience, maximizing your online reach.',
  },
]

const ServicesSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination= {{
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
            <div className="bg-[rgba(43,57,117,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer ">
              <div className="text-4xl text-blue-500 mb-4 dark:text-blue-200">{item.icon}</div>
          
              <div className="mb-8 text-center">
                <div className="mb-2 text-lg dark:text-white">{item.title}</div>
                <p className="mx-auto max-w-[350px] leading-normal dark:text-white">
                  {item.description}
                </p>
              </div>
          
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-blue-500 transition-all duration-300 dark:group-hover:text-white" />
              </div>
            </div>
          </SwiperSlide>
          
          );
        })}
      </Swiper>
      <div className="flex justify-center mt-4">
        <div className="custom-prev" onClick={goPrev}>
          <span>&lt;</span>
        </div>
        <div className="custom-next" onClick={goNext}>
          <span>&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
