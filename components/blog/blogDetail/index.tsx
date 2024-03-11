import CommonBanner from "@/components/common/banner";
import React from "react";
import Content from "./content";

export default function BlogDetail() {
  return (
    <div className="space-y-[100px]">
      <CommonBanner
        subTitle="July 05, 2022 | Nattasha"
        title="We’ve reached 1 million in donations & counting"
        imgURL="/image/blogDetail/banner.png"
      />
      <div className="flex justify-center items-center">
        <div className=" w-[866px]">
          <Content />
        </div>
      </div>
    </div>
  );
}
