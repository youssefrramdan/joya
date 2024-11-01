"use client";
import Image from "next/image";
import React from "react";

const properties = [
  {
    id: 1,
    title: "Stunning Joya Villa",
    location: "Palm Jumeirah, Dubai",
    price: "$5,000,000",
    image:
      "/images/home/02-1prop-1.jpg",
  },
  {
    id: 2,
    title: "Sleek Modern Penthouse",
    location: "Downtown Dubai",
    price: "$3,500,000",
    image:
      "/images/home/02-2prop-1.jpg",
  },
  {
    id: 3,
    title: "Opulent Beachfront Mansion",
    location: "Jumeirah Beach Residence",
    price: "$7,200,000",
    image:
      "/images/home/02-3prop-1.jpg",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-[#041d1a] text-[#f1f0ec] border-t border-[#3d6a64] mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title Section */}
        <h2 className="text-6xl font-extrabold text-center mb-16 text-[#f4f3ef] tracking-wide">
          Discover Joya
          <span className="block text-[#3d6a64]">Featured Properties</span>
        </h2>
        
        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-[#111612] rounded-lg overflow-hidden shadow-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out"
            >
              {/* Image Section with Overlay */}
              <div className="relative group">
                <Image
                width={1920}
                height={1280}
                  src={property.image}
                  alt={property.title}
                  className="w-full h-80 object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#354948]/90 to-transparent group-hover:from-[#3d6a64] transition duration-500 ease-in-out">
                  <h3 className="text-3xl font-bold text-[#f4f3ef]">
                    {property.title}
                  </h3>
                  <p className="text-lg font-medium text-[#a0b3b1]">
                    {property.location}
                  </p>
                </div>
              </div>
              
              {/* Property Details */}
              <div className="p-8 space-y-6">
                <p className="text-4xl font-bold text-[#faf8f7]">
                  {property.price}
                </p>
                <button className="w-full bg-[#3d6a64] hover:bg-[#698f8c] text-[#f4f3ef] font-semibold py-3 rounded-full transition duration-300 shadow-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
