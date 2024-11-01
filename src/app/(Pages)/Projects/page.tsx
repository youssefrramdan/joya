"use client";
import React, { useEffect } from "react";
import VisualImage from "./_components/VisualImage";
import PresentationSection from "./_components/PresentationSection";
import FiltersSection from "./_components/FilterSection";
import PropertiesToBuy from "./_components/PropertiesToBuy";
import PropertySlider from "./_components/PropertySlider";
import OffPlan from './_components/OffPlan';
import PropertiesOffPlan from "./_components/PropertiesOffPlan";
import ConnectWithUs from "./_components/ConnectWithUs";
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
        <VisualImage />
      </div>
      <div data-aos="fade-left">
        <PresentationSection />
        <FiltersSection />
      </div>

      <div data-aos="fade-up">
        <PropertiesToBuy />
        <PropertySlider />
      </div>

      {/* <div data-aos="fade-right">
        <PrivateListings />
        <PropertiesSlider />
      </div> */}

      <div data-aos="fade-up">
        <OffPlan />
        <PropertiesOffPlan />
      </div>

      <div data-aos="fade-up">
        <ConnectWithUs />
      </div>
    </div>
  );
}

export default Page;
