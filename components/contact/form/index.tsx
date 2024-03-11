import React from "react";
import { CustomFont } from "@/components/common/commonFont";
import Image from "next/image";
import ContactForm from "./form";
export default function Form() {
  const listIcon = [
    "/image/contact/insta.png",
    "/image/contact/fb.png",
    "/image/contact/twiter.png",
    "/image/contact/pintrest.png",
  ];
  return (
    <div className="flex">
      <div className="space-y-[20px] w-[600px]">
        <p className={`${CustomFont?.sueFont?.className} sectionTitle`}>
          Contact
        </p>
        <p
          className={`${CustomFont?.shipporiFont?.className} sectionContent text-primary-3 `}
        >
          Get in Touch With Us
        </p>
        <p className="text-primary-7 text-[20px]">
          Lorem Ipsum is simply dummy text of the printin typesetting dummy text
          ever when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
        <div className="flex space-x-[20px]">
          <div className="w-[89px] h-[89px] flex justify-center bg-primary-5">
            <Image
              alt="mail"
              src="/image/contact/mail.svg"
              width={39}
              height={19}
            />
          </div>
          <div className="h-[89px] flex flex-col justify-center">
            <p
              className={`${CustomFont?.shipporiFont?.className} text-[20px] text-primary-3`}
            >
              Massage
            </p>
            <p className="text-[20px] text-primary-7">
              thaiphong.dev@gmail.com
            </p>
          </div>
        </div>
        <div className="flex space-x-[20px]">
          <div className="w-[89px] h-[89px] flex justify-center bg-primary-5">
            <Image
              alt="phone"
              src="/image/contact/phone.svg"
              width={39}
              height={19}
            />
          </div>
          <div className="h-[89px] flex flex-col justify-center">
            <p
              className={`${CustomFont?.shipporiFont?.className} text-[20px] text-primary-3`}
            >
              Contact Us
            </p>
            <p className="text-[20px] text-primary-7">
              thaiphong.dev@gmail.com
            </p>
          </div>
        </div>

        <p
          className={`${CustomFont?.shipporiFont?.className} sectionContent text-primary-3 `}
        >
          Follow us on social media
        </p>
        <p className="text-primary-7 text-[20px]">
          Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
          reiciendis.
        </p>
        <div className="flex space-x-[20px]">
          {listIcon?.map((x, index) => (
            <Image key={index} alt="icon" src={x} width={25} height={25} />
          ))}
        </div>
      </div>

      {/* /// form */}
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
