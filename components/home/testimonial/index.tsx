"use client";
import React from "react";
import { Sue_Ellen_Francisco, Shippori_Mincho } from "next/font/google";
import SingleCard from "@/components/common/singleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const sue_Ellen_Francisco = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
const shippori_Mincho = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});
export default function Testimonial() {
  const mockData = [
    {
      imgURL: "/image/Photo.png",
      name: "Belli Smith",
      career: "Designer",
      content:
        "Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.",
    },
    {
      imgURL: "/image/Photo1.png",
      name: "Sara Taylor",
      career: "Donator",
      content:
        "Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.",
    },
    {
      imgURL: "/image/Photo.png",
      name: "Belli Smith",
      career: "Designer",
      content:
        "Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.",
    },
    {
      imgURL: "/image/Photo1.png",
      name: "Sara Taylor",
      career: "Donator",
      content:
        "Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.",
    },
  ];
  return (
    <div className="space-y-[50px]">
      <div className="text-center">
        <p
          className={`${sue_Ellen_Francisco.className} text-primary-2 text-[35px] leading-9`}
        >
          Testimonial
        </p>
        <p
          className={`${shippori_Mincho.className} text-primary-3 text-[40px] leading-[48px]`}
        >
          What People Say About Us
        </p>
      </div>

      <div className="w-[1200px]">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[380px]"
        >
          {mockData?.map((x, index) => (
            <SwiperSlide key={index}>
              <SingleCard {...x} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
