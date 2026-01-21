import { Info, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import Image from "next/image";

export default function SectionThree() {
  return (
    <>
      <div className="mt-5 bg-white rounded-[12px] pl-4 pr-4">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer hover:no-underline">
              <div className="flex flex-row gap-2 items-center">
                <h1 className="text-[18px] font-[600]">Lessons</h1>
                <Info className="size-4 text-[#212121]" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              <p className="text-[#424242] text-[12px] font-[400]">Today</p>
              <div className="bg-[#EBF1FF] rounded-[48px] pt-1 pb-1 pl-2.5 pr-2.5 inline-flex gap-2 items-center w-max">
                <h1 className="text-[#424242] text-[12px] font-[500]">
                  Sarah m/m (Me)
                </h1>
                <X className="size-3 cursor-pointer" />
              </div>
              <div className="bg-[#F5F5F5] rounded-[4px] flex flex-col items-center justify-center pt-4 pb-4">
                <div className="">
                  <Image
                    src="/nolessontoday.png"
                    alt="nolessons"
                    width={60}
                    height={1}
                  />
                </div>
                <h1 className="text-[#424242] text-[14px] font-[400]">
                  No Lessons for Today
                </h1>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-5 bg-white rounded-[12px] pl-4 pr-4">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer hover:no-underline">
              <div className="flex flex-row gap-2 items-center">
                <h1 className="text-[18px] font-[600]">Billing</h1>
                <Info className="size-4 text-[#212121]" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2"></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-5 bg-white rounded-[12px] pl-4 pr-4">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer hover:no-underline">
              <div className="flex flex-row gap-2 items-center">
                <h1 className="text-[18px] font-[600]">Enrollment Trends</h1>
                <Info className="size-4 text-[#212121]" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2"></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
