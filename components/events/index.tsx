import React from "react";
import CommonBanner from "../common/banner";
import EventList from "./eventList";

export default function Events() {
  return (
    <div className="relative text-primary-3">
      <CommonBanner
        subTitle="Donation"
        title="our events"
        imgURL="/image/events/banner.png"
      />

      <div className="flex justify-center items-center bg-primary-4">
        <div className="w-[1200px] py-[100px] bg-primary-4 ">
          <EventList />
        </div>
      </div>
    </div>
  );
}
