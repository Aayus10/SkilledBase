import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Box, Button, Group, Modal, Text, Title } from "@mantine/core";
import AddExperience from "./AddExperience";
import Label from "@/app/components/forms/Label";

export default function Experience({ countries, experienceForm }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box my={50}>
      <Group w={"110%"} justify="space-between">
        <Box>
          <Title c={"gray.9"}>Experience</Title>
          <Text fz={"md"}>
            Add your experience to your profile to help us match you with the
            right opportunities.
          </Text>
        </Box>
        <Modal
          opened={opened}
          onClose={close}
          title={<Label>Add Experience</Label>}
          centered
        >
          <AddExperience form={experienceForm} countries={countries} />
        </Modal>

        <Button onClick={open} variant="outline">
          Add Experience
        </Button>
      </Group>
    </Box>
  );
}
