import Profilecard from "@/components/common/profileCard";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomFont } from "../commonFont";

export default function Team() {
  const mockData = [
    {
      imgURL: "/image/profile.png",
      name: "Martin Luther",
    },
    {
      imgURL: "/image/profile1.png",
      name: "Keira Knightley",
    },
    {
      imgURL: "/image/profile2.png",
      name: "Jack Sparrow",
    },
  ];
  return (
    <div className="bg-primary-4 py-[100px] w-full flex justify-center items-center ">
      <div className="w-[1200px] flex flex-col justify-center item-center text-center space-y-[30px]">
        <div>
          <p
            className={`${CustomFont?.sueFont?.className} text-[35px] text-primary-2 capitalize`}
          >
            Team
          </p>
          <p
            className={`${CustomFont?.shipporiFont?.className} text-[40px] text-primary-3`}
          >
            Meet Our Volunteers
          </p>
        </div>
        <div className="flex flex-row space-x-[20px] ">
          {mockData?.map((x, index) => (
            <Profilecard key={index} {...x} />
          ))}
          <div className="w-[283px] h-[464px] bg-primary-1 flex flex-col justify-center items-center space-y-[20px]">
            <Image
              src="/image/handIcon.png"
              alt="hand Icon"
              width={82}
              height={82}
            />
            <p
              className={`${CustomFont?.shipporiFont?.className} w-[153px] text-[25px] text-primary-3 leading-[30px]`}
            >
              Become <br /> a Volunteer
            </p>
            <p className="text-[20px] text-center w-[240px]">
              Centuries but also the leap electtypesetting, remaining
            </p>
            <button className="bg-primary-3 text-white uppercase w-[200px] h-[65px] rounded-[34px]">
              <Link
                className="uppercase mt-[10px] no-underline"
                href="/register"
              >
                Join Us Today
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
