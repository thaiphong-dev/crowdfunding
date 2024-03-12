"use client";
import Link from "next/link";
import React from "react";
import VideoPlayer from "../videoPlayer";
import { CustomFont } from "../commonFont";
import { motion } from "framer-motion";

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
  customWidth?: string;
  customHeight?: string;
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
  customWidth,
  customHeight,
}: Props) {
  return (
    <div
      className="w-[401px] h-[351px] flex items-center justify-center"
      style={{
        width: customWidth,
        height: customHeight,
      }}
    >
      {type !== "video" ? (
        <div
          className={` w-[401px] h-[351px] flex items-center justify-center ${bgColor} ${titleColor} `}
          style={{
            width: customWidth,
            height: customHeight,
          }}
        >
          <div className="px-[38px] py-[63px] space-y-[25px] ">
            <p
              className={` ${CustomFont?.shipporiFont?.className} text-[35px] leading-9 font-extrabold `}
            >
              {title}
            </p>
            <p className={`text-[20px] font-normal ${textColor}`}>{content}</p>
            {buttonTitle && (
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                className="min-w-[145px] min-h-[65px] bg-white rounded-[34px] uppercase"
              >
                {buttonTitle}
              </motion.button>
            )}
            {linkTitle && (
              <motion.div
                whileHover={{
                  scale: 1.2,
                  translateX: 20,
                  transition: { duration: 1 },
                }}
              >
                <Link
                  className="uppercase underline mt-[10px]"
                  href={linkHref ?? ""}
                >
                  {linkTitle}
                </Link>
              </motion.div>
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
