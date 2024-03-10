import Image from "next/image";
import React from "react";
import { CustomFont } from "@/components/common/commonFont";
export default function DetailContent() {
  return (
    <div className=" text-[20px] text-primary-7">
      <div className="min-h-[620px] ">
        <div className="relative">
          <div className="flex space-x-[20px] bg-primary-6">
            <div>
              <Image
                className="rounded-[34px]"
                alt="story img"
                src="/image/about/storyImg.png"
                width={560}
                height={502}
              />
            </div>
            <div className="w-[620px] p-[20px] space-y-[40px] ">
              <div className="space-y-[10px]">
                <p
                  className={`${CustomFont?.shipporiFont?.className} sectionContent w-[494px] !text-primary-3 `}
                >
                  Solutions to Help People <br /> in Need and Save <br /> the
                  Planet
                </p>
              </div>
              <div className={`${CustomFont?.shipporiFont?.className}`}>
                <div className="flex justify-between items-center ">
                  <div className="flex justify-between items-center space-x-[20px]">
                    <Image
                      alt="ava"
                      src="/image/causeDetail/ava.jpeg"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <p
                      className={`${CustomFont?.shipporiFont?.className} !text-[25px] !text-primary-2 `}
                    >
                      Children of viet nam
                    </p>
                  </div>

                  <div className="flex justify-between items-center space-x-[20px]">
                    <Image
                      alt="ava"
                      src="/image/causeDetail/person.svg"
                      width={17}
                      height={17}
                    />
                    <p>182 votes</p>
                  </div>
                </div>

                {/* ////// */}

                <div className="flex-start flex h-1.5 w-full overflow-hidden rounded-full bg-primary-bg-bar font-sans text-xs font-medium my-[20px]">
                  <div className="flex items-center justify-center w-1/2 h-full overflow-hidden text-white break-all bg-primary-2 rounded-full"></div>
                </div>
                <div className="flex flex-row justify-between">
                  <p
                    className={`${CustomFont?.shipporiFont.className} text-[20px] leading-[24px] `}
                  >
                    Collection - $5M
                  </p>
                  <p
                    className={`${CustomFont?.shipporiFont.className} text-[20px] leading-[24px] `}
                  >
                    Goal - $10M
                  </p>
                </div>
                <div className="flex justify-end mt-8">
                  <button className="uppercase bg-primary-2 text-white !font-medium text-[20px] leading-5 w-[200px] h-[65px] rounded-[34px] mt-[50px]">
                    Donat Now
                  </button>
                </div>
              </div>
              {/* <button className="darkButton">More About</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[50px]">
        <div>
          <p
            className={`${CustomFont?.shipporiFont?.className} sectionTitle !text-primary-3`}
          >
            Donation : $5,000/$12,000
          </p>
        </div>
        <div className="space-y-[20px]">
          <p
            className={`${CustomFont?.shipporiFont?.className} sectionTitle !text-primary-3`}
          >
            Our Goal
          </p>
          <p>
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
          <p>
            For dynamic content, add a rich text field to any collection and
            then connect a rich text element to that field in the settings
            panel. Headings, paragraphs, block-quotes, figures, images, and
            figure captions can all be styled.
          </p>
        </div>
        <div className="space-y-[20px]">
          <p
            className={`${CustomFont?.shipporiFont?.className} sectionTitle !text-primary-3`}
          >
            We love design beautiful things.
          </p>
          <p>
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
        </div>
        <div className="space-y-[20px]">
          <p
            className={`${CustomFont?.shipporiFont?.className} sectionTitle !text-primary-3`}
          >
            Details about the cause
          </p>
          <p>
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
          <p>
            Headings, paragraphs, blockquotes, figures, images, and figure
            captions can all be styled after A rich text element can be used
            with static or dynamic content. For static content, just drop it
            into any page and begin editing.
          </p>
          <p>
            The rich text element allows you to create and format headings,
            paragraphs, blockquotes, images, and video all in one place instead
            of having to add and format them individually. Just double-click and
            easily create content.
          </p>
        </div>
      </div>
    </div>
  );
}
