import Image from "next/image";
import React from "react";
import { CustomFont } from "../commonFont";

interface Props {
  imgURL: string;
  title: string;
  content: string;
}
export default function SingleContentBlock({ imgURL, title, content }: Props) {
  return (
    <div className="flex flex-col  text-center justify-center items-center space-y-[10px] ">
      <Image alt="content image" src={imgURL} width={70} height={70} />
      <p
        className={`${CustomFont?.shipporiFont?.className} text-[25px] text-primary-3 capitalize`}
      >
        {title}
      </p>
      <p className="text-primary-7 text-center text-[20px] leading-[26px]">
        {content}
      </p>
    </div>
  );
}
