"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Logo = () => (
  <Link href="/dashboard" className="flex items-center">
    <div className="relative w-24 sm:w-28 md:w-32 h-12 flex-shrink-0">
      <Image
        src="/logo.png"
        alt="Company Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  </Link>
);

export default function SetupPaymentSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-black flex flex-col gap-10">
        <div className="lg:hidden flex items-center justify-between p-4">
          <Logo />
          <button onClick={() => setOpen(true)}>
            <Menu className="text-white size-6" />
          </button>
        </div>
        {open && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
        <div
          className={`
    fixed lg:static top-0 left-0 z-50
    min-h-screen w-[265px] bg-black
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0

    flex flex-col justify-between
  `}
        >
          <div>
            <div className="lg:hidden flex justify-end p-4">
              <button onClick={() => setOpen(false)}>
                <X className="text-white size-6" />
              </button>
            </div>
            <div className="pt-8 px-5">
              <Logo />
              <h1 className="text-[24px] font-[600] text-white mt-5 leading-8">
                Class Manager partners with Stripe for secure payments and
                financial services.
              </h1>
            </div>
            <div className="mt-2 ml-1">
              <Link href="/dashboard">
                <Button className="bg-black hover:bg-black text-white cursor-pointer">
                  <div className="flex flex-row gap-2">
                    <ArrowLeft className="size-5 cursor-pointer" />
                    <h1 className="text-[14px] font-[400] hover:underline">
                      Return to Class Gecko
                    </h1>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-[#1976D2]">
            <div className="pt-4 pl-6 flex flex-row gap-1.5 items-center">
              <h1 className="text-white text-[14px] font-[400]">Powered by</h1>
              <div className="mt-1 cursor-pointer">
                <Image src="/stripelogo.png" alt="logo" width={35} height={1} />
              </div>
            </div>
            <div className="pt-3 pl-6 flex flex-row gap-5">
              <h1 className="text-[#F5F5F5] text-[12px] font-[500] cursor-pointer hover:underline">
                Contact
              </h1>
              <h1 className="text-[#F5F5F5] text-[12px] font-[500] cursor-pointer hover:underline">
                Terms
              </h1>
              <h1 className="text-[#F5F5F5] text-[12px] font-[500] cursor-pointer hover:underline">
                Privacy
              </h1>
            </div>
            <div className="pt-3 pl-6 pb-4 flex flex-row gap-2 items-center">
              <h1 className="text-[#F5F5F5] text-[12px] font-[500]">
                English (US)
              </h1>
              <ChevronDown className="text-[#F5F5F5] size-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
