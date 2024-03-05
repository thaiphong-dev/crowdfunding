import React from "react";
import CommonBanner from "../common/banner";
import CauseList from "./causesList";

export default function Causes() {
  return (
    <div className="relative text-primary-3">
      <div className="space-y-[100px]">
        <CommonBanner
          subTitle="Donation"
          title="our causes"
          imgURL="/image/causes/banner.png"
        />
        <div className="flex justify-center items-center bg-primary-4">
          <div className="w-[1200px] pb-[100px] ">
            <CauseList />
          </div>
        </div>
      </div>
    </div>
  );
}
