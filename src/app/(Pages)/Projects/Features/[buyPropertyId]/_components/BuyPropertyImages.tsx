"use client";
import React from "react";
import Image as NextImage from "next/image";  // إعادة التسمية لتجنب التعارض
import ImageSlider from "./ImageSlider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type ImageType = {
  secure_url: string;
  alt_text: string;
};

function BuyPropertyImages({
  images,
}: {
  images: ImageType[];
}) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* First Row of Images */}
        <div className="lg:col-span-1">
          <div className="image mb-5">
            <a href={images[0]?.secure_url ?? ""} data-fancybox="images">
              <NextImage
                src={images[0]?.secure_url ?? ""}
                alt={images[0]?.alt_text ?? "Image"}
                width={500}
                height={500}
                className="img-responsive w-full h-auto object-cover"
              />
            </a>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="image mb-5">
            <a href={images[1]?.secure_url} data-fancybox="images">
              <NextImage
                src={images[1]?.secure_url ?? ""}
                alt={images[1]?.alt_text ?? "Image"}
                width={500}
                height={500}
                className="img-responsive w-full h-auto object-cover"
              />
            </a>
          </div>
        </div>

        {/* Second Row of Images */}
        <div className="lg:col-span-2">
          <div className="image mb-5">
            <a href={images[2]?.secure_url} data-fancybox="images">
              <NextImage
                src={images[2]?.secure_url ?? ""}
                alt={images[2]?.alt_text ?? "Image"}
                width={500}
                height={500}
                className="img-responsive w-full h-auto object-cover"
              />
            </a>
          </div>
        </div>

        {/* Show all photos */}
        <div className="lg:col-span-2">
          <div className="image mb-5">
            <Dialog>
              <DialogTrigger className="readmore text-[#faf8f7] uppercase font-medium text-xs inline-block transition hover:text-[#6f7672]">
                Show all photos
              </DialogTrigger>
              <DialogContent className="p-0 border-none bg-transparent flex justify-center items-center max-w-6xl">
                <div>
                  <ImageSlider images={images} />
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
