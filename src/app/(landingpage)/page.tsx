import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/*section 1*/}
      <div className="w-full bg-[#10B4D4] relative overflow-hidden">
        <div className="relative z-10 px-6 lg:px-16 pt-24 pb-24 max-w-lg">
          <h1 className="text-white font-[600] text-[61px] leading-[1]">
            Simplify Class Management for FREE with Class Gecko
          </h1>
          <h1 className="text-white font-[300] text-[18px] leading-[1.1] mt-6">
            Class Gecko is the all in one class booking system that simplifies
            everything from registrations and finances to safeguarding and
            attendance. Devote your time to making a difference and let us
            handle the admin, so you can focus on your passion.
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
              <h1 className="text-[12px] font-[400] text-white">
                Active Users
              </h1>
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
      {/*section 2*/}
      <div className="w-full bg-[linear-gradient(to_bottom,#ffffff_0%,#C7EAF6_50%,#C7EAF6_50%,#ffffff_100%)] pt-18">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-[32px] font-[600] text-center text-[#424242]">
            Two Powerful Portals, One Platform
          </h1>
          <h1 className="text-[12px] font-[400] text-center text-[#757575]">
            Designed specifically for families and educators, each portal
            provides tailored tools and features for seamless class management.
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
                  design. Our intuitive software is built to be simple and easy
                  to use—for you, your customers, and your teachers.
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
                    Class Jecko works seamlessly across all devices and
                    platforms, for no extra charge.
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
                  Our class management software is an extension of your
                  business. To ensure it reflects your unique identity,
                  customize the appearance; add your logo, choose your color
                  scheme, and more.
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
      {/*section 3*/}
      <div className="w-full pt-25 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <Image
              className="mt-10"
              src="/phonelooking.png"
              alt="dashboard"
              width={500}
              height={1}
            ></Image>
            <div className="mt-10 lg:mt-18 w-full lg:w-[550px] lg:ml-7 text-center lg:text-left">
              <h1 className="text-[28px] font-[600] text-[#424242]">
                About Class Gecko
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575]">
                Founded by coaches and educators, Class Gecko was created to
                solve the frustration activity providers face when managing
                bookings with outdated, fragmented systems. We believe the focus
                should be on the experience, not the admin.
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575] mt-3">
                Our platform unites everything activity providers, coaches, and
                families need into one intuitive, powerful solution that grows
                with your business.
              </h1>
              <div className="flex flex-row gap-3">
                <div className="shadow shadow-md w-[173px] h-[160px] mt-3 rounded-[12px] bg-white">
                  <Image
                    src="/ourmission.png"
                    alt="logo"
                    className="mt-4 mx-auto"
                    width={45}
                    height={10}
                  />
                  <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
                    Our Mission
                  </h1>
                  <h2 className="text-[12px] font-[400] text-[#757575] text-center pl-2 pr-2">
                    Simplify Class Management for everyone.
                  </h2>
                </div>
                <div className="shadow shadow-md w-[173px] h-[180px] mt-3 rounded-[12px] bg-white">
                  <Image
                    src="/ourvalues.png"
                    alt="logo"
                    className="mt-4 mx-auto"
                    width={50}
                    height={10}
                  />
                  <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
                    Our Values
                  </h1>
                  <h2 className="text-[12px] font-[400] text-[#757575] text-center pl-3 pr-3">
                    User-first design and data security.
                  </h2>
                </div>
                <div className="shadow shadow-md w-[173px] h-[160px] mt-3 rounded-[12px] bg-white">
                  <Image
                    src="/ourvision.png"
                    alt="logo"
                    className="mt-4 mx-auto"
                    width={50}
                    height={10}
                  />
                  <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
                    Our Vision
                  </h1>
                  <h2 className="text-[12px] font-[400] text-[#757575] text-center pl-2 pr-2">
                    Transform how activity providers scale.
                  </h2>
                </div>
              </div>
              <Button className="py-5 mt-5 cursor-pointer text-[14px] font-[600] bg-[#10B4D4] hover:bg-[#10B4D4] rounded-[8px]">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/*section 4*/}
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
                Automate scheduling, payments, and communications to focus on
                what matters most.
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
                Bank-level security with 99.9% uptime ensures your data is
                always safe and accessible.
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
                Automate scheduling, payments, and communications to focus on
                what matters most.
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
      {/*section 5*/}
      <div className="w-full pb-15 mt-10">
        <div className="max-w-7xl mx-auto px-6 pt-20 bg-[#C7EAF6] rounded-[24px]">
          <h1 className="text-[32px] font-[600] text-black text-center pb-2">
            Loved by Activity Providers and Families
          </h1>
          <h1 className="text-[12px] font-[400] text-black text-center pb-6">
            See what our community has to say about their experience with Class
            Gecko.
          </h1>
          <div className="flex flex-wrap gap-5 justify-center pb-25">
            <div className="shadow shadow-md w-[360px] h-[205px] mt-3 rounded-[12px] bg-white">
              <div className="flex flex-row gap-2 mx-5 mb-4 mt-2">
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className="pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
              </div>
              <h1 className="text-[12px] font-[400] text-[#424242] text-left mt-2 pl-5 pr-2">
                "Class Gecko has revolutionized how we manage our after-school
                programs. The automated scheduling and payment processing has
                saved us countless hours each week."
              </h1>
              <div className="flex flex-row">
                <div className="w-[50px] h-[50px] bg-[#EEEEEE] rounded-full mx-4 my-4"></div>
                <div className="flex flex-col leading-[0.9] my-4">
                  <h1 className="text-[18px] font-[600] text-[#424242]">
                    Sarah
                  </h1>
                  <h1 className="text-[18px] font-[600] text-[#424242]">
                    Johnson
                  </h1>
                  <h1 className="text-[12px] font-[400] text-[#424242] mt-2">
                    Oakwood Elementary
                  </h1>
                </div>
              </div>
            </div>
            <div className="shadow shadow-md w-[360px] h-[205px] mt-3 rounded-[12px] bg-white">
              <div className="flex flex-row gap-2 mx-5 mb-4 mt-2">
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className="pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
              </div>
              <h1 className="text-[12px] font-[400] text-[#424242] text-left mt-2 pl-5 pr-2">
                "Class Gecko has revolutionized how we manage our after-school
                programs. The automated scheduling and payment processing has
                saved us countless hours each week."
              </h1>
              <div className="flex flex-row">
                <div className="w-[50px] h-[50px] bg-[#EEEEEE] rounded-full mx-4 my-4"></div>
                <div className="flex flex-col leading-[0.9] my-4">
                  <h1 className="text-[18px] font-[600] text-[#424242]">
                    Sarah
                  </h1>
                  <h1 className="text-[18px] font-[600] text-[#424242]">
                    Johnson
                  </h1>
                  <h1 className="text-[12px] font-[400] text-[#424242] mt-2">
                    Oakwood Elementary
                  </h1>
                </div>
              </div>
            </div>
            <div className="shadow shadow-md w-[360px] h-[205px] mt-3 rounded-[12px] bg-white">
              <div className="flex flex-row gap-2 mx-5 mb-4 mt-2">
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className="pt-4"
                  width={25}
                  height={10}
                />
                <Image
                  src="/star1.png"
                  alt="logo"
                  className=" pt-4"
                  width={25}
                  height={10}
                />
              </div>
              <h1 className="text-[12px] font-[400] text-[#424242] text-left mt-2 pl-5 pr-2">
                "Class Gecko has revolutionized how we manage our after-school
                programs. The automated scheduling and payment processing has
                saved us countless hours each week."
              </h1>
              <div className="flex flex-row">
                <div className="w-[50px] h-[50px] bg-[#EEEEEE] rounded-full mx-4 my-4"></div>
                <div className="flex flex-col leading-[0.9] my-4">
                  <h1 className="text-[18px] font-[600] text-[#424242]">
                    Sarah
                  </h1>
                  <h1 className="text-[18px] font-[600] text-[#424242]">
                    Johnson
                  </h1>
                  <h1 className="text-[12px] font-[400] text-[#424242] mt-2">
                    Oakwood Elementary
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*section 6*/}
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
      {/*section 7*/}
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
    </>
  );
}
