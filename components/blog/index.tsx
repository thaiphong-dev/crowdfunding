import React from "react";
import Banner from "./banner";
import SingleBlog from "../common/singleBlog";

export default function Causes() {
  const mockData = [
    {
      date: "August 18, 2022",
      creator: "Minciya",
      title: "We’ve reached 1 million in donations and counting",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      imgURL: "/image/blog/img.png",
    },
    {
      date: "August 18, 2022",
      creator: "Minciya",
      title: "why were going to alaska and why you should too",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      imgURL: "/image/blog/img1.png",
    },
    {
      date: "August 18, 2022",
      creator: "Minciya",
      title:
        "San Francisco is officially the first city to ban plastic bottles",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      imgURL: "/image/blog/img2.png",
    },
    {
      date: "August 18, 2022",
      creator: "Minciya",
      title: "We’ve reached 1 million in donations and counting",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      imgURL: "/image/blog/img3.png",
    },
    {
      date: "August 18, 2022",
      creator: "Minciya",
      title: "Costa Rica is the surprising foodie haven you need to know about",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      imgURL: "/image/blog/img4.png",
    },
  ];
  return (
    <div className="relative text-primary-3 bg-[#ECF1F0]">
      <div className="space-y-[100px]">
        <Banner />
        <div className="flex justify-center items-center ">
          <div className="w-[1200px] pb-[100px] space-y-[50px] ">
            {mockData?.map((x, index) => (
              <SingleBlog key={index} {...x} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
