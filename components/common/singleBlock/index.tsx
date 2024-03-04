"use client";
import Link from "next/link";
import React from "react";
import VideoPlayer from "../videoPlayer";
import { CustomFont } from "../commonFont";

interface Props {
  title?: string;
  content?: string;
  buttonTitle?: string;
  linkTitle?: string;
  type?: string;
  linkHref?: string;
  bgColor?: string;
  textColor?: string;
  titleColor?: string;
}
export default function SingleBlock({
  title,
  content,
  buttonTitle,
  linkTitle,
  bgColor,
  textColor,
  titleColor,
  linkHref,
  type,
}: Props) {
  console.log({
    title,
    content,
    buttonTitle,
    linkTitle,
    textColor,
  });

  return (
    <div className="w-[401px] h-[351px] flex items-center justify-center">
      {type !== "video" ? (
        <div
          className={` w-[401px] h-[351px] flex items-center justify-center ${bgColor} ${titleColor} `}
        >
          <div className="px-[38px] py-[63px] space-y-[25px] ">
            <p
              className={` ${CustomFont?.shipporiFont?.className} text-[35px] leading-9 font-extrabold `}
            >
              {title}
            </p>
            <p className={`text-[20px] font-normal ${textColor}`}>{content}</p>
            {buttonTitle && (
              <button className="min-w-[145px] min-h-[65px] bg-white rounded-[34px] uppercase">
                {buttonTitle}
              </button>
            )}
            {linkTitle && (
              <div>
                <Link
                  className="uppercase underline mt-[10px]"
                  href={linkHref ?? ""}
                >
                  {linkTitle}
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <VideoPlayer url={content ?? ""} />
        </div>
      )}
    </div>
  );
}
