import React from "react";
import { Sue_Ellen_Francisco, Shippori_Mincho } from "next/font/google";
const sueFont = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
const shipporiFont = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});
export const CustomFont = {
  sueFont,
  shipporiFont,
};
