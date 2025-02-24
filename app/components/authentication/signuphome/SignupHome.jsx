"use client";
import { useState } from "react";
import SignupOptionCard from "./SignupOptionCard";
import { Box, Button, Stack, Text, Title } from "@mantine/core";
import { JumboTitle } from "../../jumbotitle/JumboTitle";
import { useRouter } from "next/navigation";

export function SignUpHome() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const router = useRouter();
  const toggleValue = (index) => {
    // If the same card is clicked again, deselect it
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  const handleProceed = () => {
    if (selectedIndex === 0) {
      router.replace("/signup/talent");
    } else if (selectedIndex === 1) {
      router.replace("/signup/recruiter");
    }
  };

  return (
    <Box pt={150} px={100}>
      <Title ta={"center"} order={2}>
        Sign Up to SkilledBase
      </Title>
      <Text ta={"center"} c={"dimmed"}>
        Join over 50,000 satisfied job seekers and companies who are already on
        Himalayas.
      </Text>
      <Stack mt={"xl"} gap={"xl"}>
        <SignupOptionCard
          title="I'm looking for a remote job"
          subtitle="Get matched with remote jobs for free."
          index={0}
          toggleValue={toggleValue}
          isSelected={selectedIndex === 0}
        />
        <SignupOptionCard
          title="I'm hiring remote workers"
          subtitle="Connect with top remote talent."
          index={1}
          toggleValue={toggleValue}
          isSelected={selectedIndex === 1}
        />
        <Button onClick={handleProceed} py={4} fullWidth>
          Proceed
        </Button>
      </Stack>
    </Box>
  );
}
