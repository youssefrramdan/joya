import React from "react";
import { motion } from "framer-motion";
import { OffPlanProperty } from "../page";
import Link from "next/link";
// const properties = [
//   {
//     id: 1,
//     name: "Burj Vista Penthouse",
//     location: "Downtown",
//     price: "AED 65,000,000",
//     image: "/images/projects/04-1-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/321-burj-vista-penthouse/",
//   },
//   {
//     id: 2,
//     name: "Address Villas",
//     location: "Dubai Hills",
//     price: "AED 28,500,000",
//     image: "/images/projects/04-2-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/339-address-hillcrest-villas/",
//   },
//   {
//     id: 3,
//     name: "Lamborghini Villas",
//     location: "Dubai Hills",
//     price: "AED 62,500,000",
//     image: "/images/projects/04-3-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/341-lamborghini-villas/",
//   },
//   {
//     id: 4,
//     name: "Four Seasons",
//     location: "Dubai Canal",
//     price: "AED 38,500,000",
//     image: "/images/projects/04-4-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/281-four-seasons-2-bed/",
//   },
//   {
//     id: 5,
//     name: "Vela Residences",
//     location: "Dubai Canal",
//     price: "AED 38,500,000",
//     image: "/images/projects/04-5-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/281-four-seasons-2-bed/",
//   },
//   {
//     id: 6,
//     name: "Burj Vista Penthouse",
//     location: "Downtown",
//     price: "AED 65,000,000",
//     image: "/images/projects/04-1-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/321-burj-vista-penthouse/",
//   },
//   {
//     id: 7,
//     name: "Address Villas",
//     location: "Dubai Hills",
//     price: "AED 28,500,000",
//     image: "/images/projects/04-2-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/339-address-hillcrest-villas/",
//   },
//   {
//     id: 8,
//     name: "Lamborghini Villas",
//     location: "Dubai Hills",
//     price: "AED 62,500,000",
//     image: "/images/projects/04-3-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/341-lamborghini-villas/",
//   },
//   {
//     id: 9,
//     name: "Four Seasons",
//     location: "Dubai Canal",
//     price: "AED 38,500,000",
//     image: "/images/projects/04-4-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/281-four-seasons-2-bed/",
//   },
//   {
//     id: 10,
//     name: "Vela Residences",
//     location: "Dubai Canal",
//     price: "AED 38,500,000",
//     image: "/images/projects/04-5-offplan.png",
//     link: "https://www.joyaproperties.ae/en/item/281-four-seasons-2-bed/",
//   },
// ];

const OffPlanProperties = ({
  offPlanProperties,
}: {
  offPlanProperties: OffPlanProperty[];
}) => {
  console.log(offPlanProperties);
  return (
    <div className="block properties page pt-0">
      <div className="px-4 md:px-[60px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {offPlanProperties&& offPlanProperties.map((property) => (
            <motion.div
              key={property._id}
              className="col-lg-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="item relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Clickable Link */}
                <div className="link absolute inset-0 z-10">
                  <Link href={"Off-Plan/" + property.slug + "__" + property._id}></Link>
                </div>

                {/* Image with animation */}
                <motion.div
                  className="image grayscale-[50%] filter mb-0"
                  whileHover={{ filter: "grayscale(0%)" }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    width={1000}
                    height={667}
                    src={property.card_image}
                    alt={property.title}
                    className="w-full h-[350px] md:h-[580px] object-cover rounded-2xl"
                  />
                </motion.div>

                {/* Text Content with smooth entry */}
                <motion.div
                  className="text w-full absolute bottom-[-56px] left-0 p-8 z-20 transition-all duration-300 ease-in-out hover:bottom-0 bg-gradient-to-t from-black to-transparent"
                  initial={{ opacity: 0, translateY: 20 }}
                  whileHover={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="name">
                    <h2 className="text-2xl font-light text-white">
                      {property.title}
                    </h2>
                  </div>
                  <div className="subtitle mt-2">
                    <h3 className="text-sm uppercase text-gray-300">
                      {property.location ?? property.alt_text.split("--")[1]}
                    </h3>
                  </div>
                  <div className="price absolute right-8 top-14 text-white text-base font-light">
                    {property.price}
                  </div>
                  <div className="action mt-6">
                    <Link
                      href={"Off-Plan/" + property.slug + "__" + property._id}
                      className="inline-block mt-3 px-4 py-2 bg-[#111612] hover:bg-[#404740] transition-colors duration-200 text-sm font-semibold text-white"
                    >
                      Find out more
                    </Link>
                  </div>
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffPlanProperties;
