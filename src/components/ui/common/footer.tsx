import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Separator } from "../separator";
import Link from "next/link";

const Logo = () => (
  <Link
    href="/"
    className="flex items-center w-24 sm:w-28 md:w-32 h-12 sm:h-12 mb-5"
  >
    <div className="relative w-24 sm:w-28 md:w-32 h-12 sm:h-12 flex-shrink-0">
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

export default function Footer() {
  return (
    <footer className="w-full bg-black mt-20">
      <div
        className="
          mx-auto px-6 py-16 grid gap-12
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          max-w-7xl
          2xl:max-w-[1600px]
          3xl:max-w-[1800px]
        "
      >
        <div className="lg:col-span-2">
          <Logo />
          <p className="text-white text-sm leading-relaxed max-w-md">
            Class Gecko is the all in one class booking system that simplifies
            everything from registrations and finances to safeguarding and
            attendance. Devote your time to making a difference and let us
            handle the admin, so you can focus on your passion.
          </p>
          <div className="flex gap-4 mt-6">
            {["fb", "twitter", "insta", "linkedin"].map((icon) => (
              <Image
                key={icon}
                src={`/${icon}.png`}
                alt={icon}
                width={20}
                height={20}
                className="cursor-pointer opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold text-[15px] mb-4">Product</h3>
          <ul className="space-y-2 text-white text-[12px] font-[400]">
            {[
              "Features",
              "Pricing",
              "Integrations",
              "Security",
              "Mobile App",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:underline">
                {item === "Features" ? (
                  <Link href="/features">{item}</Link>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-[15px] mb-4">Company</h3>
          <ul className="space-y-2 text-white text-[12px] font-[400]">
            {["About Us", "Careers", "Blog", "Press", "Partners"].map(
              (item) => (
                <li key={item} className="cursor-pointer hover:underline">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-[15px] mb-4">Support</h3>
          <ul className="space-y-3 text-white text-[12px] font-[400]">
            <li className="cursor-pointer hover:underline">Help Center</li>
            <li className="cursor-pointer hover:underline">Documentation</li>
            <li className="cursor-pointer hover:underline">Community</li>
            <li className="cursor-pointer hover:underline">System Status</li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              support@classgecko.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              1-800-CLASS-GK
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              San Francisco, CA
            </li>
          </ul>
        </div>
      </div>
      <Separator
        className="
          bg-gray-600 mx-auto
          max-w-7xl
          2xl:max-w-[1600px]
          3xl:max-w-[1800px]
        "
      />
      <div
        className="
          mx-auto px-6 py-6 flex flex-col gap-4
          sm:flex-row sm:items-center sm:justify-between
          max-w-7xl
          2xl:max-w-[1600px]
          3xl:max-w-[1800px]
        "
      >
        <p className="text-white text-sm text-center sm:text-left">
          © 2024 Class Gecko, Inc. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-white text-sm">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (item) => (
              <span key={item} className="cursor-pointer hover:underline">
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
