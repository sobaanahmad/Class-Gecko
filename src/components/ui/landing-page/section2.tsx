import { CircleCheck } from "lucide-react";
import { Button } from "../button";
import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="w-full bg-[linear-gradient(to_bottom,#ffffff_0%,#C7EAF6_50%,#C7EAF6_50%,#ffffff_100%)] pt-18">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-[32px] font-[600] text-center text-[#424242]">
          Two Powerful Portals, One Platform
        </h1>
        <h1 className="text-[12px] font-[400] text-center text-[#757575]">
          Designed specifically for families and educators, each portal provides
          tailored tools and features for seamless class management.
        </h1>
        <div>
          <div className="w-full flex flex-row gap-5">
            <div className="mt-30 w-[495px]">
              <h1 className="text-[28px] font-[600] text-[#424242]">
                Class Scheduling Made Easy
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575]">
                Say goodbye to time-consuming admin and streamline your class
                scheduling with an easy-to-use class scheduling software.
              </h1>
              <div className="flex flex-row gap-3 mt-5">
                <CircleCheck size={20} />
                <h1 className="text-[12px] font-[400] text-[#424242]">
                  Instantly view class availability with an attractive class
                  planner.
                </h1>
              </div>
              <div className="flex flex-row gap-3 mt-5 text-[#424242]">
                <CircleCheck size={20} />
                <h1 className="text-[12px] font-[400]">
                  Schedule free trials, make-up classes, and more, seamlessly.
                </h1>
              </div>
              <Button className="py-5 mt-5 cursor-pointer text-[14px] font-[600] bg-[#10B4D4] hover:bg-[#10B4D4] rounded-[8px]">
                Get Started Now
              </Button>
            </div>
            <div>
              <Image
                className="mt-10"
                src="/dash1.png"
                alt="dashboard"
                width={500}
                height={450}
              ></Image>
            </div>
          </div>
          <div className="w-full flex flex-row gap-5">
            <div>
              <Image
                className="mt-10"
                src="/dash2.png"
                alt="dashboard"
                width={500}
                height={450}
              ></Image>
            </div>
            <div className="mt-30 w-[495px] ml-15">
              <h1 className="text-[28px] font-[600] text-[#424242]">
                Sleek Professional Look
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575]">
                Stand out from the competition with a professional, modern
                design. Our intuitive software is built to be simple and easy to
                use—for you, your customers, and your teachers.
              </h1>
              <div className="flex flex-row gap-3 mt-5">
                <CircleCheck size={20} />
                <h1 className="text-[12px] font-[400] text-[#424242]">
                  Great experience for the whole studio.
                </h1>
              </div>
              <Button className="py-5 mt-6 cursor-pointer text-[14px] font-[600] bg-[#10B4D4] hover:bg-[#10B4D4] rounded-[8px]">
                Get Started Now
              </Button>
            </div>
          </div>
          <div className="w-full flex flex-row gap-5">
            <div className="mt-30 w-[495px]">
              <h1 className="text-[28px] font-[600] text-[#424242]">
                Take Your Admin Anywhere
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575]">
                Check student details, take attendance, track payments, and
                update key information from anywhere.
              </h1>
              <div className="flex flex-row gap-3 mt-5">
                <CircleCheck size={20} />
                <h1 className="text-[12px] font-[400] text-[#424242]">
                  Class Jecko works seamlessly across all devices and platforms,
                  for no extra charge.
                </h1>
              </div>
              <Button className="py-5 mt-5 cursor-pointer text-[14px] font-[600] bg-[#10B4D4] hover:bg-[#10B4D4] rounded-[8px]">
                Get Started Now
              </Button>
            </div>
            <div>
              <Image
                className="mt-10"
                src="/dash3.png"
                alt="dashboard"
                width={500}
                height={450}
              ></Image>
            </div>
          </div>
          <div className="w-full flex flex-row gap-5">
            <div>
              <Image
                className="mt-10"
                src="/dash4.png"
                alt="dashboard"
                width={500}
                height={450}
              ></Image>
            </div>
            <div className="mt-30 w-[495px] ml-15">
              <h1 className="text-[28px] font-[600] text-[#424242]">
                Tailored To YOU
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575]">
                Our class management software is an extension of your business.
                To ensure it reflects your unique identity, customize the
                appearance; add your logo, choose your color scheme, and more.
              </h1>
              <div className="flex flex-row gap-3 mt-5">
                <CircleCheck size={20} />
                <h1 className="text-[12px] font-[400] text-[#424242]">
                  Send out updates to your members with branded emails.
                </h1>
              </div>
              <Button className="py-5 mt-6 cursor-pointer text-[14px] font-[600] bg-[#10B4D4] hover:bg-[#10B4D4] rounded-[8px]">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
