import React from "react";
import Header from "../common/header";
import Banner from "./banner";
import AboutUs from "./aboutUs";
import OurCauses from "./ourCauses";
import WhatWeDo from "./whatWeDo";
import WhatWeDid from "./whatWeDid";
import Testimonial from "./testimonial";

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <div className="space-y-[100px]">
        <Banner />
        <div className="flex flex-col space-y-[100px] justify-center items-center">
          <AboutUs />
          <OurCauses />
          <WhatWeDo />
          <WhatWeDid />
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
