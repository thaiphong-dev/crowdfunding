import React from "react";
import Header from "../common/header";
import Banner from "./banner";
import CommonContentBlock from "./commonContentBlock";
import AboutUs from "./aboutUs";
export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Banner />
      <div className="mt-[100px] flex justify-center items-center">
        <AboutUs />
      </div>
      lalal
    </div>
  );
}
