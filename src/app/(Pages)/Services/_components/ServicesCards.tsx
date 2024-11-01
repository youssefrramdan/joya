"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import image1 from "../../../../images/Services Images 330x220/2.png"
import image2 from "../../../../images/Services Images 330x220/1.png"
import image3 from "../../../../images/Services Images 330x220/3.png"
import image4 from "../../../../images/Services Images 330x220/4.png"
import image5 from "../../../../images/Services Images 330x220/5.png"
import image6 from "../../../../images/Services Images 330x220/6.png"
import image7 from "../../../../images/Services Images 330x220/7.png"
import image8 from "../../../../images/Services Images 330x220/8.png"

const ServiceCardsSection = () => {
  const cards = [
    {
      title: "Real estate buying & selling",
      img:image3
    },
    {
      title: "Property rental ",
      img: image1
    },
    {
      title: "Commercial",
      img: image6
    },
    {
      title: "Property management",
      img: image4
    },
    {
      title: "Holiday home – short term rental",
      img: image5
    },
    {
      title: "Snagging",
      img:image2
    },
    {
      title: "Conveyancing",
      img: image7
    },
    {
      title: "Golden visa",
      img: image8
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="landing-card-wrapper py-12"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card-item group"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <div >
              <motion.div
                className="image-section relative overflow-hidden"
                whileHover="hover"
              >
                <Image
                  width={330}
                  height={220}
                  className="w-full lg:w-[330px] h-[220px] object-cover rounded-lg transition-transform transform group-hover:scale-110 duration-500"
                  src={card.img}
                  alt={card.title}
                />
                <motion.div
                  className="image-overlay absolute inset-0 bg-[#111612] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-white text-2xl">↑</span>
                </motion.div>
              </motion.div>
            </div>
            <motion.div className="card-item-content mt-4" whileHover={{ y: -5 }}>
              <div>
                <h3 className="text-lg text-[#faf8f7] font-semibold group-hover:text-[#3d6a64] transition-colors duration-300">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCardsSection;
