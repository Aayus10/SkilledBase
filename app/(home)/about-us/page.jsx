import { AboutHero } from "@/app/components/about/abouthero/AboutHero";
import { Clients } from "@/app/components/about/clients/Clients";
import { Stats } from "@/app/components/about/stats/Stats";
import { Box } from "@mantine/core";
import React from "react";

export const metadata = { title: "SkilledBase | About Us" };

export default function AboutPage() {
  return (
    <Box>
      <AboutHero />
      <Stats />
      <Clients/>
    </Box>
  );
}
