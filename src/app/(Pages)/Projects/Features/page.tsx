import React from "react";
import FeaturesVisualImage from "./_components/FeaturesVisualImage";
import FeatureTitle from "./_components/FeaturesTitle";
import FeaturesProperties from "./_components/FeaturesProperties";

async function page() {
  async function getFeatureProperties() {
    const data = await fetch(
      "https://joya-backend-deploy-test.vercel.app/property/get-all-properties",
      {
        cache: "force-cache",
      }
    );
    const res = await data.json();
    return res.properties;
  }
  const featureProperties = await getFeatureProperties();

  return (
    <div className="bg-[#111612] overflow-hidden">
      <div>
        <FeaturesVisualImage />
      </div>

      <div>
        <FeatureTitle />
      </div>

      <div>
        <FeaturesProperties featureProperties={featureProperties} />
      </div>
    </div>
  );
}

export default page;
