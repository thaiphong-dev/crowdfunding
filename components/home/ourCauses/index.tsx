import React from "react";
import { Sue_Ellen_Francisco, Shippori_Mincho } from "next/font/google";
import EventSwiper from "../eventSlideShow";
const sue_Ellen_Francisco = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
const shippori_Mincho = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});
export default function OurCauses() {
  return (
    <div className="bg-primary-4 py-[100px] w-full flex flex-col justify-center items-center space-y-[30px]">
      <div className="w-[1200px] flex justify-between">
        <div className="w-[620px]">
          <p
            className={`${sue_Ellen_Francisco.className} text-[35px] text-primary-2 capitalize`}
          >
            our causes
          </p>
          <p
            className={`${shippori_Mincho.className} text-[40px] text-primary-3`}
          >
            You can help lots of people by donating little.
          </p>
        </div>
        <div>
          <button className="bg-primary-2 w-[200px] h-[65px] text-white rounded-[34px] uppercase font-semibold text-[18px]">
            more causes
          </button>
        </div>
      </div>
      <div>
        <EventSwiper />
      </div>
    </div>
  );
}
