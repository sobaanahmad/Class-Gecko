import { Calendar, Info } from "lucide-react";

export default function SectionTwo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
      <div className="bg-white border-none rounded-[12px] pl-5 pt-4 pr-5 pb-4 lg:text-left text-center">
        <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
          <h1 className="text-[#424242] text-[14px] font-[400]">
            Total Students
          </h1>
          <Info className="size-3 text-[#212121]" />
        </div>
        <h1 className="text-[32px] font-[600] -mt-1">01</h1>
        <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
          <Calendar className="size-3 text-[#10B4D4]" />
          <h1 className="text-[#10B4D4] text-[12px] font-[500]">
            0 in last 28 days
          </h1>
        </div>
      </div>
      <div className="bg-white border-none rounded-[12px] pl-5 pt-4 pr-4 pb-4 lg:text-left text-center">
        <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
          <h1 className="text-[#424242] text-[14px] font-[400]">
            Total enrolled students
          </h1>
          <Info className="size-3 text-[#212121]" />
        </div>
        <h1 className="text-[32px] font-[600] -mt-1">00</h1>
        <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
          <Calendar className="size-3 text-[#10B4D4]" />
          <h1 className="text-[#10B4D4] text-[12px] font-[500]">
            0 in last 28 days
          </h1>
        </div>
      </div>
      <div className="bg-white border-none rounded-[12px] pl-5 pt-4 pr-5 pb-4 lg:text-left text-center">
        <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
          <h1 className="text-[#424242] text-[14px] font-[400]">
            Total families
          </h1>
          <Info className="size-3 text-[#212121]" />
        </div>
        <h1 className="text-[32px] font-[600] -mt-1">02</h1>
        <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
          <Calendar className="size-3 text-[#10B4D4]" />
          <h1 className="text-[#10B4D4] text-[12px] font-[500]">
            1 in last 28 days
          </h1>
        </div>
      </div>
    </div>
  );
}
