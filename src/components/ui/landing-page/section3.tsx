import Image from "next/image";
import { Button } from "../button";

export default function SectionThree(){
    return(
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
    );
}