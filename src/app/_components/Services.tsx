import React from 'react';
import { Home, Key, Briefcase, Phone } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Exquisite Property Stewardship',
    description:
      'A harmonious blend of care and sophistication, ensuring your Joya estates flourish with grace and elegance.',
  },
  {
    icon: Key,
    title: 'Bespoke Realty Solutions',
    description:
      'Unlock a world of possibilities with tailored real estate offerings, curated exclusively for the discerning buyer.',
  },
  {
    icon: Briefcase,
    title: 'Legacy Wealth Guidance',
    description:
      'Strategic insights to cultivate your wealth and nurture a legacy through premium real estate investments.',
  },
  {
    icon: Phone,
    title: 'Eternal Client Care',
    description:
      'Day or night, our dedicated support team stands by your side, ensuring your peace of mind is never interrupted.',
  },
];

const Services = () => {
  return (
    <section className="py-16  text-[#EFECE6]  mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-[#f0ede6]">
          Our Signature Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#111810] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center relative group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-[#3d6a64] rounded-full flex items-center justify-center mb-6 group-hover:bg-opacity-90 transition duration-300">
                <service.icon className="text-[#EFECE6]" size={40} />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-[##faf8f7] mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-lg text-[#f0ede6] group-hover:text-[#a0b3b1] transition duration-300">
                {service.description}
              </p>
              
              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3d6a64] opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
