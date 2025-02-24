import { SignUp } from "@/app/components/authentication/signup/SignUp";
import React from "react";

export const metadata = { title: "SkilledBase. Sign Up For Recruiters" };

export default function RecruiterSignupPage() {
  return (
    <div>
      <SignUp title="Recruiter" />
    </div>
  );
}
