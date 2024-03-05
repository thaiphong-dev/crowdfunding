/* eslint-disable @next/next/no-img-element */
import React from "react";
import CommonContentBlock from "../commonContentBlock";
import { CustomFont } from "@/components/common/commonFont";

export default function Banner() {
  return (
    <div className="relative">
      <div className="z-10">
        <div className="absolute top-[10%] left-[15%] w-[754px] text-primary-def">
          <p className={`${CustomFont?.sueFont?.className} text-banner-sub`}>
            Need help...
          </p>
          <p
            className={`${CustomFont?.shipporiFont?.className} text-banner-main capitalize`}
          >
            being life saver for someone
          </p>
          <div className="pt-[10%]">
            <button className="bg-primary-2 uppercase  text-primary-def font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-[15px]">
              donate
            </button>
            <button className="bg-white uppercase text-primary-3 font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
              discover
            </button>
          </div>
        </div>
        <img src="/image/mainBanner.png" alt="mainbanner" />
      </div>
      <div className="mt-[-5%]">
        <CommonContentBlock />
      </div>
    </div>
  );
}
