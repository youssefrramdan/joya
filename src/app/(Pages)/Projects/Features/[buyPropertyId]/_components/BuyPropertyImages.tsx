"use client";
import React from "react";
import { Image } from "../page";
import ImageSlider from "./ImageSlider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function BuyPropertyImages({
  images,
}: {
  images: Image[];
}) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* First Row of Images */}
        <div className="lg:col-span-1">
          <div className="image mb-5">
            <a href="/upload/img/DSC05164Edit.jpg" data-fancybox="images">
              <img
                src={images[0]?.secure_url ?? ""}
                alt="DSC05164Edit"
                className="img-responsive w-full h-auto object-cover"
              />
            </a>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="image mb-5">
            <a href="/upload/img/DSC05229Edit.jpg" data-fancybox="images">
              <img
                src={images[1]?.secure_url}
                alt="DSC05229Edit"
                className="img-responsive w-full h-auto object-cover"
              />
            </a>
          </div>
        </div>

        {/* Second Row of Images */}
        <div className=" lg:col-span-2">
          <div className="image mb-5">
            <a href="/upload/img/DSC05239Edit.jpg" data-fancybox="images">
              <img
                src={images[2]?.secure_url}
                alt="DSC05239Edit"
                className="img-responsive w-full h-auto object-cover"
              />
            </a>
          </div>
        </div>

        {/* Show all photos */}
        <div className="lg:col-span-2">
          <div className="image mb-5">
            {/* <button
              onClick={() => setOpenSlider(true)}
              className="readmore text-[#faf8f7] uppercase font-medium text-xs inline-block transition hover:text-[#041d1a]"
              data-fancybox="images"
            >
              Show all photos
            </button> */}

            <Dialog >
              <DialogTrigger className="readmore text-[#faf8f7] uppercase font-medium text-xs inline-block transition hover:text-[#6f7672]">
                Show all photos
              </DialogTrigger>
              <DialogContent className="p-0 border-none bg-transparent flex justify-center items-center max-w-6xl">
                <div className="">
                <ImageSlider images={images}  />

                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyPropertyImages;
