import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomFont } from "../commonFont";

interface Props {
  imgURL: string;
  name: string;
  igLink?: string;
  fbLink?: string;
  tsLink?: string;
  ptLink?: string;
}
export default function Profilecard({
  imgURL,
  name,
  fbLink,
  igLink,
  ptLink,
  tsLink,
}: Props) {
  const icons = ["/image/Fb.png", "/image/Pintrest.png"];
  return (
    <div className="text-center space-y-[20px]">
      <Image alt="profile image" src={imgURL} width={283} height={382} />
      <p
        className={`${CustomFont?.shipporiFont?.className} text-[20px] leading-[24px] text-primary-3`}
      >
        {name}
      </p>
      <div className="flex justify-center items-center space-x-[20px]">
        {icons?.map((x, index) => (
          <Link key={index} href={"/#"}>
            <Image src={x} width={18} height={18} alt="icon" />
          </Link>
        ))}
      </div>
    </div>
  );
}
