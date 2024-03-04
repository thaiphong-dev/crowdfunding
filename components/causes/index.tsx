import React from "react";
import CommonBanner from "../common/banner";

export default function Causes() {
  return (
    <div className="relative text-primary-3">
      <div className="space-y-[100px]">
        <CommonBanner
          subTitle="Donation"
          title="our causes"
          imgURL="/image/causes/banner.png"
        />

        <div className="flex flex-col justify-center items-center">
          <div className="w-[1200px] space-y-[100px]"></div>
        </div>
      </div>
    </div>
  );
}
