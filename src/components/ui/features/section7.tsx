import Link from "next/link";

export default function SectionSeven()
{
    return(
         <div className="w-full pb-10 bg-[linear-gradient(90deg,_white_0%,_#C7EAF6_35%,_#C7EAF6_65%,_white_100%)]">
        <div className="max-w-5xl mx-auto px-6 pt-10">
          <h1 className="text-[32px] font-[600] font-[#424242] text-center">
            Like What You See?
          </h1>
          <h1 className="text-[12px] font-[400] font-[#424242] text-center">
            Start your FREE software subscription, with no hidden costs.
          </h1>
          <div className="flex flex-row gap-2 mt-10 justify-center">
            <Link
              href="/demo"
              className="py-3 px-4 bg-[#10B4D4] text-[14px] font-[600] text-white rounded-[8px]"
            >
              Book a Demo
            </Link>
            <Link
              href="/register"
              className="py-3 px-3 text-[14px] font-[600] text-black rounded-[8px] hover:underline"
            >
              Register Your Account
            </Link>
          </div>
        </div>
      </div>
    );
}