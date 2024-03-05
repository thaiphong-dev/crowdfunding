"use client";
import React from "react";
import LoginForm from "./loginForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CustomFont } from "@/components/common/commonFont";

export default function Index() {
  const router = useRouter();
  return (
    <div className="h-[100vh] bg-login flex-col items-center justify-center">
      <div className="pt-2 flex items-center justify-center">
        <Image
          onClick={() => router.push("/")}
          className="cursor-pointer"
          src="/image/logo.png"
          alt="giving"
          width={200}
          height={0}
        />
        <p></p>
      </div>
      <div className="h-[90%] flex items-center justify-center">
        <div className="h-[450px]  flex items-center justify-between ">
          <div className="h-full mr-[2rem] w-full border border-white">
            <LoginForm />
          </div>
          <div className="text-primary-def h-full max-w-[30rem]">
            <p
              className={`${CustomFont?.sueFont?.className} text-primary-2 text-[35px] pb-2`}
            >
              Our causes
            </p>
            <p
              className={`${CustomFont?.shipporiFont?.className} text-[25px] pb-2`}
            >
              Helping each other can make Word better
            </p>
            <p className="pb-2 text-[20px]">
              Care about people to transforming their lives and exudes a
              positives Impressiono believe. fundraising NGO organizations.
            </p>
            <Image width={400} height={0} src="/image/smile.png" alt="smile" />
          </div>
        </div>
      </div>
    </div>
  );
}
