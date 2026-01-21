import Link from "next/link";
import { Button } from "../button";

export default function SectionOne() {
  return (
    <div className="flex flex-col">
      <h1 className="text-[28px] font-[600] emoji-font">Hello, Sarah 👋</h1>
      <div className="bg-[#EBF1FF] border border-[#D8E2FF] rounded-[12px] mt-2 pb-1">
        <div className="flex flex-col lg:flex-row gap-1">
          <div className="flex-1">
            <h1 className="text-[18px] font-[600] pt-2 pl-5 text-center lg:text-left">
              Start taking payments
            </h1>
            <h1 className="text-[14px] font-[400] pt-1 pl-5 pb-2 lg:pr-5 text-center lg:text-left">
              Set up your account with a payment provider. Once completed, your
              customers can start using their portal, booking classes and more.
            </h1>
          </div>
          <div className="flex justify-center lg:justify-end items-center mr-5 mb-2 lg:mb-0">
            <Link href="/setuppayment">
              <Button className="bg-[#10B4D4] hover:bg-[#0f9db8] cursor-pointer rounded-[8px] text-white text-[14px] font-[600] py-5">
                Setup Payment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
