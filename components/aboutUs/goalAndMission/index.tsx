import CustomTag from "@/components/common/customtag";
import Image from "next/image";
import React from "react";
import { CustomFont } from "@/components/common/commonFont";
export default function GoalAndMission() {
  const listTag = [
    "Make Donation",
    "Donation Reched 10M",
    "Education For All",
    "Become A Volunteer",
    "Food For Poor People",
  ];
  return (
    <div className="text-[20px] text-primary-7 flex justify-between space-x-[50px] min-h-[670px]">
      <div className="space-y-[20px]">
        <p
          className={`${CustomFont?.shipporiFont?.className} text-primary-3 text-[35px] leading-[42px] capitalize`}
        >
          our goal
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the typesetting dummy text ever
          when an unknown printer took a galley of type and scrambled
          typerelative specimen book.
        </p>
        <div className=" grid grid-cols-2 gap-[20px]">
          {listTag?.map((x, index) => (
            <CustomTag key={index} content={x} />
          ))}
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the typesetting dummy text ever
          when an unknown printer took a galley of type and scrambled type
          specimen book.
        </p>
      </div>

      <div className="space-y-[20px] ">
        <div>
          <p
            className={`${CustomFont?.shipporiFont?.className} text-primary-3 text-[40px] leading-[48px] capitalize`}
          >
            Our Mission
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the typesetting dummy text ever
            when an unknown printer took a galley of type and scrambled type
            specimen book.
          </p>
        </div>
        <div className="relative">
          <div>
            <Image
              alt="mission img"
              src="/image/about/missionImg.png"
              width={585}
              height={413}
            />
          </div>
          <div className="w-[388px] h-[192px] text-center bg-primary-1 flex flex-col justify-center items-center absolute top-[75%] left-[5%]">
            <p
              className={`${CustomFont?.shipporiFont?.className} text-primary-3 text-[73px] leading-[87px] capitalize`}
            >
              20000+
            </p>
            <p className="font-medium text-[20px] text-primary-3">
              Thousand People Helped
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
