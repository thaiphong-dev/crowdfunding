/* eslint-disable @next/next/no-img-element */
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
  subTitle: string;
  title: string;
}
export default function CommonBanner({ subTitle, title }: Props) {
  return (
    <div>
      <div className="z-10">
        <div className="absolute top-[10%] left-[20%] w-[754px] text-primary-def">
          <p className={`${sue_Ellen_Francisco.className} text-banner-sub`}>
            {subTitle}
          </p>
          <p
            className={`${shippori_Mincho.className} text-banner-main capitalize`}
          >
            {title}
          </p>
        </div>
        <img src="/image/mainBanner.png" alt="mainbanner" />
      </div>
    </div>
  );
}
