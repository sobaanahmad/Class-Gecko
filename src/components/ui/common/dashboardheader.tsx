import { Bell } from "lucide-react";
import { Input } from "../input";
import Image from "next/image";
import { SidebarTrigger } from "../sidebar";

export default function DashboardHeader() {
  return (
    <div className="w-full relative h-15 flex items-center justify-between px-2 lg:px-6">
      <div className="sm:w-[240px] md:w-[300px] lg:w-[400px] flex flex-row items-center">
        <SidebarTrigger className="md:hidden lg:hidden -ml-1 cursor-pointer hover:bg-white" />
        <Input
          placeholder="Search anything..."
          className="text-[12px] font-[400] text-[#BDBDBD] bg-[#F5F5F5] rounded-[12px] py-4 border-none px-5 md:ml-5 lg:ml-0"
        />
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Bell className="size-4 cursor-pointer" />
        <div className="cursor-pointer">
          <Image src="/pfp.png" alt="pfp" width={38} height={1} />
        </div>
      </div>
    </div>
  );
}
