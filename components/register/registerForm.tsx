"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { Sue_Ellen_Francisco } from "next/font/google";
const sue_Ellen_Francisco = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
interface FormValue {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
}
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const onSubmit = (data: FormValue) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-sm ">
      <form
        className="rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 text-center text-primary-def text-[2.5rem]">
          <p className={sue_Ellen_Francisco.className}>Become A Volunteer</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-primary-def text-sm font-light mb-2"
            htmlFor="fullName"
          >
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            className={`bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-primary-def leading-tight focus:outline-none focus:shadow-outline ${
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
          <label
            className="block text-primary-def text-sm font-light mb-2"
            htmlFor="email"
          >
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            className={`bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-primary-def leading-tight focus:outline-none focus:shadow-outline ${
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
          <label
            className="block text-primary-def text-sm font-light mb-2"
            htmlFor="phoneNumber"
          >
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            className={`bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-primary-def leading-tight focus:outline-none focus:shadow-outline ${
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
          <label
            className="block text-primary-def text-sm font-light mb-2"
            htmlFor="password"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className={`bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-primary-def leading-tight focus:outline-none focus:shadow-outline ${
              errors?.password?.type ? "border-red-500" : ""
            }`}
            type="password"
            id="password"
            placeholder="********"
            {...register("password", { required: true, min: 8 })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-red-500 text-xs italic pt-1">
              Please input your password.
            </p>
          )}
        </div>
        <div className="">
          <button
            className="bg-white hover:bg-primary-2 text-primary-3 font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
          <Link
            className="inline-block align-baseline font-light text-sm text-primary-def hover:text-primary-1 pt-2"
            href="/login"
          >
            Already had an account? Sign in now.
          </Link>
        </div>
      </form>
    </div>
  );
}
