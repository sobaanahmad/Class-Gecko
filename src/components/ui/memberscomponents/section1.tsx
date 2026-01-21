"use client";
import { useState } from "react";
import { Download, Info } from "lucide-react";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../sheet";
import { Input } from "../input";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../field";
import { Switch } from "../switch";

export default function SectionOne() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-[28px] font-[600]">Members</h1>
          <h1 className="text-[#757575] text-[12px] font-[400]">
            Manage students and parents
          </h1>
        </div>
        <div>
          <div className="md:flex flex-row gap-2">
            <Button className="bg-[#F5F5F5] hover:bg-[#EEEEEE] border border-gray-300 rounded-[8px] text-black px-5 cursor-pointer mb-2 md:mb-0">
              <span className="flex items-center gap-2">
                <Download className="size-4" />
                Export
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-[#10B4D4] hover:bg-[#10B4D4] cursor-pointer">
                  Add Members
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col items-center border-none">
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={() => setOpen(true)}
                  >
                    Add Family
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Add Student
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="rounded-tl-[16px] rounded-bl-[16px] p-0 flex flex-col h-full">
          <div className="px-6 pt-6">
            <SheetTitle className="text-[#212121] text-[15px] font-[600]">
              Create Family
            </SheetTitle>
            <SheetDescription className="text-[#757575] text-[12px] font-[400] -mt-1">
              Provide the information below to create family.
            </SheetDescription>
          </div>
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <div className="mt-4">
              <h1 className="text-[#424242] text-[14px] font-[500]">
                First Name
              </h1>
              <Input
                className="mt-1 py-6 rounded-[8px]"
                placeholder="Write Here"
              />
            </div>
            <div className="mt-2">
              <h1 className="text-[#424242] text-[14px] font-[500]">
                Last Name
              </h1>
              <Input
                className="mt-1 py-6 rounded-[8px]"
                placeholder="Write Here"
              />
            </div>
            <div className="mt-2">
              <h1 className="text-[#424242] text-[14px] font-[500]">Email</h1>
              <Input
                className="mt-1 py-6 rounded-[8px]"
                placeholder="Write Here"
              />
            </div>
            <div className="mt-2">
              <Field orientation="horizontal" className="max-w-sm">
                <FieldContent>
                  <FieldLabel
                    className="text-[#424242] text-[14px] font-[500]"
                    htmlFor="switch-focus-mode"
                  >
                    Send invitation to sign up for Class Manager
                  </FieldLabel>
                  <FieldDescription className="text-[#757575] text-[12px] font-[500]">
                    Please provide the email address of the primary contact so
                    we can send an invitation.
                  </FieldDescription>
                </FieldContent>
                <Switch className="cursor-pointer" id="switch-focus-mode" />
              </Field>
            </div>
            <div className="mt-2 bg-[#EBF1FF] rounded-[8px] p-3">
              <div className="flex flex-row gap-4">
                <Info className="size-8 shrink-0" />
                <h1 className="text-[#757575] text-[14px] font-[400]">
                  Your members won't be able to use the portal until you have
                  set up our online payment provider.
                </h1>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-[#424242] text-[14px] font-[500]">Phone</h1>
              <Input
                className="mt-1 py-6 rounded-[8px]"
                placeholder="Write Here"
              />
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="md:flex flex-row gap-2 justify-between">
              <Button className="text-[#212121] bg-white border border-[#EEEEEE] text-[14px] font-[600] py-5 px-10">
                Create & Add Another
              </Button>
              <Button className="text-[#F5F5F5] bg-[#10B4D4] text-[14px] font-[600] py-5 mt-2 md:mt-0">
                Create Family
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:grid-col-4 gap-3 mt-5">
        {[
          { label: "Total Members", value: "01", img: "/blueperson.png" },
          { label: "Students", value: "04", img: "/redperson.png" },
          { label: "Families", value: "03", img: "/greenperson.png" },
          { label: "Trial Members", value: "01", img: "/yellowdate.png" },
        ].map((item) => (
          <div
            key={item.label}
            className="
              bg-white rounded-[12px]
              px-4 py-4 sm:px-5
              text-center lg:text-left
            "
          >
            <div
              className="
                flex flex-col sm:flex-row
                items-center
                gap-3 sm:gap-4
                justify-center lg:justify-start
              "
            >
              <Image
                src={item.img}
                alt={item.label}
                width={40}
                height={40}
                className="sm:w-[45px] lg:w-[55px]"
              />
              <div className="flex flex-col">
                <h1 className="text-[#424242] text-[12px] sm:text-[14px] font-[500]">
                  {item.label}
                </h1>
                <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[600] -mt-1">
                  {item.value}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
