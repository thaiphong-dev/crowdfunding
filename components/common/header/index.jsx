"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Index() {
  const menuList = [
    { label: "Home", link: "/home" },
    { label: "About Us", link: "/about" },
    { label: "Guide", link: "/guide" },
    { label: "Event", link: "/event" },
    { label: "Contact", link: "/contact" },
    {
      label: "Donate",
      link: "/donate",
    },
  ];
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between px-[15rem] pt-[1rem] pb-[15px]">
      <div>
        <Image
          onClick={() => {
            router.push("/");
          }}
          className=" cursor-pointer"
          src="/image/logo1.png"
          alt="giving"
          width={150}
          height={0}
        />
      </div>
      <div>
        <ul className="flex items-center justify-between space-x-[2rem]">
          {menuList.map((item, index) => {
            return (
              <li
                className="cursor-pointer text-[1.1rem] text-primary-7 hover:text-primary-2 hover:font-bold"
                key={index}
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cursor-pointer">
        <Link
          href="/login"
          className="text-[1.1rem] text-primary-7 hover:text-primary-2 "
        >
          Login
        </Link>
        /
        <Link
          href="/register"
          className="text-[1.1rem] text-primary-7 hover:text-primary-2 "
        >
          Register
        </Link>
      </div>
    </div>
  );
}
