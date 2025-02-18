import React from "react";
import { Box } from "@mantine/core";

import { heroImages } from "../mocks/heroImages";
import { Hero } from "../components/hero/Hero";
import { Features } from "../components/features/Features";
import { features } from "../mocks/features";
import { CVMaker } from "../components/cvmaker/CVMaker";
import { galleryItems } from "../mocks/galleryItems";
import { JobOverview } from "../components/joboverview/JobOverview";
import { jobs } from "../mocks/jobs";
import { Faq } from "../components/faq/Faq";
import { faqs } from "../mocks/faqs";

export const metadata = {
  title: "SkilledBase | For Developers",
};

export default function HomePage() {
  return (
    <Box>
      <Hero
        badge="Unlock Your Creative Vision"
        title="Your dream job is just a click away"
        description="Find the best opportunities that match your skills, experience, and preferences. Whether you're looking for remote, on-site, or hybrid work, we've got the perfect job for you!"
        heroImages={heroImages}
      />
      <Box px={{ base: 10, sm: 50, md: 70, lg: 100 }}>
        <Features features={features} />
        <CVMaker galleryItems={galleryItems} />
        <JobOverview jobs={jobs} />
        <Faq faqs={faqs} />
      </Box>
    </Box>
  );
}
