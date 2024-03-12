"use client";
import React, { useRef } from "react";
import { CustomFont } from "@/components/common/commonFont";
import EventSwiper from "../eventSlideShow";
import { motion, useInView } from "framer-motion";

export default function OurCauses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="bg-primary-4 py-[100px] w-full flex flex-col justify-center items-center space-y-[30px]"
    >
      <div className="w-[1200px] flex justify-between">
        <div className="w-[620px]">
          <motion.p
            initial={{ opacity: 0, translateX: 200 }}
            animate={{
              opacity: isInView ? 1 : 0,
              translateX: isInView ? 0 : 200,
            }}
            transition={{ delay: 0.5, ease: "backOut", duration: 1 }}
            className={`${CustomFont?.sueFont?.className} text-[35px] text-primary-2 capitalize`}
          >
            our causes
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateX: 200 }}
            animate={{
              opacity: isInView ? 1 : 0,
              translateX: isInView ? 0 : 200,
            }}
            transition={{ delay: 0.5, ease: "backOut", duration: 1 }}
            className={`${CustomFont?.shipporiFont?.className} text-[40px] text-primary-3`}
          >
            You can help lots of people by donating little.
          </motion.p>
        </div>
        <div>
          <motion.button
            initial={{ opacity: 0, translateX: 200 }}
            animate={{
              opacity: isInView ? 1 : 0,
              translateX: isInView ? 0 : 200,
            }}
            transition={{ delay: 0.5, ease: "backOut", duration: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            className="bg-primary-2 w-[200px] h-[65px] text-white rounded-[34px] uppercase font-semibold text-[18px]"
          >
            more causes
          </motion.button>
        </div>
      </div>
      <motion.div>
        <EventSwiper />
      </motion.div>
    </div>
  );
}
