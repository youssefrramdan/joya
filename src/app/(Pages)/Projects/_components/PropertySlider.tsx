// components/PropertySlider.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const PropertySlider = () => {
  // const properties = [
  //   {
  //     id: 1,
  //     name: "The Address Penthouse",
  //     subtitle: "Downtown",
  //     price: "AED 90,000,000",
  //     image: "/images/projects/02-1-prop.png",
  //     link: "https://www.joyaproperties.ae/en/item/303-address-boulevard-penthouse/",
  //   },
  //   {
  //     id: 2,
  //     name: "Vida Penthouse",
  //     subtitle: "Downtown",
  //     price: "AED 28,000,000",
  //     image: "/images/projects/02-2prop.png",
  //     link: "https://www.joyaproperties.ae/en/item/309-vida-penthouse/",
  //   },
  //   {
  //     id: 3,
  //     name: "joya Custom Built Villa",
  //     subtitle: "Pearl Jumeirah",
  //     price: "Request Price",
  //     image: "/images/projects/02-3prop.png",
  //     link: "https://www.joyaproperties.ae/en/item/359-joya-custom-built-villa/",
  //   },
  //   {
  //     id: 4,
  //     name: "Villa Allegra",
  //     subtitle: "Palm Jumeirah",
  //     price: "Request Price",
  //     image: "/images/projects/02-4prop.png",
  //     link: "https://www.joyaproperties.ae/en/item/351-villa-allegra/",
  //   },
  // ];

  const [properties, setProperties] = useState<Property[] >([]);
  useEffect(() => {
    async function fetchProperties() {
      const data = await fetch(
        "https://joya-backend-deploy-test.vercel.app/property/get-all-properties"
      );
      const res: Resp = await data.json();
      setProperties(res.properties);
    }
    fetchProperties();
  }, []);

  // properties = res.properties;
  return (
    <div className="w-full  py-10 px-1 md:pl-[60px]">
      <Swiper
        spaceBetween={40}
        slidesPerView={2.25}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="properties-slider"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.75,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.25,
            spaceBetween: 40,
          },
        }}
      >
        {properties.map((property) => (
          <SwiperSlide
            key={property._id}
            className="relative overflow-hidden cursor-pointer "
          >
            <Link href={"/Projects/Features/" + property.slug + "__" + property._id} className="absolute inset-0 z-10"></Link>
            <div>
              <img
                width={1000}
                height={667}
                src={property.card_image}
                alt={property.title}
                className="w-full h-[530px] object-cover grayscale-[0.5] transition-all duration-300 hover:grayscale-0 rounded-2xl  "
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111612] to-transparent z-10"></div>
            <div className="absolute -bottom-3 left-0 p-6 text-[#faf8f7] z-20 transition-all duration-300 translate-y-10 hover:translate-y-0 w-full">
              <h2 className="text-2xl font-bold">{property.title}</h2>
              <div className="flex justify-between items-center w-full">
                <h3 className="text-lg">{property.location}</h3>
                <p className="text-md">{property.price > 0 ? "AED "+property.price.toLocaleString(): "Requested Price"}</p>
              </div>
              <Link
                href={"/Projects/Features/" + property.slug + "__" + property._id}
                className="inline-block mt-3 px-4 py-2 bg-[#111612] hover:bg-[#404740] transition-colors duration-200 text-sm font-semibold"
              >
                Find out more
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertySlider;

export interface Resp {
  message: string;
  properties: Property[];
}

export interface Property {
  _id: string;
  title: string;
  slug: string;
  location: string;
  price: number;
  coverImage: string;
  alt_text: string;
  folderId: string;
  coverImage_public_id: string;
  card_image: string;
  card_image_public_id: string;
  images: Image[];
  details: Details;
  agent: Agent;
  description: string;
  addedBy: string;
  __v: number;
}

export interface Image {
  secure_url: string;
  alt_text: string;
  public_id: string;
  folderId: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Details {
  beds: number;
  baths: number;
  internal_size_sqft: number;
  total_size_sqft: number;
  parking_spots: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Agent {
  name: string;
  image: string;
  phone: string;
  whatsapp_link: string;
  _id: string;
}