import { Button } from "../button";
import { Input } from "../input";

export default function SetupPaymentArea() {
  return (
    <div className="flex flex-row justify-center lg:mt-19">
      <div className="flex flex-col w-[400px] items-center lg:items-start">
        <h1 className="text-[24px] font-[600]">Let's get started</h1>
        <h1 className="text-[#757575] text-[14px] font-[400]">
          Fill out a few details below.
        </h1>
        <h1 className="text-[#424242] text-[14px] font-[500] mt-4">Email</h1>
        <Input
          className="border-gray-100 shadow-none bg-white py-6 mt-1"
          placeholder="Write Here"
        />
        <Button className="w-full text-[14px] bg-[#10B4D4] hover:bg-[#0F9DB8] font-[600] text-white rounded-[8px] mt-4 py-6 cursor-pointer">Submit</Button>
      </div>
    </div>
  );
}
