import { Text } from "@mantine/core";
import React from "react";

export default function Label({ children }) {
  return (
    <Text fz={"md"} fw={520}>
      {children}
    </Text>
  );
}
