import { CompanySignupAction } from "@/app/components/talent/calltoaction/CompanySignupAction";
import { TalentList } from "@/app/components/talent/talentlist/TalentList";
import { Box } from "@mantine/core";
import React from "react";

export const metadata = {
  title: "SkilledBase | Top Talents",
};

export default function TalentPage() {
  return (
    <Box px={{ base: 10, sm: 50, md: 70, lg: 100 }}>
      <TalentList />
      <CompanySignupAction />
    </Box>
  );
}
