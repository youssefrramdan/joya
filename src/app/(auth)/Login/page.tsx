"use client";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <div className="bg-[#111612] text-[#f1f0ec] flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
        <div className="relative mt-12 w-full max-w-lg sm:mt-10">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-[#3d6a64] to-transparent"></div>
          <div className="mx-5 border border-[#354948] shadow-lg shadow-[#354948]/20 rounded-lg sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6 bg-[#111612] rounded-lg">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter text-[#f0ede6]">
                Login
              </h3>
              <p className="mt-1.5 text-sm font-medium text-[#9da5a4]">
                Welcome back, enter your credentials to continue.
              </p>
            </div>
            <div className="p-6 pt-0">
              <form>
                <div>
                  <div>
                    <div className="group relative rounded-lg border border-[#687878] focus-within:border-[#3d6a64] px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-[#698f8c]/30">
                      <div className="flex justify-between">
                        <label className="text-xs font-medium text-[#9da5a4] group-focus-within:text-[#faf8f7]">
                          Email
                        </label>
                       
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="block w-full border-0 bg-transparent p-0 text-sm placeholder-[#9da5a4] focus:outline-none focus:ring-0 text-[#f0ede6]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border border-[#687878] focus-within:border-[#3d6a64] px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-[#698f8c]/30">
                      <div className="flex justify-between">
                        <label className="text-xs font-medium text-[#9da5a4] group-focus-within:text-[#faf8f7]">
                          Password
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="password"
                          name="password"
                          className="block w-full border-0 bg-transparent p-0 text-sm placeholder-[#9da5a4] focus:outline-none focus:ring-0 text-[#f1f0ec]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className=" flex items-center justify-center pt-8">
               
                  <Link
                  href={"/Admin/Dashboard"}
                    className="font-semibold hover:bg-[#3d6a64] hover:text-[#faf8f7] transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#698f8c] bg-[#f0ede6] text-[#111612] h-10 px-6 py-2"
                  >
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
