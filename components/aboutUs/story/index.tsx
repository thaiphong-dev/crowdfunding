"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { CustomFont } from "@/components/common/commonFont";
import { useInView, motion } from "framer-motion";
export default function Story() {
  const mockListImg2 = [
    {
      src: "/image/01.svg",
      width: 137,
      height: 44,
    },
    {
      src: "/image/02.svg",
      width: 106,
      height: 106,
    },
    {
      src: "/image/03.svg",
      width: 170,
      height: 44,
    },
    {
      src: "/image/04.svg",
      width: 150,
      height: 45,
    },
    {
      src: "/image/05.svg",
      width: 122,
      height: 49,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: isInView ? 1 : 0 },
    transition: { delay: 0.5, ease: "anticipate", duration: 1 },
  };
  return (
    <motion.div ref={ref} className="space-y-[100px]">
      <div className="min-h-[620px]">
        <div className="relative">
          <div className="flex space-x-[20px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.5, ease: "anticipate", duration: 1 }}
            >
              <Image
                alt="story img"
                src="/image/about/storyImg.png"
                width={560}
                height={502}
              />
            </motion.div>
            <div className="w-[620px] p-[20px] space-y-[40px]">
              <div className="space-y-[10px]">
                <motion.p
                  initial={{ opacity: 0, scale: 1.2, translateX: 50 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 1.2,
                    translateX: isInView ? 0 : 50,
                  }}
                  transition={{ delay: 0.7, ease: "easeOut", duration: 0.5 }}
                  className={`${CustomFont?.sueFont?.className} sectionTitle`}
                >
                  about us
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 1.2, translateX: 50 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 1.2,
                    translateX: isInView ? 0 : 50,
                  }}
                  transition={{ delay: 0.9, ease: "easeOut", duration: 0.5 }}
                  className={`${CustomFont?.shipporiFont?.className} sectionContent w-[494px] `}
                >
                  Solutions to Help People <br /> in Need and Save <br /> the
                  Planet
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 1.2, translateX: 50 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 1.2,
                    translateX: isInView ? 0 : 50,
                  }}
                  transition={{ delay: 1.1, ease: "easeOut", duration: 0.5 }}
                  className="text-[20px] text-primary-7"
                >
                  Lorem Ipsum is simply dummy text of the printin typesetting
                  dummy text ever when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 1.2, translateX: 50 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 1.2,
                    translateX: isInView ? 0 : 50,
                  }}
                  transition={{ delay: 1.3, ease: "easeOut", duration: 0.5 }}
                  className="text-[#538582] text-[20px] font-medium bg-[#DEF1F0] text-center w-[600px]"
                >
                  <motion.p>
                    Save the Children believes every child deserves a future.
                  </motion.p>
                </motion.div>
              </div>
              <motion.button
                initial={{ opacity: 0, scale: 1.2, translateX: 200 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 1.2,
                  translateX: isInView ? 0 : 200,
                }}
                transition={{ delay: 1.5, ease: "easeOut", duration: 0.5 }}
                className="darkButton"
              >
                More About
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1.2, translateX: -200 }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 1.2,
              translateX: isInView ? 0 : -200,
            }}
            transition={{ delay: 1.5, ease: "easeOut", duration: 0.5 }}
            className="bg-primary-3 text-white flex justify-center items-center w-[455px] h-[170px] space-x-[20px] absolute top-[90%] left-[-5%]"
          >
            <div className="pt-[10px]">
              <Image
                alt="qoute icon"
                src="/image/about/qouteIcon.png"
                width={65}
                height={48.5}
              />
            </div>
            <div
              className={` ${CustomFont?.shipporiFont?.className} w-[262px] h-[60px]  text-[25px]`}
            >
              <p>He is truly great who hath a great charity.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-between h-[210px] border-y-[1px]">
        {mockListImg2?.map((x, index) => (
          <Image
            key={index}
            alt="img"
            src={x.src}
            width={x.width}
            height={x.height}
          />
        ))}
      </div>
    </motion.div>
  );
}
