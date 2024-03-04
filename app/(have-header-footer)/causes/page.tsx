import Causes from "@/components/causes";
import CauseList from "@/components/causes/causesList";
import React from "react";

export default function Page() {
  return (
    <div>
      <Causes />
      <div className="flex justify-center items-center bg-primary-4">
        <div className="w-[1200px] pb-[100px] ">
          <CauseList />
        </div>
      </div>
    </div>
  );
}
