import Image from "next/image";
import React from "react";
import { CustomFont } from "@/components/common/commonFont";
export default function DetailContent() {
  return (
    <div className="space-y-[100px] text-[20px] text-primary-7">
      <Image
        src="/image/causedetail/image.png"
        width={1200}
        height={617}
        alt="img"
      />
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
