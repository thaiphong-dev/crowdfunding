import React from "react";
import CommonBanner from "../common/banner";
import Form from "./form";

export default function Contact() {
  return (
    <div className="space-y-[100px]">
      <CommonBanner
        imgURL="/image/contact/banner.png"
        subTitle="contact"
        title="Get in Touch"
      />
      <div className="flex justify-center items-center pb-[100px]">
        <div className="w-[1200px] ">
          <Form />
        </div>
      </div>
    </div>
  );
}
