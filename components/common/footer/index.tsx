"use client";
import React, { useRef } from "react";
import { Shippori_Mincho } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const shippori_Mincho = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});
export default function Footer() {
  const router = useRouter();
  const icons = [
    "/image/Binstagram.png",
    "/image/Bfb.png",
    "/image/Btwister.png",
    "/image/Bpinteres.png",
  ];

  const menuList = [
    {
      title: "about us",
      link: "/about-us",
    },
    {
      title: "volunteer",
      link: "/volunteer",
    },
    {
      title: "causes",
      link: "/causes",
    },
    {
      title: "projects",
      link: "/projects",
    },
    {
      title: "team",
      link: "/team",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, ease: "easeIn", duration: 1 }}
      ref={ref}
      className="w-full h-[550px] bg-primary-3 text-white flex justify-center items-center "
    >
      <div className="w-[1200px] h-[358px] flex justify-center items-center">
        <div className="w-[363px] space-y-[20px]">
          <div>
            <Image
              onClick={() => {
                router.push("/");
              }}
              className=" cursor-pointer"
              src="/image/logo.png"
              alt="giving"
              width={205}
              height={51}
            />
          </div>
          <p className="text-[20px]">
            Care about people to transforming their lives and exudes a positives
            Impressiono believe. fundraising NGO organizations.
          </p>
          <div className="flex justify-start items-center space-x-[20px]">
            {icons?.map((x, index) => (
              <Link key={index} href={"/#"}>
                <Image src={x} width={60} height={60} alt="icon" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex space-x-[50px] w-[800px] justify-center items-center">
          <div className="space-y-[20px]">
            <p className={`${shippori_Mincho.className} text-[25px]`}>
              Get Involved
            </p>
            <div className="grid grid-cols-1 text-[20px] capitalize">
              {menuList?.map((x, index) => (
                <Link
                  className="hover:text-primary-2"
                  key={index}
                  href={x?.link}
                >
                  {x?.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-[20px] w-[250px]">
            <p className={`${shippori_Mincho.className} text-[25px]`}>
              Contact
            </p>
            <div className="grid grid-cols-1 text-[20px] ">
              <p className="row-span-2 capitalize">
                Go vap district, Ho Chi Minh city
              </p>
              <div className="h-[30px]"></div>
              <p className="row-span-2">thaiphong.dev@gmail.com 037 761 2701</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
