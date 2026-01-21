import { Info, Link2 } from "lucide-react";
import { Button } from "../button";
import Image from "next/image";

export default function SectionFive() {
  return (
    <div className="bg-white rounded-[12px] pt-2 pb-4 pl-4 pr-4 mt-5">
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-[18px] font-[600]">Recent Activity</h1>
        <Info className="size-4 text-[#212121]" />
        <Button className="bg-white hover:bg-white text-[#10B4D4] text-[14px] font-[600] px-1 ml-auto cursor-pointer hover:underline">
          View All
        </Button>
      </div>
      <div className="rounded-[4px] pt-2 pb-2 mt-2">
        <div className="flex flex-row gap-2 items-center">
          <div>
            <Image
              src="/recentactivitypfp.png"
              alt="pfp"
              width={45}
              height={1}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-1">
              <h1 className="text-[#424242] text-[13px] font-[500]">
                Emma Wilson
              </h1>
              <h1 className="text-[#424242] text-[13px] font-[400]">
                joined the waiting list for class 1
              </h1>
            </div>
            <h1 className="text-[#757575] text-[11px] font-[500] mb-1">
              30 Sept, Mon, 1:00 PM
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 h-[1px] bg-gray-200" />
      <div className="rounded-[4px] pt-2 pb-2 mt-2">
        <div className="flex flex-row gap-2 items-center">
          <div>
            <Image
              src="/recentactivitypfp.png"
              alt="pfp"
              width={45}
              height={1}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-1">
              <h1 className="text-[#424242] text-[13px] font-[500]">
                Emma Wilson
              </h1>
              <h1 className="text-[#424242] text-[13px] font-[400]">
                joined the waiting list for class 1
              </h1>
            </div>
            <h1 className="text-[#757575] text-[11px] font-[500] mb-1">
              30 Sept, Mon, 1:00 PM
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 h-[1px] bg-gray-200" />
      <div className="rounded-[4px] pt-2 pb-2 mt-2">
        <div className="flex flex-row gap-2 items-center">
          <div>
            <Image
              src="/recentactivitypfp.png"
              alt="pfp"
              width={45}
              height={1}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-1">
              <h1 className="text-[#424242] text-[13px] font-[500]">
                Emma Wilson
              </h1>
              <h1 className="text-[#424242] text-[13px] font-[400]">
                joined the waiting list for class 1
              </h1>
            </div>
            <h1 className="text-[#757575] text-[11px] font-[500] mb-1">
              30 Sept, Mon, 1:00 PM
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 h-[1px] bg-gray-200" />
    </div>
  );
}
