"use client";
import SingleEvent from "@/components/common/singleEvent";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, useInView } from "framer-motion";

export default function EventSwiper() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    <div ref={ref} className="w-[1400px] cursor-pointer">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1200}
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[750px]"
      >
        {mockData?.map((x, index) => (
          <SwiperSlide key={index}>
            <SingleEvent {...x} count={index + 1} isInView={isInView} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
