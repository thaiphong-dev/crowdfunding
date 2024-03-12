/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import CommonContentBlock from "../commonContentBlock";
import { CustomFont } from "@/components/common/commonFont";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
export default function Banner() {
  return (
    <div className="relative">
      <div className="z-10">
        <div className="absolute top-[10%] left-[15%] w-[754px] text-primary-def">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, ease: "easeOut", duration: 1 }}
          >
            <p className={`${CustomFont?.sueFont?.className} text-banner-sub `}>
              Need help...
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, ease: "easeOut", duration: 1 }}
          >
            <p
              className={`${CustomFont?.shipporiFont?.className} text-banner-main capitalize`}
            >
              being life saver for someone
            </p>
          </motion.div>
          <motion.div
            className="pt-[10%] flex"
            initial={{ opacity: 0, translateX: -200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 2, ease: "easeOut", duration: 1 }}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              className="bg-primary-2 text-white uppercase  font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-[15px] flex justify-center items-center space-x-[10px] "
            >
              <span>donate</span>
              <motion.div
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, repeatDelay: 2 }}
              >
                <FaHeart fill="red" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              className="bg-white uppercase text-primary-3 font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              discover
            </motion.button>
          </motion.div>
        </div>
        <img src="/image/mainBanner.png" alt="mainbanner" />
      </div>
      <div className="mt-[-5%]">
        <CommonContentBlock />
      </div>
    </div>
  );
}
