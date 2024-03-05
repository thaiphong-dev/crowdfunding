import React from "react";
import Image from "next/image";
import { CustomFont } from "@/components/common/commonFont";

export default function WhatWeDid() {
  const imglist = [
    "/image/weDid1.png",
    "/image/weDid2.png",
    "/image/weDid3.png",
    "/image/weDid4.png",
    "/image/weDid5.png",
    "/image/weDid6.png",
  ];
  return (
    <div className=" grid grid-cols-4">
      <div className="col-span-2 bg-[#202D33] text-white flex justify-center items-center">
        <div className="w-[756px] space-y-[20px]">
          <div>
            <p
              className={`${CustomFont?.sueFont?.className} text-[35px] capitalize leading-9 text-primary-2`}
            >
              what we did
            </p>
            <p
              className={`${CustomFont?.shipporiFont?.className} text-[40px] leading-[48px`}
            >
              Featured Projects
            </p>
            <p className="text-[20px]">
              Lorem Ipsum is simply dummy text of the printin typesetting dummy
              text ever when an unknown printer took a galley of type and
              scrambled a type specimen book.
            </p>
          </div>
          <button className="w-[200px] h-[65px] rounded-[34px] text-[18px] font-semibold uppercase bg-primary-2">
            more project
          </button>
        </div>
      </div>
      {imglist?.map((x, index) => (
        <Image
          alt="we did"
          src={x}
          key={index}
          width={480}
          height={443}
        ></Image>
      ))}
    </div>
  );
}
