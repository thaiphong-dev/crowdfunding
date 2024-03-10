/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CustomFont } from "@/components/common/commonFont";

export default function Banner() {
  return (
    <div>
      <div className="z-10">
        <div className="absolute top-[160px] left-[700px] ">
          <div className="relative top-[-25%] w-[663px] h-[393px] bg-white flex justify-center items-center px-[50px] ">
            <div className="space-y-[20px]">
              <p className="text-[15px] font-medium space-x-[10px]">
                <span>March 16, 2022</span> <span>|</span>
                <span className="text-primary-2">Nattasha</span>
              </p>
              <p
                className={`${CustomFont?.shipporiFont?.className} text-[25px] text-primary-3`}
              >
                Why Giving Is Important | Five Reasons to Donate
              </p>
              <p className="text-[20px] text-primary-7">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
              <button className="rounded-[34px] w-[200px] h-[65px] border-solid border-2 border-primary-3 text-[18px] font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>
        <img src="/image/blog/banner.png" alt="mainbanner" />
      </div>
    </div>
  );
}
