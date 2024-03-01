import React from "react";
import Banner from "./banner";
import AboutUs from "./aboutUs";
import OurCauses from "./ourCauses";
import WhatWeDo from "./whatWeDo";
import WhatWeDid from "./whatWeDid";
import Testimonial from "./testimonial";
import Team from "./team";
import OurEvent from "./ourEvent";

export default function HomePage() {
  return (
    <div className="relative text-primary-3">
      <div className="space-y-[100px]">
        <Banner />
        <div className="flex flex-col space-y-[100px] justify-center items-center">
          <AboutUs />
          <OurCauses />
          <WhatWeDo />
          <WhatWeDid />
          <Testimonial />
          <Team />
          <OurEvent />
        </div>
      </div>
    </div>
  );
}
