import React, { Suspense } from "react";
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
import Loading from "./loading";
import { Clients } from "../components/clients/Clients";
import { Testimonials } from "../components/testimonials/Testimonials";

export const metadata = {
  title: "SkilledBase | For Developers",
};

export default function HomePage() {
  return (
    <Box>
      <Suspense fallback={<Loading />}>
        <Hero
          badge="Unlock Your Creative Vision"
          title="Your dream job is just a click away"
          description="Find the best opportunities that match your skills, experience, and preferences. Whether you're looking for remote, on-site, or hybrid work, we've got the perfect job for you!"
          heroImages={heroImages}
        />
        <Box px={{ base: 10, sm: 50, md: 70, lg: 100 }}>
          <Clients />
          <Features
            features={features}
            badge="Power Up Your Hiring"
            title="Unlock a World of Top Candidates"
            description="Source, screen, and hire the best talent effortlessly. We help you build a high-performing team that drives success."
          />
          <CVMaker galleryItems={galleryItems} />
          <JobOverview jobs={jobs} />
          <Testimonials />

          <Faq faqs={faqs} />
        </Box>
      </Suspense>
    </Box>
  );
}
