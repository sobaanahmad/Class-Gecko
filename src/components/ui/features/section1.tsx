import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SectionOne(){
    return(
        <div
        className="w-full pt-18 pb-10 flex flex-col items-center
  bg-[linear-gradient(to_bottom,#C7EAF6_0%,#C7EAF6_10%,#ffffff_100%)]"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center ">
          <div className="flex flex-row gap-2 items-center justify-center">
            <Zap className="size-5 text-[#10B4D4]" />
            <h1 className="text-[14px] font-[400] text-[#10B4D4] text-center">
              Powerful Features
            </h1>
          </div>
          <div className="max-w-3xl justify-center items-center flex flex-col">
            <h1 className=" text-[64px] font-[600] text-center text-[#212121] leading-[1]">
              Everything You Need to Run Your Classes.
            </h1>
            <h1 className=" text-[20px] font-[400] text-center text-[#757575] mt-2">
              From class scheduling to payment processing, Class Gecko provides
              all the tools you need to focus on what matters most your
              students.
            </h1>
          </div>
          <Link
            className="py-2 px-4 bg-[#10B4D4] text-white rounded-[8px] mt-5"
            href="/explore"
          >
            Explore Now
          </Link>
        </div>
        <Image
          className="mt-10"
          src="/dash5.png"
          alt="dashboard"
          width={1100}
          height={1}
        />
      </div>
    );
}