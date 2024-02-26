import Image from "next/image";
import React from "react";
import { Shippori_Mincho } from "next/font/google";

const shippori_Mincho = Shippori_Mincho({
  weight: "700",
  subsets: ["latin"],
});

interface Props {
  imgURL: string;
  name: string;
  career: string;
  content: string;
}
export default function SingleCard({ imgURL, name, career, content }: Props) {
  return (
    <div className="grid grid-cols-3 bg-primary-5 h-[307px]">
      <div className="w-[193px] flex justify-center items-center">
        <Image alt="card img" src={imgURL} width={164} height={257} />
      </div>
      <div className="col-span-2 flex flex-col justify-center space-y-[10px] ">
        <div>
          <p
            className={`${shippori_Mincho.className} text-[25px] text-primary-3 leading-[36px]`}
          >
            {name}
          </p>
          <p className="text-[20px] text-primary-7 leading-[26px]">{career}</p>
        </div>
        <p className="text-[20px] text-primary-7 leading-[26px]">{content}</p>
      </div>
    </div>
  );
}
