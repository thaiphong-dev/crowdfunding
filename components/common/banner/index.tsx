/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { CustomFont } from "../commonFont";
import useFirstShowContent from "@/hook/useFirstShowContent";
import { motion } from "framer-motion";

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
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, ease: "easeOut", duration: 1 }}
            >
              <p
                className={`${CustomFont?.sueFont?.className} capitalize text-banner-sub`}
              >
                {subTitle}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, ease: "easeOut", duration: 1 }}
            >
              <p
                className={`${CustomFont?.shipporiFont?.className} text-banner-main capitalize `}
                style={{ width: customWidth }}
              >
                {title}
              </p>
            </motion.div>
          </div>
        </div>
        <img className="max-h-[1029px]" src={imgURL} alt="mainbanner" />
      </div>
    </div>
  );
}
