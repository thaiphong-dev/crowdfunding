import Image from "next/image";
import React from "react";
import { CustomFont } from "../commonFont";
interface Props {
  date: string;
  creator: string;
  title: string;
  content: string;
  imgURL: string;
}
export default function SingleBlog({
  date,
  creator,
  title,
  content,
  imgURL,
}: Props) {
  return (
    <div className="flex ">
      <Image alt="blog" src={imgURL} width={577} height={464} />
      <div className="w-[623px] h-[464px] bg-white flex justify-center items-center px-[50px] ">
        <div className="space-y-[20px]">
          <p className="text-[15px] font-medium space-x-[10px]">
            <span>{date}</span> <span>|</span>
            <span className="text-primary-2">{creator}</span>
          </p>
          <p
            className={`${CustomFont?.shipporiFont?.className} text-[25px] text-primary-3`}
          >
            {title}
          </p>
          <p className="text-[20px] text-primary-7">{content}</p>
          <button className="rounded-[34px] w-[200px] h-[65px] border-solid border-2 border-primary-3 text-[18px] font-medium">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
