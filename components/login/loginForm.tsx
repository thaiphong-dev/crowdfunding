/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { Shippori_Mincho } from "next/font/google";
const shippori_Mincho = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});
interface FormValue {
  email: string;
  password: string;
}
export default function LoginForm() {
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
      className={`${shippori_Mincho.className} w-[1200px] max-w-sm text-[16px]`}
    >
      <form
        className="rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-primary-def font-light mb-2"
            htmlFor="email"
          >
            Email <span className="text-red-500">*</span>
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
            <p className="text-red-500 italic pt-1">Email is required.</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="text-red-500 italic pt-1">Email is incorrect.</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-primary-def font-light mb-2"
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
            <p className="text-red-500 italic pt-1">
              Please input your password.
            </p>
          )}
        </div>
        <div className="space-y-[10px]">
          <button
            className="bg-white hover:bg-primary-2 text-primary-3 font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign in
          </button>
          <Link
            className="inline-block align-baseline font-light text-primary-def hover:text-primary-1"
            href="register"
          >
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}
