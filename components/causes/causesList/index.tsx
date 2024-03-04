import SingleCause from "@/components/common/singleCause";
import React from "react";

export default function CauseList() {
  const mockData = [
    {
      imgURL: "/image/causes/cause1.png",
      title: "Big charity: build school for poor children",
      raised: 5,
      goal: 10,
      percent: 50,
    },
    {
      imgURL: "/image/causes/cause2.png",
      title: "First charity activity of this summer today",
      raised: 3,
      goal: 10,
      percent: 30,
    },
    {
      imgURL: "/image/causes/cause3.png",
      title: "Helping the Homeless During the Holidays",
      raised: 5,
      goal: 12,
      percent: 85,
    },
    {
      imgURL: "/image/causes/cause4.png",
      title: "Providing access to safe water, sanitation, and hygiene",
      raised: 8,
      goal: 10,
      percent: 80,
    },
    {
      imgURL: "/image/causes/cause5.png",
      title: "San Francisco is officially the first city to ban plastic",
      raised: 9,
      goal: 10,
      percent: 90,
    },
    {
      imgURL: "/image/causes/cause6.png",
      title: "Big charity: build school for poor children",
      raised: 9,
      goal: 10,
      percent: 90,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-y-[20px]">
      {mockData?.map((x, index) => (
        <SingleCause key={index} {...x} />
      ))}
    </div>
  );
}
