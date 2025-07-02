"use client";
import React from "react";
import {
  Box,
  Text,
  Group,
  Radio,
  Stack,
  Title,
  Button,
  Select,
  Divider,
  Textarea,
  TextInput,
  RadioGroup,
  Flex,
  MultiSelect,
  RangeSlider,
} from "@mantine/core";

import classes from "./Preferences.module.css";
import Label from "@/app/components/forms/Label";

export default function Preferences({ form, countries }) {
  return (
    <Box my={50} mx={{ base: "5%", md: 0 }} w={{ base: "90%", md: "120%" }}>
      <Title c={"gray.9"}>Enter your Preferences</Title>
      <Text fz={"md"}>
        Share your skills, experience, and salary expectations. These details
        will help employers discover your profile.
      </Text>
      <form>
        <Stack mt={30} gap={"xl"}>
          <Textarea
            label={<Label fw={600}>What are you looking for in a job?</Label>}
            placeholder="This section is included on your profile and in our search results."
          />
          <Divider my={"xs"} />
          <Select
            w={{ lg: "50%" }}
            label={<Label>Your primary role </Label>}
            description="The role you are most interested in"
            data={["Sales", "Marketing", "Healthcare", "Developer"]}
            defaultValue="Sales"
            clearable
          />
          <Divider my={"xs"} />
          <MultiSelect
            w={{ lg: "50%" }}
            label={<Label>Open to Roles</Label>}
            description="The roles and titles that you are open to working as."
            data={["React", "Angular", "Vue", "Svelte"]}
            searchable
          />

          <Divider my={"xs"} />
          <Radio.Group
            name="experienceLevel"
            label={<Label>Experience level</Label>}
            description="The level of experience you have in your primary role. "
          >
            <Stack mt="xs">
              <Radio value="entryLevel" label="Entry Level" />
              <Radio value="midLevel" label="Mid Level" />
              <Radio value="senior" label="Senior Level" />
              <Radio value="manager" label="Manager" />
              <Radio value="executive" label="Executive" />
            </Stack>
          </Radio.Group>
          <Divider my={"xs"} />
          <Radio.Group
            name="jobsearchStatus"
            label={<Label>Job Search Status</Label>}
            description="Whether you are looking for a job, open to new opportunities, or closed to job offers. "
          >
            <Stack mt="xs">
              <Radio value="active" label="I'm actively looking for a job" />
              <Radio value="nonActive" label="I'm closed to job offers" />
            </Stack>
          </Radio.Group>
          <Divider my={"xs"} />
          <MultiSelect
            searchable
            w={{ lg: "50%" }}
            data={countries.map((country) => country.label)}
            label={<Label>Work authorization</Label>}
            description="Only list countries where you have a valid work permit or visa"
          />
          <Divider my={"xs"} />

          <Label>Your Salary Expectations</Label>
          <RangeSlider
            labelAlwaysOn
            label={(value) => `$ ${value}00 `}
            defaultValue={[10, 30]}
            classNames={classes}
          />
          <Divider my={"xs"} />

          <RadioGroup
            value={""}
            name="equity"
            label={<Label>Equity preferences</Label>}
          >
            <Stack mt="xs">
              <Radio value="equity" label="I’m not interested in equity" />
              <Radio value="nonEquity" label="Not interested in equity" />
            </Stack>
          </RadioGroup>
          <Flex mt={20} justify={"center"}>
            <Button w={"max-content"} type="submit">
              Save Changes
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
}
