"use client";
import SingleEvent from "@/components/common/singleEvent";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function EventSwiper() {
  const mockData = [
    {
      imgURL: "/image/eventImg.png",
      title: "Big charity: build school for poor children",
      raised: 5,
      goal: 10,
      percent: 50,
    },
    {
      imgURL: "/image/eventImg1.png",
      title: "Big charity: build school for poor children",
      raised: 3,
      goal: 10,
      percent: 30,
    },
    {
      imgURL: "/image/eventImg2.png",
      title: "Big charity: build school for poor children",
      raised: 4,
      goal: 10,
      percent: 40,
    },
    {
      imgURL: "/image/eventImg1.png",
      title: "Big charity: build school for poor children",
      raised: 8,
      goal: 10,
      percent: 80,
    },
    {
      imgURL: "/image/eventImg2.png",
      title: "Big charity: build school for poor children",
      raised: 9,
      goal: 10,
      percent: 90,
    },
  ];
  return (
    <div className="w-[1400px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[750px]"
      >
        {mockData?.map((x, index) => (
          <SwiperSlide key={index}>
            <SingleEvent {...x} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
