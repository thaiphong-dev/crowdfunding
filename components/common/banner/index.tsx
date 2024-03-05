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
      <div className="z-10">
        <div className="absolute top-[160px] left-[200px] w-[1285px] text-primary-def">
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
        <img src={imgURL} alt="mainbanner" />
      </div>
    </div>
  );
}
