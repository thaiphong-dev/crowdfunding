import React from "react";
import LoginForm from "./loginForm";
import { Sue_Ellen_Francisco } from "next/font/google";
import Image from "next/image";
const sue_Ellen_Francisco = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
export default function Index() {
  return (
    <div className="h-[100vh] bg-login flex-col items-center justify-center">
      <div className="pt-6 flex items-center justify-center">
        <Image src="/image/logo.png" alt="giving" width={100} height={0} />
        <p></p>
      </div>
      <div className="h-[90%] flex items-center justify-center">
        <div className="h-[25rem]  flex items-center justify-between ">
          <div className="h-full mr-[2rem] w-full border border-white">
            <LoginForm />
          </div>
          <div className="text-primary-def h-full max-w-[30rem]">
            <p className={`${sue_Ellen_Francisco.className} text-xl pb-2`}>
              Our causes
            </p>
            <p className="text-2xl pb-2">
              Helping each other can make Word better
            </p>
            <p className="pb-2">
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
