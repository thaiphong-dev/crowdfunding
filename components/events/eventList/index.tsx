import SingleEventCard from "@/components/common/singleEventCard";
import React from "react";

export default function EventList() {
  const mockData = [
    {
      imgURL: "/image/events/event1.png",
      title: "Education for Poor Children",
      content:
        "There are many varieations of passages of injected Lorem Ipsum available,but the majority have.",
      day: "11",
      month: "june",
      creator: "Phong, Tu",
    },
    {
      imgURL: "/image/events/event2.png",
      title: "Healthy Food for Growing",
      content:
        "There are many varieations of passages of injected Lorem Ipsum available,but the majority have.",
      day: "15",
      month: "june",
      creator: "Phong, Tu",
    },
    {
      imgURL: "/image/events/event3.png",
      title: "Cloth Comming",
      content:
        "There are many varieations of passages of injected Lorem Ipsum available,but the majority have.",
      day: "18",
      month: "june",
      creator: "Phong, Tu",
    },
    {
      imgURL: "/image/events/event4.png",
      title: "Love to Help Awarness Event",
      content:
        "There are many varieations of passages of injected Lorem Ipsum available,but the majority have.",
      day: "30",
      month: "june",
      creator: "Phong, Tu",
    },
    {
      imgURL: "/image/events/event5.png",
      title: "Raise Your Hands Against Cancer",
      content:
        "There are many varieations of passages of injected Lorem Ipsum available,but the majority have.",
      day: "23",
      month: "july",
      creator: "Phong, Tu",
    },
    {
      imgURL: "/image/events/event6.png",
      title: "Compaign: Fund Raising for Water",
      content:
        "There are many varieations of passages of injected Lorem Ipsum available,but the majority have.",
      day: "15",
      month: "august",
      creator: "Phong, Tu",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-y-[20px]">
      {mockData?.map((x, index) => (
        <SingleEventCard key={index} {...x} />
      ))}
    </div>
  );
}
