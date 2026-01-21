"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import Link from "next/link";

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

export default function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const isDashboardActive = pathname === "/dashboard";
  const isMembersActive =
    pathname === "/members" ||
    pathname === "/members/families" ||
    pathname === "/members/students";
  const isFamiliesActive = pathname === "/members/families";
  const isStudentsActive = pathname === "/members/students";

  return (
    <Sidebar
      className="
        bg-[#EEEEEE]
        md:[--sidebar-width:9rem]
        lg:[--sidebar-width:15rem]
      "
    >
      <SidebarHeader className="flex items-center pt-1 pb-2 bg-[#EEEEEE]">
        <Logo />
      </SidebarHeader>
      <SidebarContent className="px-1 lg:px-5 bg-[#EEEEEE] pt-7">
        <SidebarMenu className="flex flex-col gap-2 items-center">
          <SidebarMenuItem
            className="w-full p-0"
            onClick={() => router.push("/dashboard")}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="dashboard" className="w-full">
                <AccordionTrigger
                  className={`w-full flex items-center justify-between px-2 py-3 ${
                    isDashboardActive
                      ? "bg-[#10B4D4] text-white"
                      : "bg-[#EEEEEE] text-black"
                  } hover:no-underline cursor-pointer`}
                >
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="size-4" />
                    <div className="text-[14px] font-[400]">Dashboard</div>
                  </div>
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </SidebarMenuItem>
          <SidebarMenuItem
            className="w-full p-0"
            onClick={() => router.push("/members")}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={isMembersActive ? "members" : undefined}
            >
              <AccordionItem value="members" className="w-full">
                <AccordionTrigger
                  className={`w-full flex items-center justify-between px-2 py-3 ${
                    isMembersActive
                      ? "bg-[#10B4D4] text-white"
                      : "bg-[#EEEEEE] text-black"
                  } hover:no-underline cursor-pointer`}
                >
                  <div className="flex items-center gap-2">
                    <Users className="size-4" />
                    <div className="text-[14px] font-[400]">Members</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-10 flex flex-col gap-2 mt-1">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/members/families");
                    }}
                    className={`text-[14px] font-[400] cursor-pointer ${
                      isFamiliesActive ? "text-[#10B4D4]" : "text-[#424242]"
                    }`}
                  >
                    - Families
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/members/students");
                    }}
                    className={`text-[14px] font-[400] cursor-pointer ${
                      isStudentsActive ? "text-[#10B4D4]" : "text-[#424242]"
                    }`}
                  >
                    - Students
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
