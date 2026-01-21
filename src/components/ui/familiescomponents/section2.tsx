"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SlidersVertical } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";
import { Input } from "../input";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import Link from "next/link";

const invoices = [
  {
    ID: "154655",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154656",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154657",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154658",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154659",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154650",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154651",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154652",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154359",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154559",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "124659",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "157659",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
  {
    ID: "154669",
    Member: "Emma Wilson",
    Family: "F1",
    Contact: "emma.wilson@email.com",
    Phone: "+1 (555) 123-4567",
    Type: "Family",
    Status: "Active",
    Classes: "3",
    JoinDate: "9/15/2024",
  },
];

export default function SectionTwo() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(invoices.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = invoices.slice(start, end);
  return (
    <div className="mt-5 bg-white pt-3 pb-3 rounded-[12px] px-5">
      <Tabs defaultValue="families" className="w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
          <TabsList className="grid w-full md:w-[250px] grid-cols-3">
            <Link href="/members">
              <TabsTrigger
                className="cursor-pointer text-[#424242] text-[14px] font-[400]"
                value="all"
              >
                All
              </TabsTrigger>
            </Link>
            <Link href="/members/families">
              <TabsTrigger
                className="cursor-pointer text-[#424242] text-[14px] font-[400]"
                value="families"
              >
                Families
              </TabsTrigger>
            </Link>
            <TabsTrigger
              className="cursor-pointer text-[#424242] text-[14px] font-[400]"
              value="students"
            >
              Students
            </TabsTrigger>
          </TabsList>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto">
            <div className="flex gap-2 rounded-[8px] w-full md:w-auto">
              <Input
                type="text"
                placeholder="Search anything..."
                className="text-[14px] font-[400] w-full bg-[#F5F5F5] border-none"
              />
            </div>
            <Button className="px-4 py-2 rounded-[8px] bg-white hover:bg-white border border-gray-200 cursor-pointer w-full md:w-auto">
              <SlidersVertical className="text-black" />
            </Button>
          </div>
        </div>
        <TabsContent value="families">
          <Table className="bg-white">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[14px] font-[500]">ID</TableHead>
                <TableHead className="text-[14px] font-[500]">Member</TableHead>
                <TableHead className="text-[14px] font-[500]">
                  Contact
                </TableHead>
                <TableHead className="text-[14px] font-[500]">Type</TableHead>
                <TableHead className="text-[14px] font-[500]">Status</TableHead>
                <TableHead className="text-[14px] font-[500]">
                  Classes
                </TableHead>
                <TableHead className="text-[14px] font-[500]">
                  Join Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((invoice) => (
                <TableRow key={invoice.ID}>
                  <TableCell className="text-[#424242] text-[14px] font-[400]">
                    {invoice.ID}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center gap-1.5">
                      <div>
                        <Image src="/ew.png" alt="pfp" width={50} height={50} />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[#424242] text-[14px] font-[500]">
                          {invoice.Member}
                        </div>
                        <div className="text-[#757575] text-[12px] font-[500]">
                          Family: {invoice.Family}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col ">
                      <div className="text-[#424242] text-[14px] font-[400]">
                        {invoice.Contact}
                      </div>
                      <div className="text-[#757575] text-[14px] font-[400]">
                        {invoice.Phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#424242] text-[12px] font-[500]">
                    <div className="w-[60px] border border-[#EEEEEE] rounded-[48px] pt-1 pb-1 flex justify-center">
                      {invoice.Type}
                    </div>
                  </TableCell>
                  <TableCell className="text-[#43A047] text-[12px] font-[500]">
                    <div className="w-[60px] bg-[#E3F2E3] rounded-[48px] pt-1 pb-1 flex justify-center">
                      {invoice.Status}
                    </div>
                  </TableCell>
                  <TableCell className="text-[#424242] text-[14px] font-[400]">
                    {invoice.Classes}
                  </TableCell>
                  <TableCell className="text-[#424242] text-[14px] font-[400]">
                    {invoice.JoinDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between mt-4">
            <div className="text-[#424242] text-[14px] font-[400]">
              Showing {start + 1} out of {invoices.length}
            </div>
            <Pagination className="w-[200px]">
              <PaginationContent>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      isActive={page === index + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(index + 1);
                      }}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
