"use client";
import React from "react";
import Link from "next/link";


const FeaturesVisualImage = () => {
  return (
    <div className="relative w-full h-screen visual-image-wrap">
      {/* Background image for desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/projects/02-features/01-apartmen.jpg)",
        }}
      ></div>
      {/* Background image for mobile */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/projects/02-features/01-apartmen.jpg)",
        }}
      ></div>

      {/* Gradients on top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-t w-full h-1/2 from-transparent to-[#111612] z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[-9px] md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-12 flex flex-col items-center">
          <div className="w-[1px] h-8 bg-[#faf8f7] animate-bounce"></div>
        </div>
      </div>

      {/* Info section */}
      <div className="absolute bottom-0 left-0 w-full p-2.5 md:p-10 z-30 text-[#faf8f7]">
        <h2 className="text-4xl font-light uppercase fade-left transition-opacity duration-500">
          Villa Allegra
        </h2>
        <h3 className="text-lg font-thin mt-2 uppercase md:mb-0 mb-2.5">
          Palm Jumeirah <span className="mx-2">•</span> Request Price
        </h3>
        <Link
          href={"/Projects/Features/villa-allegra__67112f9c673d16920a7bbf41"}
          className="inline-block mt-4 px-6 py-2 bg-transparent border border-[#faf8f7] hover:bg-[#faf8f7] hover:text-[#111612] transition-colors duration-500"
        >
          See details
        </Link>
      </div>

      {/* Search tabs */}
      <div className="absolute bottom-0 right-0 p-2.5 md:p-10 z-30 text-[#faf8f7]">
        <div className="flex space-x-4">
          <Link href={"/Projects/Features"} className="hover:underline">
            Feature
          </Link>

          <Link href={"/Projects/Off-Plan"} className="hover:underline">
            Off Plans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesVisualImage;
