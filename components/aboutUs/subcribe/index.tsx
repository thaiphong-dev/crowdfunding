/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { CustomFont } from "@/components/common/commonFont";
interface FormValue {
  email: string;
}
export default function Subcribe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const onSubmit = (data: FormValue) => {
    console.log(data);
  };
  return (
    <div className="text-white relative">
      <img alt="subcribe.png" src="/image/about/subcriber.png" width="full" />
      <div className="w-[780px] text-center absolute top-[25%] left-[50%]">
        <div className="relative top-[-25%] left-[-50%] flex flex-col justify-center items-center space-y-[20px]">
          <div>
            <p
              className={`${CustomFont?.sueFont?.className} text-[35px] capitalize`}
            >
              subcribe
            </p>
            <p
              className={`${CustomFont?.shipporiFont?.className} text-[40px] capitalize`}
            >
              newsleter
            </p>
            <p className="text-[20px]">
              Save the Children believes every child deserves a future. In the
              U.S. and around the world, we give children a healthy start in
              life.
            </p>
          </div>
          <div className="flex space-x-[20px] ">
            <div>
              <input
                className={`w-[414px] h-[65px] rounded-[34px] py-2 px-3 text-primary-3 text-[20px]  focus:outline-none focus:shadow-outline ${
                  errors?.email?.type ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Enter Your Email Address"
                id="email"
                {...register("email", {
                  pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                })}
              />
              {errors?.email?.type === "pattern" && (
                <p className="text-red-500 text-xs italic pt-1">
                  Email is incorrect.
                </p>
              )}
            </div>
            <button className="darkButton !w-[122px]">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
