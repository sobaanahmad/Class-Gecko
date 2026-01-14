import Image from "next/image";
import Link from "next/link";


export default function SectionFour(){
    return(
        <div className="w-full bg-[#10B4D4] pb-20">
        <div className="max-w-6xl mx-auto px-6 pt-20">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-140 items-start sm:items-center pt-10">
            <h1 className="text-[24px] sm:text-[32px] font-[600] text-white">
              Built for Scale & Security
            </h1>

            <Link
              href="/explore"
              className="
      px-3 py-2.5
      text-black bg-white
      rounded-[8px]
      font-[600]
      text-[14px]
      sm:ml-auto
    "
            >
              Get Started Now
            </Link>
          </div>
          <h1 className="text-[12px] font-[400] text-white mt-1 mb-5">
           Enterprise-grade platform features that grow with your business and keep your data safe.
          </h1>
          <div className="flex flex-wrap gap-5 justify-center">
            <div className="shadow shadow-md w-[355px] h-[150px] mt-3 rounded-[12px] bg-white">
              <Image
                src="/mobile.png"
                alt="logo"
                className="mx-auto pt-4"
                width={50}
                height={10}
              />
              <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
                Mobile Optimized
              </h1>
              <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
               Full-featured mobile experience for on-the-go management
              </h2>
            </div>
            <div className="shadow shadow-md w-[355px] h-[150px] mt-3 rounded-[12px] bg-white">
              <Image
                src="/secureandreliable.png"
                alt="logo"
                className="mx-auto pt-4"
                width={50}
                height={10}
              />
              <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
                Enterprise Security
              </h1>
              <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
               Bank-level security with data encryption and compliance
              </h2>
            </div>
            <div className="shadow shadow-md w-[354px] h-[150px] mt-3 rounded-[12px] bg-white">
              <Image
                src="/world.png"
                alt="logo"
                className="mx-auto pt-4"
                width={50}
                height={10}
              />
              <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
                Multi-Language
              </h1>
              <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
               Support for multiple languages and international formats
              </h2>
            </div>
            <div className="shadow shadow-md w-[355px] h-[150px] mt-3 rounded-[12px] bg-white">
              <Image
                src="/bolt.png"
                alt="logo"
                className="mx-auto pt-4"
                width={50}
                height={10}
              />
              <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
                99.9% Uptime
              </h1>
              <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
               Reliable cloud infrastructure with guaranteed availability
              </h2>
            </div>
            <div className="shadow shadow-md w-[355px] h-[160px] mt-3 rounded-[12px] bg-white">
              <Image
                src="/comms.png"
                alt="logo"
                className="mx-auto pt-4"
                width={50}
                height={10}
              />
              <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
                GDPR Complient
              </h1>
              <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
               Full compliance with international data protection and regulations.
              </h2>
            </div>
            <div className="shadow shadow-md w-[354px] h-[170px] mt-3 rounded-[12px] bg-white">
              <Image
                src="/wifi.png"
                alt="logo"
                className="mx-auto pt-4"
                width={50}
                height={10}
              />
              <h1 className="text-[15px] font-[600] text-[#424242] text-center mt-2">
                Offline Mode
              </h1>
              <h2 className="text-[12px] font-[400] text-[#4A5565] text-center pl-3 pr-3 mt-2">
                Continue working even without internet connection
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
}