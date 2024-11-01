import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Joya Properties",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
