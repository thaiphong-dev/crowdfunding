/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CustomFont } from "../commonFont";

interface Props {
  subTitle: string;
  title: string;
  imgURL: string;
  customWidth?: string;
}
export default function CommonBanner({
  subTitle,
  title,
  imgURL,
  customWidth,
}: Props) {
  return (
    <div>
      <div className="z-10 relative">
        <div className="absolute top-[30%] left-[200px] w-[1285px] text-primary-def">
          <div className="relative top-[-25%]">
            <p
              className={`${CustomFont?.sueFont?.className} capitalize text-banner-sub`}
            >
              {subTitle}
            </p>
            <p
              className={`${CustomFont?.shipporiFont?.className} text-banner-main capitalize `}
              style={{ width: customWidth }}
            >
              {title}
            </p>
          </div>
        </div>
        <img className="max-h-[1029px]" src={imgURL} alt="mainbanner" />
      </div>
    </div>
  );
}
