"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { CustomFont } from "@/components/common/commonFont";

interface FormValue {
  email: string;
  fullName: string;
  phoneNumber: string;
  message: string;
}
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const onSubmit = (data: FormValue) => {
    console.log(data);
  };
  return (
    <div
      className={`${CustomFont?.shipporiFont?.className} w-[600px] text-[20px] text-primary-3  `}
    >
      <form
        className="rounded px-8 pt-6 pb-8 mb-4 space-y-[30px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block mb-2" htmlFor="fullName">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            className={`bg-transparent shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors?.fullName?.type ? "border-red-500" : ""
            }`}
            type="text"
            id="fullName"
            {...register("fullName", {
              required: true,
              pattern: /^[A-Z]+$/i,
            })}
          />
          {errors?.fullName?.type === "required" && (
            <p className="text-red-500 text-xs italic pt-1">
              Name is required.
            </p>
          )}
          {errors?.fullName?.type === "pattern" && (
            <p className="text-red-500 text-xs italic pt-1">
              Name is incorrect.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block  mb-2" htmlFor="email">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            className={`bg-transparent shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors?.email?.type ? "border-red-500" : ""
            }`}
            type="text"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-red-500 text-xs italic pt-1">
              UserName is required.
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="text-red-500 text-xs italic pt-1">
              Email is incorrect.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block  mb-2" htmlFor="phoneNumber">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            className={`bg-transparent shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors?.phoneNumber?.type ? "border-red-500" : ""
            }`}
            type="text"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: true,
              pattern: /^\d+$/,
            })}
          />
          {errors?.phoneNumber?.type === "required" && (
            <p className="text-red-500 text-xs italic pt-1">
              Phone number is required.
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="text-red-500 text-xs italic pt-1">
              Phone number is incorrect.
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block  mb-2" htmlFor="message">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            className={`bg-transparent shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors?.message?.type ? "border-red-500" : ""
            }`}
            id="message"
            rows={4}
            {...register("message", { required: true, min: 8 })}
          />
          {errors?.message?.type === "required" && (
            <p className="text-red-500 text-xs italic pt-1">
              Please input your message.
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary-3 hover:bg-primary-2 text-white font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
