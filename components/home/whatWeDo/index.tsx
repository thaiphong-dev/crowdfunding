import React from "react";
import { Sue_Ellen_Francisco, Shippori_Mincho } from "next/font/google";
import SingleContentBlock from "@/components/common/singleContentBlock";
const sue_Ellen_Francisco = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
const shippori_Mincho = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});

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
          className={`${sue_Ellen_Francisco.className} text-primary-2 text-[35px] leading-9`}
        >
          What we do
        </p>
        <p
          className={`${shippori_Mincho.className} text-primary-3 text-[40px] leading-[48px]`}
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
