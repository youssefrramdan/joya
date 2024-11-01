"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-[#faf8f7] mb-6"
      >
        Dashboard JOYA
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-lg text-[#f1f0ec] mb-10"
      >
        Welcome to your dashboard! Here you can manage your projects&lsquo; homepage&lsquo; About Us&lsquo; and Contact Us.
      </motion.p>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#04453d] hover:bg-[#3d6a64] transition-all duration-300 rounded-lg p-6 shadow-xl cursor-pointer transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold text-[#faf8f7] mb-3">Manage Projects</h2>
          <p className="text-[#f0ede6] mb-4">Add&lsquo; edit&lsquo; and delete your projects.</p>
          <Link
            href={"Dashboard/Projects"}
            className="inline-block bg-[#687878] text-[#faf8f7] py-2 px-4 rounded-md hover:bg-[#9da5a4] transition duration-300"
          >
            Go to Projects
          </Link>
        </motion.div>

        {/* About Us Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#04453d] hover:bg-[#3d6a64] transition-all duration-300 rounded-lg p-6 shadow-xl cursor-pointer transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold text-[#faf8f7] mb-3">Manage About Us</h2>
          <p className="text-[#f0ede6] mb-4">Update your company&apos;s information.</p>
          <Link
            href={"Dashboard/About"}
            className="inline-block bg-[#687878] text-[#faf8f7] py-2 px-4 rounded-md hover:bg-[#9da5a4] transition duration-300"
          >
            Go to About Us
          </Link>
        </motion.div>

        {/* Sliders Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#04453d] hover:bg-[#3d6a64] transition-all duration-300 rounded-lg p-6 shadow-xl cursor-pointer transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold text-[#faf8f7] mb-3">Manage Home Sliders</h2>
          <p className="text-[#f0ede6] mb-4">Add or edit homepage sliders.</p>
          <Link
            href={"Dashboard/Home"}
            className="inline-block bg-[#687878] text-[#faf8f7] py-2 px-4 rounded-md hover:bg-[#9da5a4] transition duration-300"
          >
            Go to Home
          </Link>
        </motion.div>

        {/* Contact Us Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-[#04453d] hover:bg-[#3d6a64] transition-all duration-300 rounded-lg p-6 shadow-xl cursor-pointer transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold text-[#faf8f7] mb-3">Manage Contact Us</h2>
          <p className="text-[#f0ede6] mb-4">Update contact details and messages.</p>
          <Link
            href={"Dashboard/Contact"}
            className="inline-block bg-[#687878] text-[#faf8f7] py-2 px-4 rounded-md hover:bg-[#9da5a4] transition duration-300"
          >
            Go to Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
