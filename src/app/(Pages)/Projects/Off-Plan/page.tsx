"use client";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Page() {
 


  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div>  </div>
  );
}

export default Page;

export interface RootOffPlan {
  message: string
  offPlanProperties: OffPlanProperty[]
  totalPages: number
}
export interface OffPlanProperty {
  _id: string
  title: string
  slug: string
  price: string
  location: string
  coverImage: string
  alt_text: string
  folderId: string
  coverImage_public_id: string
  card_image: string
  card_image_public_id: string
  images: Image[]
  details: Details
  agent: Agent
  description: string
  addedBy: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Image {
  secure_url: string
  alt_text: string
  public_id: string
  folderId: string
  _id: string
  createdAt: string
  updatedAt: string
}

export interface Details {
  beds: number
  baths: number
  internal_size_sqft: number
  total_size_sqft: number
  parking_spots: number
  _id: string
  createdAt: string
  updatedAt: string
  id: string
}

export interface Agent {
  name: string
  image: string
  phone: string
  whatsapp_link: string
  _id: string
}
