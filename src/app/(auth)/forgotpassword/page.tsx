"use client";
import ForgotPasswordCard from "@/components/ui/forgotpassword/forgotpasswordcard";
import SuccessPasswordCard from "@/components/ui/forgotpassword/successpasswordcard";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"form" | "success">("form");

  return (
    <>
      {step === "form" && (
        <ForgotPasswordCard onSuccess={() => setStep("success")} />
      )}

      {step === "success" && <SuccessPasswordCard />}
    </>
  );
}
