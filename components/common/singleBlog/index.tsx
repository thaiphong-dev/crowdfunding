import Image from "next/image";
import React from "react";
import { CustomFont } from "../commonFont";

export default function SingleBlog() {
  return (
    <div className="flex ">
      <Image alt="blog" src="/image/blog/img1.png" width={577} height={464} />
      <div className="w-[623px] h-[464px] bg-white flex justify-center items-center px-[50px] ">
        <div className="space-y-[20px]">
          <p className="text-[15px] font-medium space-x-[10px]">
            <span>March 16, 2022</span> <span>|</span>
            <span className="text-primary-2">Nattasha</span>
          </p>
          <p
            className={`${CustomFont?.shipporiFont?.className} text-[25px] text-primary-3`}
          >
            Why Giving Is Important | Five Reasons to Donate
          </p>
          <p className="text-[20px] text-primary-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>
          <button className="rounded-[34px] w-[200px] h-[65px] border-solid border-2 border-primary-3 text-[18px] font-medium">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
