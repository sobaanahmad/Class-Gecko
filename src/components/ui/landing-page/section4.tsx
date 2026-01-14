import Image from "next/image";

export default function SectionFour() {
  return (
    <div className="w-full bg-[#10B4D4] pb-15">
      <div className="max-w-6xl mx-auto px-6 pt-20">
        <h1 className="text-[32px] font-[400] text-white text-center pb-3">
          Why Choose Class Gecko?
        </h1>
        <h1 className="text-[12px] font-[400] text-white text-center pb-10">
          Discover the benefits that make Class Gecko the preferred choice for
          thousands of activity providers and families worldwide.
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="shadow shadow-md w-[355px] h-[165px] mt-3 rounded-[12px] bg-white">
            <Image
              src="/savetime.png"
              alt="logo"
              className="mx-auto pt-4"
              width={50}
              height={10}
            />
            <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
              Save Time
            </h1>
            <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
              Automate scheduling, payments, and communications to focus on what
              matters most.
            </h2>
          </div>
          <div className="shadow shadow-md w-[355px] h-[180px] mt-3 rounded-[12px] bg-white">
            <Image
              src="/secureandreliable.png"
              alt="logo"
              className="mx-auto pt-4"
              width={50}
              height={10}
            />
            <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
              Secure and Reliable
            </h1>
            <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
              Bank-level security with 99.9% uptime ensures your data is always
              safe and accessible.
            </h2>
          </div>
          <div className="shadow shadow-md w-[354px] h-[180px] mt-3 rounded-[12px] bg-white">
            <Image
              src="/mobiledesign.png"
              alt="logo"
              className="mx-auto pt-4"
              width={50}
              height={10}
            />
            <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
              Mobile-First Design
            </h1>
            <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
              Access everything on any device with our responsive design and
              dedicated mobile apps.
            </h2>
          </div>
          <div className="shadow shadow-md w-[355px] h-[180px] mt-3 rounded-[12px] bg-white">
            <Image
              src="/streamlinedpayments.png"
              alt="logo"
              className="mx-auto pt-4"
              width={50}
              height={10}
            />
            <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
              Streamlined Payments
            </h1>
            <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
              Automate scheduling, payments, and communications to focus on what
              matters most.
            </h2>
          </div>
          <div className="shadow shadow-md w-[355px] h-[165px] mt-3 rounded-[12px] bg-white">
            <Image
              src="/comms.png"
              alt="logo"
              className="mx-auto pt-4"
              width={50}
              height={10}
            />
            <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
              Better Communication
            </h1>
            <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
              Keep everyone connected with built-in messaging, notifications,
              and announcements.
            </h2>
          </div>
          <div className="shadow shadow-md w-[354px] h-[180px] mt-3 rounded-[12px] bg-white">
            <Image
              src="/analytics.png"
              alt="logo"
              className="mx-auto pt-4"
              width={50}
              height={10}
            />
            <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
              Insightful Analytics
            </h1>
            <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
              Track progress, attendance, and performance with comprehensive
              reporting tools.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
