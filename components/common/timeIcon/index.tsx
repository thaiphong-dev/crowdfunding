import Image from "next/image";
import React from "react";

export default function TimeIcon() {
  return (
    <div className="relative top-0.5">
      <div className="absolute">
        <Image src="/image/Circle.png" alt="circle" width={20} height={20} />
      </div>
      <div className="absolute z-10 top-[7px] left-[8px]">
        <Image src="/image/Vector-1.png" alt="circle" width={5} height={6} />
      </div>
    </div>
  );
}
