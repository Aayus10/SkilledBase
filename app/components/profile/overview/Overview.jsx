"use client";
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
} from "@mantine/core";
import React from "react";

import classes from "./mediainput.module.css";
import { useOverviewForm } from "@/app/hooks/useOverviewForm";
import { useSession } from "next-auth/react";
import { useRegisterOverview } from "@/app/hooks/useRegisterOverview";
import { usefetchOverview } from "@/app/services/getOverview";
import FooterButton from "../footerbutton/FooterButton";

export default function Overview({ countries }) {
  const form = useOverviewForm();
  const { data: session } = useSession();
  const accessToken = session?.user?.token; // Optional chaining used here
  const mutation = useRegisterOverview(accessToken);

  const { data: overview } = usefetchOverview(accessToken);
  const { description, bio, country, github, linkedIn, twitter, visibility } =
    overview?.data ?? {}; // If overview or overview.data is undefined, use default empty object

  return (
    <Box my={50} w={"70%"}>
      <Title c={"blue.9"}>Your Profile Overview</Title>
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
            value={description}
            label={<Text fw={600}>Introduction *</Text>}
            placeholder="Write a brief introduction. This will be shown on recruiters on our talent search pages."
            key={form.key("description")}
            {...form.getInputProps("description")}
          />
          <Divider my={"xs"} />
          <Textarea
            value={bio}
            label={<Text fw={600}>Your Bio*</Text>}
            placeholder="Tell us about your career and interests. The more detailed you provide about yourself and your achievements, the better we can match you with companies that are hiring."
            key={form.key("bio")}
            {...form.getInputProps("bio")}
          />
          <Divider my={"xs"} />

          <Select
            value={country}
            searchable
            w={"50%"}
            data={countries.map((country) => country.label)}
            label={<Text fw={600}>What country do you reside in? *</Text>}
            key={form.key("country")}
            {...form.getInputProps("country")}
          />
          <Divider my={"xs"} />

          <Text fw={600}>Social Media Links</Text>
          <TextInput
            value={github}
            w={"50%"}
            classNames={classes}
            label="Github Link"
            placeholder="e.g. github.com/alice"
            key={form.key("github")}
            {...form.getInputProps("github")}
          />
          <TextInput
            value={twitter}
            w={"50%"}
            classNames={classes}
            label="Twitter Link"
            placeholder="e.g. twitter.com/alice"
            key={form.key("twitter")}
            {...form.getInputProps("twitter")}
          />
          <TextInput
            value={linkedIn}
            w={"50%"}
            classNames={classes}
            label="LinkedIn Profile Link"
            placeholder="e.g. linedin.com/alice"
            key={form.key("linkedIn")}
            {...form.getInputProps("linkedIn")}
          />
          <Divider my={"xs"} />

          <RadioGroup
            value={visibility}
            name="visibility"
            label={<Text fw={700}>Visibility</Text>}
            key={form.key("visibility")}
            {...form.getInputProps("visibility")} // ✅ No need for { type: "checkbox" }
          >
            <Group mt="xs">
              <Radio value="public" label="Public Profile" />
              <Radio value="private" label="Private Profile" />{" "}
              {/* ✅ Fix: use "private" instead of "profile" */}
            </Group>
          </RadioGroup>
          <FooterButton type="submit" />
        </Stack>
      </form>
    </Box>
  );
}
