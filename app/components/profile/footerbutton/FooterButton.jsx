import { Button, Group } from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconPackage,
} from "@tabler/icons-react";
import React from "react";

export default function FooterButton({ type }) {
  return (
    <Group>
      <Button variant="outline" leftSection={<IconArrowLeft />}>
        Previous
      </Button>
      <Button type={type} rightSection={<IconPackage />}>
        Save Changes
      </Button>
      <Button variant="outline" rightSection={<IconArrowRight />}>
        Next
      </Button>
    </Group>
  );
}
