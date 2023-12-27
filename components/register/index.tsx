import React from "react";
import RegisterForm from "./registerForm";
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
        <div className="h-[32rem]  flex items-center justify-between ">
          <div className="text-primary-def h-full max-w-[30rem] mr-[2rem] ">
            <p className={`${sue_Ellen_Francisco.className} text-xl pb-2`}>
              How We Help
            </p>
            <p className="text-2xl pb-2">
              Join The CommunityTo Give Education For Children
            </p>
            <p className="pb-2">
              Lorem Ipsum is simply dummy text of the printin typesetting dummy
              text ever when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <Image width={500} height={0} src="/image/study.png" alt="smile" />
            <button
              className="bg-primary-2 hover:bg-primary-4 text-primary-def hover:text-primary-3 font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mt-4"
              type="submit"
            >
              Donate
            </button>
          </div>
          <div className="h-full w-full border border-white">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
