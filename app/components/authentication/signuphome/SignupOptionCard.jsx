"use client";
import { Checkbox, Text, UnstyledButton } from "@mantine/core";
import React from "react";
import classes from "./SignupHome.module.css";

export default function SignupOptionCard({
  index,
  toggleValue,
  isSelected,
  title,
  subtitle,
}) {
  return (
    <UnstyledButton
      size={"xs"}
      onClick={() => toggleValue(index)}
      className={classes.button}
    >
      <Checkbox
        checked={isSelected} // ✅ Ensure Checkbox reflects selection state
        onChange={() => {}}
        tabIndex={-1}
        size="md"
        mr="xl"
        styles={{ input: { cursor: "pointer" } }}
        aria-hidden
      />

      <div>
        <Text fw={500} mb={7} lh={1}>
          {title}
        </Text>
        <Text fz="sm" c="dimmed">
          {subtitle}
        </Text>
      </div>
    </UnstyledButton>
  );
}
