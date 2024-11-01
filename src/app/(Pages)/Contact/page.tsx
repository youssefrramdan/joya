"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ContactVisualImage from "./_components/ContactVisualImage";
import "aos/dist/aos.css";
import AOS from "aos";

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <section className="py-16  text-[#EFECE6]  mt-10">
      <div className="container mx-auto px-6 lg:px-12">

      <div className="overflow-x-hidden" data-aos="fade-up">
        <ContactVisualImage />
      </div>
      <div className="block contacts py-12 bg-[#111612] text-white pt-32 bb-16 overflow-x-hidden">
        <div className="container mx-auto ">
          <div className="text-center">
            <motion.div
              className="line1"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h2 className="text-5xl lg:text-[90px] font-light leading-none">
                Contact us
              </h2>
            </motion.div>
            <motion.div
              className="line2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              <h2 className="text-4xl lg:text-[80px] font-light leading-none text-[#9da5a4] mt-6">
                <span className="block w-40 h-1 bg-[#9da5a4] mb-4 mx-auto"></span>
                For Joya Properties
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12  px-4 lg:px-0">
            <motion.div
              className="form"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <p className="text-xl uppercase text-[#9da5a4] mb-6">
                What Can We Do For You?
              </p>
              <div className="tabs mb-8 ">
                <ul className="flex  space-y-6 md:space-y-0 md:space-x-2 md:flex-row flex-col">
                  <li>
                    <a
                      href="#"
                      className="tab-contact p-2 border border-[#698f8c] hover:border-[#a0b3b1] rounded-md"
                    >
                      Buy with us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tab-contact p-2 border border-[#698f8c] hover:border-[#a0b3b1] rounded-md"
                    >
                      Sell with us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tab-contact p-2 border border-[#698f8c] hover:border-[#a0b3b1] rounded-md"
                    >
                      Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tab-contact p-2 border border-[#698f8c] hover:border-[#a0b3b1] rounded-md"
                    >
                      Other
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                />
                <input
                  type="text"
                  placeholder="Your Phone number"
                  className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                />
                <input
                  type="text"
                  placeholder="Your Location (Country of residence)"
                  className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                />
              </div>

              <p className="text-xl uppercase text-[#9da5a4] mt-10 mb-6">
                Your Criteria
              </p>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Location"
                  className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                />
                <input
                  type="text"
                  placeholder="Your Budget"
                  className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Your Requirements"
                className="p-4 mt-6 w-full bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
              ></textarea>

              <button className="mt-6 px-6 py-3 bg-[#698f8c] hover:bg-[#a0b3b1] text-white rounded-md font-medium">
                Send Request
              </button>
            </motion.div>

            <motion.div
              className="side"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="text text-[#9da5a4]">
                <p className="mb-6">
                  At Joya Properties, we offer a bespoke service built on attention
                  to detail and discretion for discerning clients.
                </p>
                <p className="mb-6">
                  We meticulously choose brokers with exceptional success in the
                  Joya market. Currently, we are not accepting applications to
                  join the agency.
                </p>
              </div>
              <div className="whatsapp mt-6">
                <a
                  href="https://web.whatsapp.com/send?phone=+9710585734777"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center space-x-4"
                >
                  <span className="circle w-10 h-10 flex items-center justify-center bg-[#698f8c] rounded-full text-white">
                    <i className="fab fa-whatsapp"></i>
                  </span>
                  <span className="text text-[#9da5a4]">Send us a message</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
      </section>
  
  );
}

export default Page;
