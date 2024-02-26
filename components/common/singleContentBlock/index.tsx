import Image from "next/image";
import React from "react";
import { Sue_Ellen_Francisco, Shippori_Mincho } from "next/font/google";

const sue_Ellen_Francisco = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
const shippori_Mincho = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});

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
        className={`${shippori_Mincho.className} text-[25px] text-primary-3 capitalize`}
      >
        {title}
      </p>
      <p className="text-primary-7 text-center text-[20px] leading-[26px]">
        {content}
      </p>
    </div>
  );
}
