"use client";
import React, { useEffect } from "react";
import ServiceTitle from "./_components/ServicesTitle";
import ServicesVisualImage from "./_components/ServiceViuslaImage";
import ServiceCardsSection from "./_components/ServicesCards";
import MortgageCalculator from "./_components/MortageCalculator";
import AOS from "aos";
import "aos/dist/aos.css";

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div className="bg-[#111612] overflow-hidden">
      <div data-aos="fade-up">
        <ServicesVisualImage />
      </div>

      <div data-aos="fade-left">
        <ServiceTitle />
      </div>

      <div data-aos="fade-up">
        <ServiceCardsSection />
      </div>

      <div data-aos="fade-right">
        <MortgageCalculator />
      </div>
    </div>
  );
}

export default Page;
