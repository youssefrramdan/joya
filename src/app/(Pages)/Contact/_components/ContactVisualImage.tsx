"use client";
import React from "react";


const ContactVisualImage = () => {
  return (
    <div className="relative w-full h-screen visual-image-wrap">
      {/* Background image for desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/contact-us/contact-us.jpg)",
        }}
      ></div>
      {/* Background image for mobile */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/contact-us/contact-us.jpg)",
        }}
      ></div> 

      {/* Gradients on top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-t w-full h-full from-transparent to-[#111612] z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:left-1/2 left-3/4 transform -translate-x-1/2 z-20">
        <div className="w-6 h-12 flex flex-col items-center">
          <div className="w-[1px] h-8 bg-[#faf8f7] animate-bounce"></div>
        </div>
      </div>

      {/* Info section */}
      <div className="absolute bottom-0 left-0 w-full p-[10px] md:p-10 z-30 text-[#faf8f7]">
        <h2 className="text-4xl font-light uppercase fade-left transition-opacity duration-500">
          The Perfect Location
        </h2>
        <h3 className="text-lg font-thin mt-2 uppercase">
            JOYA Properties HeadQuarters
        </h3>
        
      </div>

     
    </div>
  );
};

export default ContactVisualImage;
