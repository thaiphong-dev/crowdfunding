"use client";
import React, { useRef } from "react";
import CheckIcon from "@/components/common/checkIcon";
import { CustomFont } from "@/components/common/commonFont";
import { motion, useInView } from "framer-motion";

export default function AboutUs() {
  const checkList = [
    {
      label: "Food Donation",
    },
    {
      label: "Water Supplay",
    },
    {
      label: "Money Donation",
    },
    {
      label: "Education Donation",
    },
    {
      label: "Dress Donation",
    },
    {
      label: "Toys Donation",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-[1200px] h-[450px] flex justify-center space-x-[30px]"
    >
      <motion.div
        initial={{ opacity: 0, translateX: -200 }}
        animate={{ opacity: isInView ? 1 : 0, translateX: isInView ? 0 : -200 }}
        transition={{ delay: 0.5, ease: "backOut", duration: 1 }}
        className="w-[850px] space-y-[15px] "
      >
        <p className={`${CustomFont?.sueFont?.className} sectionTitle`}>
          About Us
        </p>
        <p
          className={`${CustomFont?.shipporiFont?.className} text-[40px] leading-[48px] w-[315px]`}
        >
          Help People, Our Main Goals
        </p>
        <p className="text-[20px] leading-6 text-primary-7">
          Lorem Ipsum is simply dummy text of the printin typesetting dummy text
          ever when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
        <p className="text-[20px] leading-6 text-primary-7">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
          essentially.
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          className="uppercase font-medium bg-primary-2 text-white text-[18px] leading-5 w-[200px] h-[65px] rounded-[34px]"
        >
          More About
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 200 }}
        animate={{ opacity: isInView ? 1 : 0, translateX: isInView ? 0 : 200 }}
        transition={{ delay: 0.5, ease: "backOut", duration: 1 }}
        className="bg-primary-5 flex justify-center items-center"
      >
        <div className=" w-[580px] px-[40px] h-[380px] space-y-[15px]">
          <div className="flex flex-wrap justify-between ">
            {checkList?.map((x, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                }}
                transition={{
                  delay: (index + 1) / 2,
                  ease: "backOut",
                  duration: 1,
                }}
                className="w-[250px] h-[43px] text-[20px] font-semibold text-primary-7"
                key={x?.label}
              >
                <CheckIcon />
                <div className="ml-[40px]">{x?.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="w-[443px]">
            <p
              className={`${CustomFont?.shipporiFont.className} text-[25px] leading-[30px] `}
            >
              Total Donation
            </p>
            <div className="flex-start flex h-1.5 w-full overflow-hidden rounded-full bg-[#C5CECC] font-sans text-xs font-medium my-[20px]">
              <motion.div
                initial={{ opacity: 0, translateX: -200 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  translateX: isInView ? 0 : -200,
                }}
                transition={{ delay: 3, ease: "easeOut", duration: 1 }}
                className="flex items-center justify-center w-1/2 h-full overflow-hidden text-white break-all bg-primary-2 rounded-full"
              ></motion.div>
            </div>
            <div className="flex flex-row justify-between">
              <p
                className={`${CustomFont?.shipporiFont.className} text-[20px] leading-[24px] `}
              >
                Collection - $5M
              </p>
              <p
                className={`${CustomFont?.shipporiFont.className} text-[20px] leading-[24px] `}
              >
                Goal - $10M
              </p>
            </div>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              className="uppercase bg-white font-medium text-[18px] leading-5 w-[200px] h-[65px] rounded-[34px] mt-[50px]"
            >
              Donat Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
