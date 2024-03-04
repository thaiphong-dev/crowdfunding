import Image from "next/image";
import React from "react";

interface Props {
  content: string;
}
export default function CustomTag({ content }: Props) {
  return (
    <div className="flex justify-center items-center w-fit px-[15px] h-[56px] bg-primary-6 rounded-[45px] space-x-[5px]">
      <div className="flex justify-center items-center">
        <Image alt="img" src="/image/tickedIcon.png" width={25} height={25} />
      </div>
      <div>
        <p className="text-[20px] capitalize text-primary-7">{content}</p>
      </div>
    </div>
  );
}
