import React from "react";
import CommonBanner from "../common/banner";
import Story from "./story";
import GoalAndMission from "./goalAndMission";
import Team from "../common/team";
import Subcribe from "./subcribe";

export default function AboutUsPage() {
  return (
    <div className="relative text-primary-3">
      <div className="space-y-[100px]">
        <CommonBanner
          subTitle="what we do..."
          title="about our organization"
          imgURL="/image/about/banner.png"
        />

        <div className="flex flex-col justify-center items-center">
          <div className="w-[1200px] space-y-[100px]">
            <Story />
            <GoalAndMission />
          </div>
        </div>
        <Team />
        <Subcribe />
      </div>
    </div>
  );
}
