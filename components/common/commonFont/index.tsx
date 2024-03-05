import { Sue_Ellen_Francisco, Shippori_Mincho } from "next/font/google";
const sueFont = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
const shipporiFont = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});
const shipporiFont600 = Shippori_Mincho({
  weight: "600",
  subsets: ["latin"],
});
const shipporiFont700 = Shippori_Mincho({
  weight: "700",
  subsets: ["latin"],
});
export const CustomFont = {
  sueFont,
  shipporiFont,
  shipporiFont600,
  shipporiFont700,
};
