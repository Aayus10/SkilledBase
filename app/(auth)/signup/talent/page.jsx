import { SignUp } from "@/app/components/authentication/signup/SignUp";
import React from "react";

export const metadata = { title: "SkilledBase. Sign Up for Talent" };

export default function TalentSignUpPage() {
  return (
    <div>
      <SignUp title="Talent" />
    </div>
  );
}
