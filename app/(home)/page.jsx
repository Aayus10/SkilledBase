import React, { Suspense } from "react";
import { Box } from "@mantine/core";

import { features } from "../mocks/features";
import { heroImages } from "../mocks/heroImages";
import { galleryItems } from "../mocks/galleryItems";
import { jobs } from "../mocks/jobs";
import { faqs } from "../mocks/faqs";

import Loading from "./loading";
import { Hero } from "../components/homepage/hero/Hero";
import { Clients } from "../components/homepage/clients/Clients";
import { CVMaker } from "../components/homepage/cvmaker/CVMaker";
import { JobOverview } from "../components/homepage/joboverview/JobOverview";
import { Testimonials } from "../components/homepage/testimonials/Testimonials";
import { Faq } from "../components/homepage/faq/Faq";
import { Features } from "../components/homepage/features/Features";

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
          {/* <Features
            features={features}
            badge="Power Up Your Hiring"
            title="Unlock a World of Top Candidates"
            description="Source, screen, and hire the best talent effortlessly. We help you build a high-performing team that drives success."
          /> */}
          <CVMaker galleryItems={galleryItems} />
          <JobOverview jobs={jobs} />
          <Testimonials />

          <Faq faqs={faqs} />
        </Box>
      </Suspense>
    </Box>
  );
}
