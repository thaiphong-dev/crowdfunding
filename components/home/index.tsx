import React from "react";
import Header from "../common/header";
import Banner from "./banner";
import CommonContentBlock from "./commonContentBlock";
export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Banner />
    </div>
  );
}
