import { Box } from "@mantine/core";
import React from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export default function HomeLayout({ children }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer/>
    </Box>
  );
}
