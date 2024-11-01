"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image5 from "../../images/sliders/3840x2400/2.png"

const Presentation = () => {
  return (
    <section className=" text-[#EFECE6] py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center">
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight text-[#EFECE6]">
                Discover Your
                <br />
                Dream Home
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3d6a64] to-[#698f8c] rounded-full"></div>
              <p className="text-lg leading-relaxed text-[#EFECE6]">
                At Luxe Realty, we connect you with the finest properties in the
                market, delivering exceptional service tailored to your unique
                needs. Our dedicated team of elite brokers has a profound
                understanding of joya real estate, ensuring you receive
                unparalleled expertise and discretion in your property journey.
              </p>
              <p className="text-lg leading-relaxed text-[#EFECE6]">
                Experience the art of refined properties with us, where each home
                tells a story and every detail matters. Your journey to joya
                properties begins here.
              </p>
            </div>
          </div>

          {/* Right Column - Image & Call to Action */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative group">
              <Image
                width={1280}
                height={855}
                src={image5}
                alt="joya properties"
                className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#404740]/90 to-transparent rounded-b-lg">
                <h3 className="text-3xl font-semibold mb-4 text-[#EFECE6]">
                  Embrace joya properties
                </h3>
                <Link
                  href={"/Contact/"}
                  className="inline-block bg-[#3d6a64] hover:bg-[#698f8c] text-[#EFECE6] font-semibold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
