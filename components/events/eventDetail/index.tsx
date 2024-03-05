import CommonBanner from "@/components/common/banner";
import React from "react";
import Story from "./story";

export default function EventDetail() {
  return (
    <div className="relative text-primary-3">
      <div className="space-y-[100px]">
        <CommonBanner
          subTitle="Event..."
          title="education for poor children"
          imgURL="/image/events/banner.png"
          customWidth="856px"
        />

        <div className="flex justify-center items-center ">
          <div className="w-[1200px] pb-[100px] ">
            <Story />
          </div>
        </div>
      </div>
    </div>
  );
}
