import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SectionSix(){
    return(
        <div className="w-full pb-15">
        <div className="max-w-5xl mx-auto px-6 pt-20">
          <h1 className="text-[32px] font-[600] text-[#424242] text-center">
            Frequently Asked Questions
          </h1>
          <h1 className="text-[12px] font-[400] text-[#757575] text-center mb-10">
            Get answers to common questions about Class Gecko. Can't find what
            you're looking for? Contact our support team
          </h1>
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  How long does it take to setup Class Gecko for my school?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  Is my data secure with Class Gecko?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  Can Class Gecko integrate with our existing systems?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  What payment methods do you support?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  Do you offer training for teachers and staff?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  Can parents access Class Gecko on mobile devices?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  What happens if we need to cancel our subscription?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  How does pricing work for different school sizes?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  Can we customize Class Gecko with our school branding?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger className="cursor-pointer hover:no-underline text-[18px] font-[600] text-[#424242]">
                  What kind of support do you provide?
                </AccordionTrigger>
                <AccordionContent>
                  <p></p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
}