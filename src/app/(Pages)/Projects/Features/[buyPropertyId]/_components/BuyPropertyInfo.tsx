import React from "react";
import Image from "next/image";
import { Details } from "../page";

function BuyPropertyInfo({ info }: { info: Details | undefined }) {
  return (
    <div className="text-[#f1f0ec] py-10 mb-10 px-4 border-b border-[#041d1a]">
      <div className="container mx-auto">
        <ul className="flex flex-wrap flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 md:flex-nowrap">
          {(info?.beds || -1) > 0 && (
            <li className="flex flex-col items-center">
              <div className="icon mb-2">
                <Image
                  src="/images/projects/02-features/001-info/icon-bed.png"
                  alt="Beds"
                  width={30}
                  height={30}
                  className="bg-[rgb(153, 153, 153)]"
                />
              </div>
              <div className="value text-lg font-semibold">
                {info?.beds} Beds
              </div>
            </li>
          )}

          {(info?.baths || -1) > 0 && (
            <li className="flex flex-col items-center">
              <div className="icon mb-2">
                <Image
                  src="/images/projects/02-features/001-info/icon-bath.png"
                  alt="Baths"
                  width={30}
                  height={30}
                />
              </div>
              <div className="value text-lg font-semibold">
                {info?.baths} Baths
              </div>
            </li>
          )}

          {(info?.internal_size_sqft || -1) > 0 && (
            <li className="flex flex-col items-center">
              <div className="icon mb-2">
                <Image
                  src="/images/projects/02-features/001-info/icon-internalsize.png"
                  alt="Internal Size"
                  width={30}
                  height={30}
                />
              </div>
              <div className="value text-lg font-semibold">
                {info?.internal_size_sqft.toLocaleString()} Sq. ft.
              </div>
            </li>
          )}

          {(info?.total_size_sqft || -1) > 0 && (
            <li className="flex flex-col items-center">
              <div className="icon mb-2">
                <Image
                  src="/images/projects/02-features/001-info/icon-area.png"
                  alt="Area"
                  width={30}
                  height={30}
                />
              </div>
              <div className="value text-lg font-semibold">
                {info?.total_size_sqft.toLocaleString()} Sq. ft.
              </div>
            </li>
          )}

          {(info?.parking_spots || -1) > 0 && (
            <li className="flex flex-col items-center">
              <div className="icon mb-2">
                <Image
                  src="/images/projects/02-features/001-info/icon-cars.png"
                  alt="Cars"
                  width={30}
                  height={30}
                />
              </div>
              <div className="value text-lg font-semibold">
                {info?.parking_spots} Cars
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default BuyPropertyInfo;
