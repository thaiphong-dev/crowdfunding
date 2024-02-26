import React from "react";
import Header from "../common/header";
import Banner from "./banner";
import AboutUs from "./aboutUs";
import OurCauses from "./ourCauses";
export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Banner />
      <div className="my-[100px] flex justify-center items-center">
        <AboutUs />
      </div>
      <div className="flex justify-center items-center">
        <OurCauses />
      </div>
    </div>
  );
}
