/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CustomFont } from "@/components/common/commonFont";
import SingleBlock from "@/components/common/singleBlock";

interface DataType {
  title?: string;
  content?: string;
  buttonTitle?: string;
  linkTitle?: string;
  linkHref?: string;
  type?: string;
  bgColor?: string;
  textColor?: string;
  titleColor?: string;
  customWidth?: string;
  customHeight?: string;
}

export default function Story() {
  const mockData: DataType[] = [
    {
      title: "Start",
      content: "10:00 AM - 8:00 PM, Everyday",
      bgColor: " bg-primary-2",
      textColor: " text-white",
      titleColor: " text-white",
      customWidth: "295px",
      customHeight: "212px",
    },
    {
      title: "Organizer",
      content: "Nattasha +006544466555 nattasha@gmail.com",
      textColor: " text-white",
      titleColor: " text-white",
      bgColor: " bg-primary-3",
      customWidth: "295px",
      customHeight: "212px",
    },
    {
      title: "Venue",
      content: "Dark Spurt, San Francisco, CA 94528",
      bgColor: " bg-primary-1",
      textColor: " text-white",
      titleColor: " text-white",
      customWidth: "295px",
      customHeight: "212px",
    },
  ];

  return (
    <div className=" space-y-[50px]">
      <div className="relative">
        <div className="z-10">
          <div className="absolute top-[10%] left-[15%] w-[754px] text-primary-def"></div>
          <img src="/image/events/detail/banner.png" alt="mainbanner" />
        </div>
        <div className="mt-[-50px]">
          <div className="flex justify-center ">
            {mockData?.map((x, index) => (
              <div key={index}>
                <SingleBlock {...x} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" space-y-[100px] text-[20px] text-primary-7 flex justify-center ">
        <div className="w-[882px] space-y-[50px] ">
          <div className="space-y-[20px]">
            <p
              className={`${CustomFont?.shipporiFont?.className} sectionTitle !text-primary-3`}
            >
              Event Description
            </p>
            <p>
              Veniam quae. Nostrum facere repellendus minus quod aut aliquam
              neque reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
              repudiandae. Voluptate at dolores ut dolor sint occaecati
              similique. Velit eius ab delectus temporibus.
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
              Event Condent
            </p>
            <p>
              Veniam quae. Nostrum facere repellendus minus quod aut aliquam
              neque reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
              repudiandae. Voluptate at dolores ut dolor sint occaecati
              similique. Velit eius ab delectus temporibus.
            </p>
          </div>
          <div className="space-y-[20px]">
            <p
              className={`${CustomFont?.shipporiFont?.className} sectionTitle !text-primary-3`}
            >
              Details about the Event
            </p>
            <p>
              Veniam quae. Nostrum facere repellendus minus quod aut aliquam
              neque reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
              repudiandae. Voluptate at dolores ut dolor sint occaecati
              similique. Velit eius ab delectus temporibus.
            </p>
            <p>
              Headings, paragraphs, blockquotes, figures, images, and figure
              captions can all be styled after A rich text element can be used
              with static or dynamic content. For static content, just drop it
              into any page and begin editing.
            </p>
            <p>
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
