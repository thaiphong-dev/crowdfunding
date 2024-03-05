import React from "react";
import SingleContentBlock from "@/components/common/singleContentBlock";
import { CustomFont } from "@/components/common/commonFont";

export default function WhatWeDo() {
  const mockData = [
    {
      imgURL: "/image/icon.png",
      title: "Medicine Help",
      content:
        "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
      imgURL: "/image/Oil Massage.png",
      title: "Water Delivery",
      content:
        "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
      imgURL: "/image/Day Care.png",
      title: "We Care About",
      content:
        "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
      imgURL: "/image/Food Bar.png",
      title: "Food Delivery",
      content:
        "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
      imgURL: "/image/Geography.png",
      title: "Spread The World",
      content:
        "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
      imgURL: "/image/Contract.png",
      title: "Learn Education",
      content:
        "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
  ];
  return (
    <div className="w-[1200px]">
      <div className="text-center pb-[50px]">
        <p
          className={`${CustomFont?.sueFont?.className} text-primary-2 text-[35px] leading-9`}
        >
          What we do
        </p>
        <p
          className={`${CustomFont?.shipporiFont?.className} text-primary-3 text-[40px] leading-[48px]`}
        >
          We do it for People in Need
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-[80px]">
        {mockData?.map((x, index) => (
          <SingleContentBlock key={index} {...x} />
        ))}
      </div>
    </div>
  );
}
