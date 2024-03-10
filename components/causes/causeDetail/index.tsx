import React from "react";
import DetailContent from "./detail";
import CommonBanner from "@/components/common/banner";
import OtherCauses from "@/components/common/otherCauses";

export default function CauseDetail() {
  return (
    <div className="space-y-[100px]">
      <CommonBanner
        imgURL="/image/causeDetail/banner.png"
        subTitle="Donation"
        title="First charity activity of this
summer today"
      />
      <div className="flex justify-center items-center">
        <div className=" w-[1200px]">
          <DetailContent />
        </div>
      </div>
      <OtherCauses />
    </div>
  );
}
