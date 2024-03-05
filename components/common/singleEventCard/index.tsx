import Image from "next/image";
import React from "react";
import { CustomFont } from "../commonFont";
interface Props {
  imgURL: string;
  title: string;
  content: string;
  day: string;
  month: string;
  creator: string;
}
export default function SingleEventCard({
  imgURL,
  title,
  content,
  day,
  month,
  creator,
}: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[560px] space-y-[20px]">
        <div className="relative">
          <Image alt="img" src={imgURL} width={600} height={344} />
          <div
            className={`${CustomFont?.shipporiFont?.className} w-[116px] h-[140px] bg-primary-2 text-white text-[25px] leading-[30px] capitalize flex justify-center items-center text-center absolute top-0`}
          >
            <p>
              <span className="text-[60px] leading-[72px]">{day}</span> <br />
              {month}
            </p>
          </div>
        </div>

        <div className="text-[20px] font-medium text-primary-3 leading-[26px]">
          <span className="font-normal text-primary-7">Organized By : </span>
          {creator}
        </div>

        <div className="border-t-[1px] border-t-[#C7C7C7]">
          <p
            className={`${CustomFont?.shipporiFont?.className} text-[25px] text-primary-3 leading-[30px] py-[10px]`}
          >
            {title}
          </p>
          <p className="text-[20px] text-primary-7">{content}</p>
        </div>
      </div>
    </div>
  );
}
