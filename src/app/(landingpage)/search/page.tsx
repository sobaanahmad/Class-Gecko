"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/common/header";
import { SlidersVertical } from "lucide-react";

const categories = [
  "All",
  "Gymnastics",
  "Dance",
  "Football",
  "Baby & Toddlers",
  "Education",
];

export default function Search() {
  const [active, setActive] = useState("All");

  return (
    <>
      <Header />
      <div className="w-full pt-10 pb-20 bg-[linear-gradient(to_bottom,#C7EAF6_0%,#C7EAF6_85%,#ffffff_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-6">
            <div className="flex gap-6 overflow-x-auto whitespace-nowrap">
              {categories.map((item) => (
                <div key={item} className="flex flex-col items-center gap-2">
                  <Button
                    variant="ghost"
                    onClick={() => setActive(item)}
                    className="
                      p-0
                      h-auto
                      bg-transparent
                      text-[#424242]
                      text-[14px]
                      font-[400]
                      hover:bg-transparent
                      hover:text-[#10B4D4]
                      cursor-pointer
                    "
                  >
                    {item}
                  </Button>
                  {active === item && (
                    <span className="w-full h-[2px] bg-[#10B4D4]" />
                  )}
                </div>
              ))}
            </div>
            <Button
              className="
                ml-auto
                flex items-center gap-2
                text-[14px]
                font-[600]
                bg-[#C7EAF6]
                hover:bg-[#C7EAF6]
                cursor-pointer
                text-black
                border border-white
              "
            >
              Filters
              <SlidersVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
