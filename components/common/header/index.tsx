"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CustomFont } from "../commonFont";

export default function Index() {
  const menuList = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/aboutUs" },
    { label: "Causes", link: "/causes" },
    { label: "Event", link: "/event" },
    { label: "Contact", link: "/contact" },
    {
      label: "Donate",
      link: "/donate",
    },
  ];

  const router = useRouter();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log("window.scrollY", window.scrollY < 65);

      window.scrollY === 0 ? setIsTop(true) : setIsTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isTop
          ? "fixed top-0 bg-transparent transition-all duration-150 z-50 text-white "
          : "fixed top-0 bg-white z-50  text-primary-7 transition-all duration-150"
      } flex w-full items-center justify-between px-[15rem] pt-[1rem] pb-[15px]  `}
    >
      <div>
        <Image
          onClick={() => {
            router.push("/");
          }}
          className=" cursor-pointer"
          src={isTop ? "/image/logo.png" : "/image/logo1.png"}
          alt="giving"
          width={150}
          height={0}
        />
      </div>
      <div>
        <ul
          className={`${CustomFont?.shipporiFont600?.className} flex items-center justify-between space-x-[2rem]`}
        >
          {menuList.map((item, index) => {
            return (
              <li
                className="cursor-pointer text-[20px]  hover:text-primary-2 hover:font-bold"
                key={index}
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`${CustomFont?.shipporiFont600?.className} cursor-pointer`}
      >
        <Link href="/login" className="text-[18px]  hover:text-primary-2 ">
          Login
        </Link>
        /
        <Link href="/register" className="text-[18px]  hover:text-primary-2 ">
          Register
        </Link>
      </div>
    </div>
  );
}
