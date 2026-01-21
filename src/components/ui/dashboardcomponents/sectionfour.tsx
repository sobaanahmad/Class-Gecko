import { Link2 } from "lucide-react";

export default function SectionFour() {
  return (
    <div className="bg-white rounded-[12px] pt-2 pb-4 pl-4 pr-4 mt-5 xl:mt-0">
      <h1 className="text-[18px] font-[600]">Links</h1>
      <div className="bg-[#F5F5F5] rounded-[4px] pl-3.5 pr-3.5 pt-2 pb-2 mt-2">
        <div className="flex flex-row items-center lg:gap-14 justify-between">
          <div>
            <h1 className="text-[#424242] text-[12px] font-[400]">Booking</h1>
            <h1 className="text-[#757575] text-[12px] font-[500] mb-1">
              https://my.classmanager.com/classgecko
            </h1>
          </div>
          <div>
            <Link2 className="text-[#212121] size-4 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] rounded-[4px] pl-3.5 pr-3.5 pt-2 pb-2 mt-2">
        <div className="flex flex-row items-center gap-15 justify-between">
          <div>
            <h1 className="text-[#424242] text-[12px] font-[400]">Login</h1>
            <h1 className="text-[#757575] text-[12px] font-[500] mb-1">
              https://my.classmanager.com/login
            </h1>
          </div>
          <div>
            <Link2 className="text-[#212121] size-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
