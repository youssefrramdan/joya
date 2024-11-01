"use client";
import Hero from "./_components/Hero";
import Presentation from "./_components/PresentationAgency";
import Reviews from "./_components/Reviews";
import Services from "./_components/Services";
import TeamSlider from "./_components/TeamSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AgentSlider from "./_components/AgentSlider";


// import PropertySlider from "./(Pages)/Projects/_components/PropertySlider";
// import PropertiesToBuy from "./(Pages)/Projects/_components/PropertiesToBuy";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div className="min-h-screen overflow-x-hidden overflow-y-hidden">
        <div data-aos="fade-up">
          <Hero />
        </div>
        <div data-aos="fade-left">
          <Presentation />
        </div>
        
        {/* this will be made by the back end  */}
        <div data-aos="fade-up">
          {/* <FeaturedProperties /> */}
          {/* <PropertiesToBuy />
          <PropertySlider /> */}
        </div>

        <div data-aos="fade-right">
          <Services />
        </div>
        <div data-aos="fade-up">
          <Reviews />
        </div>
        <div data-aos="fade-up" >
          <TeamSlider />
        </div>

        <div data-aos="fade-up">
          <AgentSlider />
        </div>
      </div>
    </>
  );
}
