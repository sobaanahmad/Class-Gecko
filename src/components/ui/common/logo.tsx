import Image from "next/image";

const LogoComp = () => (
  <div className="relative w-24 sm:w-28 md:w-32 h-12 sm:h-12 flex-shrink-0">
    <Image
      src="/logo.png"
      alt="Company Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
);

export default function Logo() {
  return <LogoComp />;
}
