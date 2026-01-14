import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function SectionTwo()
{
    return(
         <div className="w-full pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-140 items-start sm:items-center">
            <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#424242]">
              Explore Features By Category
            </h1>

            <Link
              href="/explore"
              className="
      px-3 py-2.5
      text-white bg-[#10B4D4]
      rounded-[8px]
      font-[600]
      text-[14px]
      sm:ml-auto
    "
            >
              Explore More
            </Link>
          </div>
          <h1 className="text-[12px] font-[400] text-[#757575] mt-1">
            Dive deep into each feature set and see how they work together to
            power your educational business.
          </h1>
          <Tabs defaultValue="scheduling" className="mt-6 sm:mt-8">
            <TabsList
              className="
          w-full
          grid grid-cols-3
          overflow-x-auto
          sm:overflow-visible
        "
            >
              <TabsTrigger className="cursor-pointer" value="scheduling">
                Scheduling
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="payments">
                Payments
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="analytics">
                Analytics
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account"></TabsContent>
          </Tabs>
          <div
            className="
        bg-[#10B4D4]
        rounded-[16px]
        mt-5 sm:mt-3
        flex flex-col lg:flex-row
        gap-8 lg:gap-50
        px-5 sm:px-0
      "
          >
            <div
              className="
          max-w-md
          pt-8 sm:pt-22
          pl-0 sm:pl-10
          text-center lg:text-left
        "
            >
              <h1 className="text-[20px] sm:text-[24px] font-[600] text-white">
                Smart Class Scheduling
              </h1>
              <h1 className="text-[12px] font-[400] text-white mt-2">
                Effortlessly manage your classes with our smart scheduling
                tools. Set up recurring lessons, manage capacity, and avoid
                conflicts with ease. Get automated reminders and notifications.
                Optimize your scheduling with ease.
              </h1>

              <div
                className="
            mt-5
            flex flex-col sm:flex-row
            gap-3 sm:gap-2
            justify-center lg:justify-start
          "
              >
                <Link
                  href="/scheduling"
                  className="px-3 py-2.5 bg-white text-black rounded-[8px] text-[14px] font-[600]"
                >
                  Try It Now
                </Link>
                <Link
                  href="/learnmore"
                  className="px-3 py-2.5 text-white rounded-[8px] text-[14px] font-[600] hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                className="rounded-[8px] pt-6 sm:pt-10 pb-6 sm:pb-10 w-full max-w-[350px] sm:max-w-none"
                src="/working.png"
                alt="working"
                width={400}
                height={1}
              />
            </div>
          </div>
        </div>
      </div>
    );
}