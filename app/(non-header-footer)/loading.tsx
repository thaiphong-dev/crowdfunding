"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
export default function Loading() {
  return (
    <motion.div
      animate={{ scale: [3, 5, 3], rotate: [0, 359, 359, 359, 0] }}
      transition={{ repeat: Infinity, repeatDelay: 2 }}
      className="absolute left-[50%] top-[50%] "
    >
      <FaHeart fill="red" />
    </motion.div>
  );
}
