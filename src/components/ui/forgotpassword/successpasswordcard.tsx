import Image from "next/image";
import { Card, CardContent } from "../card";
import Logo from "../common/logo";
import { Button } from "../button";
import Link from "next/link";

export default function SuccessPasswordCard() {
  return (
    <div className="w-full pt-10 lg:pt-28">
      <div className="max-w-xl mx-auto px-6">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="text-[32px] font-[600] text-center text-[#424242]">
          Reset Your Password
        </h1>
        <h1 className="text-[12px] font-[400] text-center text-[#424242] mb-5">
          Enter your email and we'll send you a reset link
        </h1>
        <div className="flex justify-center flex-col gap-4 items-center">
          <Card className="w-full max-w-md shadow-lg border-none px-1">
            <CardContent>
              <div className="flex justify-center">
                <Image
                  src="/verified.png"
                  alt="verified"
                  width={50}
                  height={1}
                />
              </div>
              <h1 className="text-[14px] font-[600] text-center mt-3">
                Reset link sent!
              </h1>
              <h1 className="text-[12px] font-[400] text-center mt-2 text-[#757575]">
                We've sent password reset instructions to
              </h1>
              <h1 className="text-[14px] font-[600] text-center mt-1 text-[#424242] mb-3">
                example@gmail.com
              </h1>
              <div className="text-center bg-[#EBF1FF] border border-[#D8E2FF] rounded-[10px]">
                <h1 className="text-[18px] font-[600] text-[#424242] mt-2">
                  Check your email
                </h1>
                <h1 className="text-[14px] font-[400] text-[#757575] pr-4 pl-4 mt-1 pb-3">
                  and click the reset link. The link will expire in 1 hour for
                  security reasons.
                </h1>
              </div>
              <Button
                type="button"
                className="w-full rounded-[8px] h-11 bg-[#10B4D4] hover:bg-[#0f9db8] text-white text-[14px] font-[600] cursor-pointer mt-4"
              >
                Send Reset Link
              </Button>
              <div className="flex flex-row gap-2 justify-center mt-3">
                <h1 className="text-[12px] font-[400] text-[#424242]">
                  Didn't recieve the email?
                </h1>
                <Link href="/forgotpassword">
                  <h1 className="text-[14px] font-[600] text-[#10B4D4] cursor-pointer hover:text-gray-400 pb-1 mt-[-0.5px]">
                    Resend
                  </h1>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
