import React from "react";
import { Sue_Ellen_Francisco, Shippori_Mincho } from "next/font/google";
import Image from "next/image";
import TimeIcon from "@/components/common/timeIcon";
const sue_Ellen_Francisco = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
const shippori_Mincho = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});
export default function OurEvent() {
  const mockData = [
    {
      date: "18",
      month: "june",
      creator: "Nattasha",
      title: "Healthy Food for Growing",
      content:
        "There are many varieations of passages of injected Lorem Ipsum available.",
    },
    {
      date: "21",
      month: "august",
      creator: "Michel Sudan",
      title: "Cloth Comming",
      content:
        "There are many varieations of passages of injected Lorem Ipsum available.",
    },
    {
      date: "14",
      month: "july",
      creator: "Jogn Doue",
      title: "Teachers Presentation",
      content:
        "There are many varieations of passages of injected Lorem Ipsum available.",
    },
  ];
  return (
    <div className="py-[100px] w-full flex flex-col justify-center items-center space-y-[30px]">
      <div className="w-[1200px] flex justify-between">
        <div className="w-[620px]">
          <p
            className={`${sue_Ellen_Francisco.className} text-[35px] text-primary-2 capitalize`}
          >
            Our Events
          </p>
          <p
            className={`${shippori_Mincho.className} text-[40px] text-primary-3 w-[473px]`}
          >
            Join Upcoming Events Replays & Webinars
          </p>
        </div>
        <div>
          <button className="bg-primary-2 w-[200px] h-[65px] text-white rounded-[34px] uppercase font-semibold text-[18px]">
            more events
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 w-[1200px] gap-[20px]">
        {/* block left  */}
        <div className="space-y-[20px]">
          <div className="relative">
            <Image alt="img" src="/image/event.png" width={600} height={344} />
            <div
              className={`${shippori_Mincho.className} w-[116px] h-[140px] bg-primary-2 text-white text-[25px] leading-[30px] capitalize flex justify-center items-center text-center absolute top-0`}
            >
              <p>
                <span className="text-[60px] leading-[72px]">18</span> june
              </p>
            </div>
          </div>

          <div className="flex justify-between text-[20px] font-medium text-primary-3 leading-[26px]">
            <div>
              <span className="font-normal text-primary-7">Organized By :</span>
              Nattasha
            </div>
            <div>
              <TimeIcon />
              <span className="ml-[25px]">10:00 AM - 18:00 PM, Everyday</span>
            </div>
          </div>

          <div className="border-t-[1px]">
            <p
              className={`${shippori_Mincho.className} text-[25px] text-primary-3 leading-[30px] py-[10px]`}
            >
              Education for Poor Children
            </p>
            <p className="text-[20px] text-primary-7">
              There are many varieations of passages of injected Lorem Ipsum
              available,but the majority have.
            </p>
          </div>

          <div className="flex justify-start items-center px-[16px] space-x-[10px] bg-primary-5 w-[400px] h-[60px] font-medium text-[18px]">
            <div>
              <Image alt="img" src="/image/map.png" width={18} height={27} />
            </div>
            <div>
              <p>Dark Spurt, San Francisco, CA 94528</p>
            </div>
          </div>
        </div>
        {/* block right */}
        <div className="space-y-[15px]">
          {mockData?.map((x, index) => (
            <div key={index} className="h-[160px] border-b-[1px] ">
              <div className="flex space-x-[20px]">
                <div
                  className={`${shippori_Mincho.className} w-[116px] h-[140px] bg-primary-3 text-white text-[25px] leading-[30px] capitalize flex justify-center items-center text-center`}
                >
                  <p>
                    <span className="text-[60px] leading-[72px]">
                      {x?.date}
                    </span>{" "}
                    {x?.month}
                  </p>
                </div>
                <div className="text-[20px] text-primary-7 w-[434px]">
                  <p>
                    Organized By:
                    <span className="text-primary-2 font-medium">
                      {" "}
                      {x?.creator}
                    </span>
                  </p>
                  <p
                    className={`${shippori_Mincho.className} text-[25px] text-primary-3`}
                  >
                    {x?.title}
                  </p>
                  <p>{x?.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
