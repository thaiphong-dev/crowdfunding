"use client";
import React from "react";

import SingleCard from "@/components/common/singleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { CustomFont } from "@/components/common/commonFont";

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
  const mockListImg1 = [
    {
      src: "/image/1.png",
      width: 239,
    },
    {
      src: "/image/2.png",
      width: 212,
    },
    {
      src: "/image/3.png",
      width: 178,
    },
    {
      src: "/image/4.png",
      width: 300,
    },
  ];
  const mockListImg2 = [
    {
      src: "/image/01.svg",
      width: 137,
      height: 44,
    },
    {
      src: "/image/02.svg",
      width: 106,
      height: 106,
    },
    {
      src: "/image/03.svg",
      width: 170,
      height: 44,
    },
    {
      src: "/image/04.svg",
      width: 150,
      height: 45,
    },
    {
      src: "/image/05.svg",
      width: 122,
      height: 49,
    },
  ];
  return (
    <div className="space-y-[50px]">
      <div className="text-center">
        <p
          className={`${CustomFont?.sueFont?.className} text-primary-2 text-[35px] leading-9`}
        >
          Testimonial
        </p>
        <p
          className={`${CustomFont?.shipporiFont?.className} text-primary-3 text-[40px] leading-[48px]`}
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
      <div className="flex justify-between">
        {mockListImg1?.map((x, index) => (
          <Image
            key={index}
            alt="img"
            src={x.src}
            width={x.width}
            height={134}
          />
        ))}
      </div>
      <div className="flex-start flex h-0.5 w-full overflow-hidden rounded-full bg-[#C5CECC] font-sans text-xs font-medium my-[20px]"></div>
      <div className="flex justify-between">
        {mockListImg2?.map((x, index) => (
          <Image
            key={index}
            alt="img"
            src={x.src}
            width={x.width}
            height={x.height}
          />
        ))}
      </div>
    </div>
  );
}
