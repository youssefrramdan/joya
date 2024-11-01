"use client";
import React, { useEffect, useState } from "react";
import BuyPropertyVisualImage from "./_components/BuyPropertyVisualImage";
import BuyPropertyInfo from "./_components/BuyPropertyInfo";
import BuyPropertyAgent from "./_components/BuyPropertyAgent";
import BuyPropertyText from "./_components/BuyPropertyText";
import BuyPropertyLocation from "./_components/BuyPropertyLocation";
// import BuyPropertyLinks from "./_components/BuyPropertyLinks";
import BuyPropertySimilarProperties from "./_components/BuyPropertySimilarProperties";
import AOS from "aos";
import "aos/dist/aos.css";
import PropertyGallery from "./_components/PropertyGallery";
import { NextSeo } from "next-seo";

function Page({
  params: { buyPropertyId },
}: {
  params: { buyPropertyId: string };
}) {
  console.log({ buyPropertyId });
  const [featureProperty, setFeatureProperty] = useState<BuyPropertyI | null>(
    null
  );

  async function getFeatureProperties() {
    const prodId = buyPropertyId.split("__")[1];
    const data = await fetch(
      `https://joya-backend-deploy-test.vercel.app/property/get-property-by-id?buyPropertyId=${prodId}`,
      {
        cache: "force-cache",
      }
    );
    const res = await data.json();
    console.log(res);
    setFeatureProperty(res.buyProperty);
  }

  useEffect(() => {
    getFeatureProperties();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <NextSeo
        title={featureProperty?.title  + " | Joya Properties"}
        description="A short description goes here."
      />

      <div className="bg-[#111612] overflow-hidden ">
        <div data-aos="fade-up">
          <BuyPropertyVisualImage
            location={featureProperty?.location ?? ""}
            price={featureProperty?.price ?? 0}
            visualImage={featureProperty?.coverImage ?? ""}
          />
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-[80px]">
            <div data-aos="fade-left">
              <PropertyGallery images={featureProperty?.images ?? []} />
            </div>
            <div>
              <div data-aos="fade-up">
                <BuyPropertyInfo info={featureProperty?.details} />
              </div>
              <div data-aos="fade-right">
                <BuyPropertyAgent />
                {/* <BuyPropertyLinks /> */}
              </div>
              <div data-aos="fade-up">
                <BuyPropertyText
                  description={featureProperty?.description ?? ""}
                />
              </div>
            </div>
          </div>

          <div data-aos="fade-up">
            <BuyPropertyLocation />
          </div>
          <div data-aos="fade-up">
            <BuyPropertySimilarProperties />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
export interface BuyPropertyI {
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
