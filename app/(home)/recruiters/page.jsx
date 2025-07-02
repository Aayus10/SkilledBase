import React from "react";
import { Box } from "@mantine/core";
import { Hero } from "@/app/components/homepage/hero/Hero";
import { recruiterHeroImages } from "@/app/mocks/recruiterHeroImages";
// import { Features } from "@/app/components/features/Features";
// import { features } from "@/app/mocks/features";
import { recruiterFeatures } from "@/app/mocks/recruiterFeatures";
import { Testimonials } from "@/app/components/homepage/testimonials/Testimonials";

export const metadata = {
  title: "SkilledBase | For Recruiters",
};

export default function RecruitersPage() {
  return (
    <Box>
      <Hero
        badge="Build Your Dream Team"
        title="Hire the Best, Faster & Smarter"
        description="Access a vast network of job seekers with the right skills and experience. Discover pre-vetted candidates who align with your requirements. "
        heroImages={recruiterHeroImages}
      />
      <Box px={{ base: 10, sm: 50, md: 70, lg: 100 }}>
        {/* <Features
          features={recruiterFeatures}
          badge="Power Up Your Hiring"
          title="Unlock a World of Top Candidates"
          description="Source, screen, and hire the best talent effortlessly. We help you build a high-performing team that drives success."
        /> */}
        <Testimonials />
      </Box>
    </Box>
  );
}
