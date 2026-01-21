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

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z
    .string()
    .min(1, "A valid email is required.")
    .email("Please enter a valid email."),
  countryCode: z.string().min(1),
  phone: z.string().min(7, "Phone number is required."),
  schoolName: z.string().min(1, "School name is required."),
  role: z.string().min(1, "Role is required."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must be at least 8 characters."),
  terms: z.boolean().optional(),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpCard() {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+92",
      phone: "",
      schoolName: "",
      role: "",
      password: "",
      terms: false,
    },
  });

  const onSubmit = (values: SignUpFormValues) => {
    console.log("Signup submitted:", values);
  };

  return (
    <div className="w-full pt-5 lg:pt-18">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="text-[32px] font-[600] text-center text-[#424242]">
          Create your account
        </h1>
        <h1 className="text-[12px] font-[400] text-center text-[#757575] mb-5">
          Join thousands of educators using Class Gecko
        </h1>
        <div className="flex justify-center flex-col gap-4 items-center">
          <Card className="w-full max-w-3xl shadow-xl border-none px-1">
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-2">
                      <div className="w-full">
                        <Label className="text-[14px] font-[500]">
                          First Name
                        </Label>
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <Input
                                {...field}
                                placeholder="First Name"
                                className="text-[12px] font-[400] h-12"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="w-full">
                        <Label className="text-[14px] font-[500]">
                          Last Name
                        </Label>
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <Input
                                {...field}
                                placeholder="Last Name"
                                className="text-[12px] font-[400] h-12"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-[14px] font-[500]">Email</Label>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              {...field}
                              type="email"
                              placeholder="Write Here"
                              className="text-[12px] font-[400] h-12"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <Label className="text-[14px] font-[500]">Phone</Label>
                      <div className="flex flex-row gap-2">
                        <FormField
                          control={form.control}
                          name="countryCode"
                          render={({ field }) => (
                            <FormItem className="w-24 relative">
                              <select
                                {...field}
                                className="w-full h-12 appearance-none rounded-[8px] border border-gray-200 bg-background pl-3 pr-8 text-[12px] font-[400] focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
                              >
                                <option value="+92">+92</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                <option value="+971">+971</option>
                              </select>
                              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#212121] text-[9px]">
                                ▼
                              </span>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <Input
                                {...field}
                                placeholder="Write Here"
                                className="text-[12px] font-[400] h-12"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-[14px] font-[500]">
                        School Name
                      </Label>
                      <FormField
                        control={form.control}
                        name="schoolName"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              {...field}
                              placeholder="Write Here"
                              className="text-[12px] font-[400] h-12"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <Label className="text-[14px] font-[500]">
                        Your Role
                      </Label>
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              {...field}
                              placeholder="Write Here"
                              className="text-[12px] font-[400] h-12"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <Label className="text-[14px] font-[500]">Password</Label>
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Write Here"
                              className="text-[12px] font-[400] h-12"
                            />
                            <FormMessage className="pt-1" />
                          </FormItem>
                        )}
                      />
                      <div className="flex items-center space-x-2 pt-5 text-[#757575]">
                        <Checkbox
                          checked={form.watch("terms")}
                          onCheckedChange={(checked) =>
                            form.setValue("terms", Boolean(checked))
                          }
                          id="terms"
                          className="cursor-pointer h-3 w-3 rounded-none border border-black"
                        />
                        <Label
                          htmlFor="terms"
                          className="text-[14px] font-[400]"
                        >
                          I agree to Terms of Services & Privacy Policy.
                        </Label>
                      </div>
                    </div>
                    <Link href="/login">
                      <Button
                        type="submit"
                        className="w-full rounded-[8px] h-11 bg-[#10B4D4] hover:bg-[#0f9db8] text-white text-[14px] font-[600] cursor-pointer"
                      >
                        Create account
                      </Button>
                    </Link>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-[1px] bg-gray-200" />
                      <h1 className="text-[14px] font-[500] text-[#757575] whitespace-nowrap">
                        Or continue with
                      </h1>
                      <div className="flex-1 h-[1px] bg-gray-200" />
                    </div>
                    <div className="flex flex-row gap-3 pb-2 justify-center">
                      <Button className="flex flex-row gap-2 border border-gray-200 rounded-[8px] px-7 md:px-28 lg:px-34 py-2 bg-white text-black hover:bg-gray-100 cursor-pointer">
                        <Image
                          src="/google.png"
                          alt="google"
                          width={14}
                          height={1}
                        />
                        <h1 className="text-[14px] font-[600]">Google</h1>
                      </Button>
                      <Button className="flex flex-row gap-2 border border-gray-200 rounded-[8px] px-7 md:px-28 lg:px-34 py-2 bg-white text-black hover:bg-gray-100 cursor-pointer">
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
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex flex-row gap-2 justify-center mt-3">
            <h1 className="text-[12px] font-[400] text-[#424242]">
              Already have an account?
            </h1>
            <Link href="/login">
              <h1 className="text-[14px] font-[600] text-[#10B4D4] cursor-pointer hover:text-gray-400 -mt-0.5">
                Sign in here
              </h1>
            </Link>
          </div>
          <h1 className="text-[12px] font-[500] text-[#424242]">
            Trusted by over 5,000 educators worldwide
          </h1>
          <div className="flex flex-row gap-2 -mt-3">
            <LockKeyhole className="text-[#BDBDBD] size-4" />
            <h1 className="text-[#BDBDBD] text-[12px] font-[500] mb-10 -ml-1">
              Secure Signup · 256 bit encryption
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
