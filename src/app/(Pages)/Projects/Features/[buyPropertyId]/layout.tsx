import React from "react";

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { buyPropertyId: string };
}) {
  console.log(params);
  const title = params.buyPropertyId
    .split("__")[0]
    .replace(/-/g, " ")
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    console.log(title);
  return {
    title: `${title} | Joya Properties`,
  };
}

export default function FeatureProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
