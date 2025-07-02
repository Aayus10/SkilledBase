import Label from "@/app/components/forms/Label";
import {
  Box,
  Button,
  Checkbox,
  MultiSelect,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React from "react";

export default function AddExperience({ countries, form }) {
  return (
    <form
      onSubmit={form.onSubmit((val) => {
        console.log(val);
      })}
    >
      <Stack gap={"md"}>
        <TextInput
          label={<Label>Job Title</Label>}
          placeholder="e.g. Software Engineer"
          key={form.key("title")}
          {...form.getInputProps("title")}
        />
        <Select
          label={<Label>Employment Type</Label>}
          data={["Full Time", "Part Time", "Self Employed"]}
          key={form.key("empType")}
          {...form.getInputProps("empType")}
        />
        <TextInput
          label={<Label>Company Name</Label>}
          placeholder="e.g. Ux-Qode"
          key={form.key("compName")}
          {...form.getInputProps("compName")}
        />
        <Select
          label={<Label>Country</Label>}
          data={countries.map((country) => country.label)}
          placeholder="Location of your office"
          clearable
          key={form.key("country")}
          {...form.getInputProps("country")}
        />
        <DateInput
          label={<Label>Enter Start Date</Label>}
          placeholder="Start Date"
          key={form.key("startDate")}
          {...form.getInputProps("startDate")}
        />
        <DateInput
          label={<Label>Enter End Date</Label>}
          placeholder="End Date"
          key={form.key("endDate")}
          {...form.getInputProps("endDate")}
        />
        <Checkbox
          mt={10}
          label="I am currenly working on this role."
          radius="lg"
          key={form.key("status")}
          {...form.getInputProps("status", { type: "checkbox" })} // Bind to form
        />
        <MultiSelect
          label={<Label>Skills</Label>}
          data={["React", "Node", "AWS", "Directus"]}
          key={form.key("skills")}
          {...form.getInputProps("skills")}
        />
        <Textarea
          label={<Label>Description</Label>}
          placeholder="Give a brief overview of your role"
          key={form.key("description")}
          {...form.getInputProps("description")}
        />
        <Button type="submit">Add Experience</Button>
      </Stack>
    </form>
  );
}
