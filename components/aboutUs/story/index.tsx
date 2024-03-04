import Image from "next/image";
import React from "react";
import { CustomFont } from "@/components/common/commonFont";
export default function Story() {
  const mockListImg2 = [
    {
      src: "/image/01.svg",
      width: 137,
      height: 44,
    },
    {
      src: "/image/02.svg",
      width: 106,
      height: 106,
    },
    {
      src: "/image/03.svg",
      width: 170,
      height: 44,
    },
    {
      src: "/image/04.svg",
      width: 150,
      height: 45,
    },
    {
      src: "/image/05.svg",
      width: 122,
      height: 49,
    },
  ];
  return (
    <div className="space-y-[100px]">
      <div className="min-h-[620px]">
        <div className="relative">
          <div className="flex space-x-[20px]">
            <div>
              <Image
                alt="story img"
                src="/image/about/storyImg.png"
                width={560}
                height={502}
              />
            </div>
            <div className="w-[620px] p-[20px] space-y-[40px]">
              <div className="space-y-[10px]">
                <p className={`${CustomFont?.sueFont?.className} sectionTitle`}>
                  about us
                </p>
                <p
                  className={`${CustomFont?.shipporiFont?.className} sectionContent w-[494px] `}
                >
                  Solutions to Help People <br /> in Need and Save <br /> the
                  Planet
                </p>
                <p className="text-[20px] text-primary-7">
                  Lorem Ipsum is simply dummy text of the printin typesetting
                  dummy text ever when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <div className="text-[#538582] text-[20px] font-medium bg-[#DEF1F0] text-center w-[600px]">
                  <p>
                    Save the Children believes every child deserves a future.
                  </p>
                </div>
              </div>
              <button className="darkButton">More About</button>
            </div>
          </div>
          <div className="bg-primary-3 text-white flex justify-center items-center w-[455px] h-[170px] space-x-[20px] absolute top-[90%] left-[-5%]">
            <div className="pt-[10px]">
              <Image
                alt="qoute icon"
                src="/image/about/qouteIcon.png"
                width={65}
                height={48.5}
              />
            </div>
            <div
              className={` ${CustomFont?.shipporiFont?.className} w-[262px] h-[60px]  text-[25px]`}
            >
              <p>He is truly great who hath a great charity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between h-[210px] border-y-[1px]">
        {mockListImg2?.map((x, index) => (
          <Image
            key={index}
            alt="img"
            src={x.src}
            width={x.width}
            height={x.height}
          />
        ))}
      </div>
    </div>
  );
}
