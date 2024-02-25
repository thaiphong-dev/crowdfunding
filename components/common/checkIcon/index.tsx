import Image from "next/image";
import React from "react";

export default function CheckIcon() {
  return (
    <div className="relative top-0.5">
      <div className="absolute">
        <Image src="/image/Ellipse.png" alt="circle" width={27} height={27} />
      </div>
      <div className="absolute z-10 top-[9px] left-[8px]">
        <Image src="/image/Vector.png" alt="circle" width={11} height={9} />
      </div>
    </div>
  );
}
