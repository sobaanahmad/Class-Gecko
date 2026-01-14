import Image from "next/image";
import Link from "next/link";

export default function SectionOne() {
  return (
    <div className="w-full bg-[#10B4D4] relative overflow-hidden">
      <div className="relative z-10 px-6 lg:px-16 pt-24 pb-24 max-w-lg">
        <h1 className="text-white font-[600] text-[61px] leading-[1]">
          Simplify Class Management for FREE with Class Gecko
        </h1>
        <h1 className="text-white font-[300] text-[18px] leading-[1.1] mt-6">
          Class Gecko is the all in one class booking system that simplifies
          everything from registrations and finances to safeguarding and
          attendance. Devote your time to making a difference and let us handle
          the admin, so you can focus on your passion.
        </h1>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/signin"
            className="text-white text-[14px] font-[600] px-4 py-2.5 bg-[#CC1072] rounded-[8px]"
          >
            Login to Account
          </Link>
          <Link
            href="/demo"
            className="text-white text-[14px] font-[600] px-4 py-2.5 bg-[#10B4D4] rounded-[8px]"
          >
            Watch Demo
          </Link>
        </div>
        <div className="flex flex-row gap-8 w-[500px] mt-7">
          <div className="flex flex-col w-[100px]">
            <h1 className="text-[32px] font-[600] text-white mt-6">10K+</h1>
            <h1 className="text-[12px] font-[400] text-white">Active Users</h1>
          </div>
          <div className="flex flex-col w-[100px]">
            <h1 className="text-[32px] font-[600] text-white mt-6">500+</h1>
            <h1 className="text-[12px] font-[400] text-white">
              Activity Providers
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[32px] font-[600] text-white mt-6">15+</h1>
            <h1 className="text-[12px] font-[400] text-white">
              Hours Per Week Saved on Admin
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <Image
          src="/smilinggirl.png"
          alt="Smiling Girl"
          fill
          className="object-cover object-right"
          priority
        />
      </div>
    </div>
  );
}
