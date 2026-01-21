"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/components/ui/common/logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockKeyhole } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "A valid email is required.")
    .email("Please enter a valid email."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must be at least 8 characters."),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginCard() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  const onSubmit = (values: LoginFormValues) => {
    console.log("Login submitted:", values);
  };

  return (
    <div className="w-full pt-5 lg:pt-18 mb-10">
      <div className="max-w-xl mx-auto px-6">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="text-[32px] font-[600] text-center text-[#424242]">
          Welcome Back
        </h1>
        <h1 className="text-[12px] font-[400] text-center text-[#424242] mb-5">
          Sign in to your Class Gecko account
        </h1>
        <div className="flex justify-center flex-col gap-4 items-center">
          <Card className="w-full max-w-md shadow-lg border-none px-1">
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-[14px] font-[500]">
                        Email
                      </Label>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              {...field}
                              id="email"
                              type="email"
                              placeholder="Write Here"
                              className="text-[12px] font-[400] h-12"
                            />
                            <FormMessage className="text-[12px] font-[400]" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <Label
                          htmlFor="password"
                          className="text-[14px] font-[500]"
                        >
                          Password
                        </Label>
                      </div>
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              {...field}
                              id="password"
                              type="password"
                              placeholder="Write Here"
                              className="text-[12px] font-[400] h-12"
                            />
                            <FormMessage className="text-[12px] font-[400] pt-1" />
                          </FormItem>
                        )}
                      />
                      <div className="flex items-center space-x-2 pt-4 pb-4">
                        <Checkbox
                          checked={form.watch("remember")}
                          onCheckedChange={(checked) =>
                            form.setValue("remember", Boolean(checked))
                          }
                          id="remember"
                          className="cursor-pointer h-3 w-3 rounded-none border border-black"
                        />
                        <Label htmlFor="remember">Remember me</Label>
                        <Link
                          href="/forgotpassword"
                          className="ml-auto inline-block text-[14px] font-[600] text-[#10B4D4] hover:text-gray-400"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Link href="/dashboard">
                        <Button
                          type="submit"
                          className="w-full rounded-[8px] h-11 bg-[#10B4D4] hover:bg-[#0f9db8] text-white text-[14px] font-[600] cursor-pointer text-center items-center flex justify-center"
                        >
                          Login to account
                        </Button>
                      </Link>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex-1 h-[1px] bg-gray-200" />
                        <h1 className="text-[14px] font-[500] text-[#757575] whitespace-nowrap">
                          Or continue with
                        </h1>
                        <div className="flex-1 h-[1px] bg-gray-200" />
                      </div>
                      <div className="flex flex-row gap-3 pb-2 pt-3 justify-center">
                        <Button className="flex flex-row gap-2 border border-gray-200 rounded-[8px] px-7 md:px-14 lg:px-14.5 py-2 bg-white text-black hover:bg-gray-100 hover:text-black cursor-pointer">
                          <Image
                            src="/google.png"
                            alt="google"
                            width={14}
                            height={1}
                          />
                          <h1 className="text-[14px] font-[600]">Google</h1>
                        </Button>
                        <Button className="flex flex-row gap-2 border border-gray-200 rounded-[8px] px-7 md:px-14 lg:px-13.5 py-2 bg-white text-black hover:bg-gray-100 hover:text-black cursor-pointer">
                          <Image
                            src="/microsoft.png"
                            alt="microsoft"
                            width={14}
                            height={1}
                          />
                          <h1 className="text-[14px] font-[600]">Microsoft</h1>
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex flex-row gap-2 justify-center mt-3">
            <h1 className="text-[12px] font-[400] text-[#424242]">
              Don't have an account?
            </h1>
            <Link href="/signup">
              <h1 className="text-[14px] font-[600] text-[#10B4D4] -mt-0.5 cursor-pointer hover:text-gray-400 pb-1">
                Sign up for free
              </h1>
            </Link>
          </div>
          <h1 className="text-[12px] font-[500] text-[#424242]">
            Trusted by over 5,000 educators worldwide
          </h1>
          <div className="flex flex-row gap-2 -mt-3">
            <LockKeyhole className="text-[#BDBDBD] size-4" />
            <h1 className="text-[#BDBDBD] text-[12px] font-[500] -ml-1">
              Secure Login
            </h1>
            <h1 className="text-[#90A1B9] text-[14px] font-[400] -mt-1">.</h1>
            <h1 className="text-[#BDBDBD] text-[12px] font-[500] -ml-1">
              256 bit encryption
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
