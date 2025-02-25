"use client";
import { Box } from "@mantine/core";
import React from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HomeLayout({ children }) {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <Box>
      <Box>
        <Header session={session} router={router} />
      </Box>
      {children}
      <Footer />
    </Box>
  );
}
