import React from "react";
import { SignUp } from "@/app/components/authentication/signup/SignUp";
import { Box } from "@mantine/core";
import { SignUpHome } from "@/app/components/authentication/signuphome/SignupHome";

export const metadata = { title: "SkilledBase. Sign Up" };

export default function SignupPage() {
  return (
    <Box>
      <SignUpHome />
    </Box>
  );
}
