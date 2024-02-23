import SingleBlock from "@/components/common/singleBlock";
import React from "react";
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
}
export default function Index() {
  const mockData: DataType[] = [
    {
      title: "Education",
      content:
        "Below Poverty Line is enchmark used by the government of India  economic disadvantage.",
      buttonTitle: "discover",
      bgColor: " bg-primary-1",
      textColor: " text-[#4A4A4A]",
      titleColor: " text-[#2E4049]",
    },
    {
      title: "Become a Volunteer",
      content: "Below Poverty Line is enchmark used by the government",
      linkTitle: "Join organization",
      linkHref: "/register",
      bgColor: " bg-primary-3",
      textColor: " text-white",
      titleColor: " text-white",
    },
    {
      type: "video",
      content: "https://youtu.be/nm6cfX2nM-I?si=srYQ2YcTbqv6S5sZ",
    },
  ];
  return (
    <div className="flex justify-center ">
      {mockData?.map((x, index) => (
        <div key={index}>
          <SingleBlock {...x} />
        </div>
      ))}
    </div>
  );
}
