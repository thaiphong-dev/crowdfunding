/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CustomFont } from "@/components/common/commonFont";
import SingleBlock from "@/components/common/singleBlock";

interface DataType {
  title?: string;
  content?: string;
  buttonTitle?: string;
  linkTitle?: string;
  linkHref?: string;
  type?: string;
  bgColor?: string;
  textColor?: string;
  titleColor?: string;
  customWidth?: string;
  customHeight?: string;
}

export default function Story() {
  const mockData: DataType[] = [
    {
      title: "Start",
      content: "10:00 AM - 8:00 PM, Everyday",
      bgColor: " bg-primary-2",
      textColor: " text-white",
      titleColor: " text-white",
      customWidth: "295px",
      customHeight: "212px",
    },
    {
      title: "Organizer",
      content: "Nattasha +006544466555 nattasha@gmail.com",
      textColor: " text-white",
      titleColor: " text-white",
      bgColor: " bg-primary-3",
      customWidth: "295px",
      customHeight: "212px",
    },
    {
      title: "Venue",
      content: "Dark Spurt, San Francisco, CA 94528",
      bgColor: " bg-primary-1",
      textColor: " text-white",
      titleColor: " text-white",
      customWidth: "295px",
      customHeight: "212px",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="z-10">
          <div className="absolute top-[10%] left-[15%] w-[754px] text-primary-def"></div>
          <img src="/image/events/detail/banner.png" alt="mainbanner" />
        </div>
        <div className="mt-[-50px]">
          <div className="flex justify-center ">
            {mockData?.map((x, index) => (
              <div key={index}>
                <SingleBlock {...x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
