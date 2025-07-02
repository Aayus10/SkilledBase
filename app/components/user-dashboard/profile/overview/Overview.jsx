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
} from "@mantine/core";

import { useSession } from "next-auth/react";
import { usefetchOverview } from "@/app/services/getOverview";

import classes from "./Overview.module.css";

export default function Overview({ countries, form, mutation }) {
  return (
    <Box my={50} mx={{ base: "5%", md: 0 }} w={{ base: "90%", md: "120%" }}>
      <Title c={"gray.9"}>Your Profile Overview</Title>
      <Text fz={"md"}>
        Note: This information will be displayed publicly so please be careful
        with what you share.
      </Text>
      <form
        onSubmit={form.onSubmit((val) => {
          mutation.mutate(val);
        })}
      >
        <Stack mt={30} gap={"xl"}>
          <Textarea
            label={<Text fw={600}>Introduction *</Text>}
            placeholder="Write a brief introduction. This will be shown on recruiters on our talent search pages."
            key={form.key("description")}
            {...form.getInputProps("description")}
          />
          <Divider my={"xs"} />
          <Textarea
            label={<Text fw={600}>Your Bio*</Text>}
            placeholder="Tell us about your career and interests. The more detailed you provide about yourself and your achievements, the better we can match you with companies that are hiring."
            key={form.key("bio")}
            {...form.getInputProps("bio")}
          />
          <Divider my={"xs"} />

          <Select
            searchable
            w={{ lg: "50%" }}
            data={countries.map((country) => country.label)}
            label={<Text fw={600}>What country do you reside in? *</Text>}
            key={form.key("country")}
            {...form.getInputProps("country")}
          />
          <Divider my={"xs"} />

          <Text fw={600}>Social Media Links</Text>
          <TextInput
            w={{ lg: "50%" }}
            classNames={classes}
            label="Github Link"
            placeholder="e.g. github.com/alice"
            key={form.key("github")}
            {...form.getInputProps("github")}
          />
          <TextInput
            w={{ lg: "50%" }}
            classNames={classes}
            label="Twitter Link"
            placeholder="e.g. twitter.com/alice"
            key={form.key("twitter")}
            {...form.getInputProps("twitter")}
          />
          <TextInput
            w={{ lg: "50%" }}
            classNames={classes}
            label="LinkedIn Profile Link"
            placeholder="e.g. linedin.com/alice"
            key={form.key("linkedIn")}
            {...form.getInputProps("linkedIn")}
          />
          <Divider my={"xs"} />

          <RadioGroup
            name="visibility"
            label={<Text fw={700}>Visibility</Text>}
            key={form.key("visibility")}
            {...form.getInputProps("visibility")} // ✅ No need for { type: "checkbox" }
          >
            <Group mt="xs">
              <Radio value="public" label="Public Profile" />
              <Radio value="private" label="Private Profile" />{" "}
            </Group>
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
