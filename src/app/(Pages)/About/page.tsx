"use client";
import AgentSlider from "@/app/_components/AgentSlider";
import React from "react";
import HeroAbout from "./_components/HeroAbout";
import KeyStats from "./_components/KeyState";
import Founder from "./_components/Founder";
import WhyJoya from "./_components/WhyJora";
import OurVision from "./_components/OurVision";
import OurMission from "./_components/OurMision";
import PeopleApproach from "./_components/PeopleApproach";
import EducationTechnology from "./_components/EducationTechnology";
import CommercialDominance from "./_components/CommercialDominance";
import OurValues from "./_components/OurValues";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh(); // This refreshes animations on scroll up/down
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 

  return (
    <div className="bg-[#111612] text-white pt-28 overflow-x-hidden">
      {/* Hero About  */}
      <div data-aos="fade-up">
        <HeroAbout />
      </div>

      {/* Key Stats Section */}
      <div data-aos="fade-left">
        <KeyStats />
      </div>
      <hr className="w-3/4 mx-auto mt-10 border-[#354948]" />

      {/* Founder Section */}
      <div data-aos="fade-up">
        <Founder />
      </div>

      {/* Why Joya Section */}
      <div data-aos="fade-right">
        <WhyJoya />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <OurVision />
      </div>
      {/* Our Vision Section */}

      <div data-aos="fade-down" data-aos-delay="200">
        <OurMission />
      </div>
      {/* Our Mission Section */}

      {/* People-Centric Approach Section */}
      <div data-aos="fade-left" data-aos-delay="100">
        <PeopleApproach />
      </div>

      {/* Education and Technology Prowess Section */}

      <div data-aos="fade-up">
        <EducationTechnology />
      </div>

      {/* Commercial Dominance Section */}
      <div data-aos="fade-right">
        <CommercialDominance />
        <hr className="w-3/4 mx-auto mt-10 border-[#354948]" />
      </div>

      {/* Our Values Section */}

      <div data-aos="fade-up">
        <OurValues />
      </div>

      {/* Our Agents Section */}
      <div
        className="w-full bg-no-repeat bg-cover bg-fixed min-h-[400px] md:min-h-[550px]"
        style={{
          backgroundImage: "url('https://i.imgur.com/mAyyDeA.jpeg')",
        }}
      ></div>

      <div data-aos="fade-left">
        <div>
          <AgentSlider />
        </div>
      </div>

      {/* Footer Background Image */}
    </div>
  );
}

export default Page;
