import React from "react";
import Banner from "./banner";
import SingleBlog from "../common/singleBlog";

export default function Causes() {
  return (
    <div className="relative text-primary-3 bg-[#ECF1F0]">
      <div className="space-y-[100px]">
        <Banner />
        <div className="flex justify-center items-center ">
          <div className="w-[1200px] pb-[100px] ">
            <SingleBlog />
          </div>
        </div>
      </div>
    </div>
  );
}
