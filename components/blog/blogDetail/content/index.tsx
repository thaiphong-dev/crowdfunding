/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { CustomFont } from "@/components/common/commonFont";
import Image from "next/image";
export default function Content() {
  return (
    <div className="text-[20px] text-primary-7  space-y-[20px]">
      <p
        className={`${CustomFont?.shipporiFont?.className} text-[40px] text-primary-3`}
      >
        We Are Need Your Help
      </p>
      <p>
        Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
        reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
        repudiandae. Voluptate at dolores dolor sint occaecati similique. Velit
        eius ab delectus temporibus.
      </p>
      <ul className="list-disc px-[50px] space-y-[20px]">
        <li>
          Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor.
        </li>
        <li>
          Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
        </li>
        <li>A rich text element can be used with static or dynamic content.</li>
      </ul>

      <div className="h-[463px] bg-primary-2 flex flex-col justify-center items-center space-y-[30px]">
        <Image
          src="/image/blogDetail/qoute.png"
          alt="qoute"
          width={103}
          height={103}
        />
        <p className="italic text-[30px] text-center w-[584px] text-white">
          “In the end, maybe it's wiser to surrender before the miraculous scope
          of human generosity and to just keep saying thank you, forever and
          sincerely, for as long as we have voices”
        </p>
      </div>
    </div>
  );
}
