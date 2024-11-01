"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "./hero.css";
import image1 from "../../images/sliders/3840x2400/8.png"
import image2 from "../../images/sliders/3840x2400/7.png"
import image3 from "../../images/sliders/3840x2400/6.png"
import image4 from "../../images/sliders/3840x2400/3.png"



const Hero = () => {
  console.log(image1)

 
  return (
    <div className="hero">
      <div className="relative">
        <div className="absolute z-10 inset-x-0 top-0 h-[300px]  bg-gradient-to-t from-transparent to-black"></div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                width={4375}
                height={2394}
                src={image1}
                alt="Joya Home"
                className="w-full h-full object-cover"
              />
              <div className="relative ">
                <div className="absolute z-[1] inset-x-0 top-[-300px] h-[300px] bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-[60px] z-10 flex items-end justify-start h-full text-start text-white">
              <div>
                {/* Heading */}
                <h1 className="">
                  <span className="text-white text-[30px] leading-[34px] font-light uppercase ">
                    VILLA AMAILA
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base mt-1 leading-4 font-extralight uppercase">
                  AlBARARI
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
               width={6000}
               height={4000}
               src={image2}
                alt="Joya Home"
                className="w-full h-full object-cover"
              />
              <div className="relative ">
                <div className="absolute z-[1] inset-x-0 top-[-300px] h-[300px] bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-[60px] z-10 flex items-end justify-start h-full text-start text-white">
              <div>
                {/* Heading */}
                <h1 className="">
                  <span className="text-white text-[30px] leading-[34px] font-light uppercase ">
                    VILLA AMAILA
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base mt-1 leading-4 font-extralight uppercase">
                  AlBARARI
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
               width={5000}
               height={3125}
               src={image3}
                alt="Joya Home"
                className="w-full h-full object-cover"
              />
              <div className="relative ">
                <div className="absolute z-[1] inset-x-0 top-[-300px] h-[300px] bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-[60px] z-10 flex items-end justify-start h-full text-start text-white">
              <div>
                {/* Heading */}
                <h1 className="">
                  <span className="text-white text-[30px] leading-[34px] font-light uppercase ">
                    VILLA AMAILA
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base mt-1 leading-4 font-extralight uppercase">
                  AlBARARI
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
               width={3264}
               height={2448}
               src={image4}
                alt="Joya Home"
                className="w-full h-full object-cover"
              />
              <div className="relative ">
                <div className="absolute z-[1] inset-x-0 top-[-300px] h-[300px] bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-[60px] z-10 flex items-end justify-start h-full text-start text-white">
              <div>
                {/* Heading */}
                <h1 className="">
                  <span className="text-white text-[30px] leading-[34px] font-light uppercase ">
                    VILLA AMAILA
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base mt-1 leading-4 font-extralight uppercase">
                  AlBARARI
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="relative mx-auto h-0  flex items-center z-20 -top-12  justify-center w-fit">
        <div className="relative w-[1px]  h-8 bg-transparent overflow-hidden">
          <div className="absolute w-[1px]  bg-white animate-slide"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
