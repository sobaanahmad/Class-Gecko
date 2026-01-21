"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../button";
import { Card, CardContent } from "../card";
import Logo from "../common/logo";
import { Input } from "../input";
import { Label } from "../label";
import { ArrowLeft } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "A valid email is required.")
    .email("Please enter a valid email address."),
});
type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;
type ForgotPasswordCardProps = {
  onSuccess: () => void;
};

export default function ForgotPasswordCard({
  onSuccess,
}: ForgotPasswordCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const onSubmit = () => {
    onSuccess();
  };

  return (
    <div className="w-full pt-10 lg:pt-35">
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
              >
                <Label htmlFor="email" className="text-[14px] font-[500]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Write Here"
                  className="text-[12px] font-[400] h-12"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-[12px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
                <h1 className="text-[14px] font-[500] text-[#757575]">
                  Enter the email address associated with your account
                </h1>
                <Button
                  type="submit"
                  className="w-full rounded-[8px] h-11 bg-[#10B4D4] hover:bg-[#0f9db8] text-white text-[14px] font-[600] cursor-pointer"
                >
                  Send Reset Link
                </Button>
                <div className="w-full h-[1px] bg-gray-200 mt-3 mb-3" />
                <div className="flex flex-row gap-2 items-center justify-center">
                  <ArrowLeft />
                  <Link href="/login">
                    <h1 className="text-[14px] font-[600] hover:underline">
                      Back to Login
                    </h1>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
