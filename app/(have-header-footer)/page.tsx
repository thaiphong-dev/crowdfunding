import React, { Suspense } from "react";
import HomePage from "@/components/home";
import Loading from "./loading";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </div>
  );
}
