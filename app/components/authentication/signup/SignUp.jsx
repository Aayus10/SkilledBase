"use client";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import Link from "next/link";
import { useRegistrationForm } from "@/app/hooks/useRegistrationForm";
import { useRegister } from "@/app/hooks/handleRegistration";
import App from "next/app";

export function SignUp({ title }) {
  const form = useRegistrationForm();
  const { mutate, data } = useRegister();

  const handleSubmit = (values) => {
    mutate(values);
  };

  return (
    <Container size={500} mb={40}>
      <Box ta={"center"}>
        <Title order={3}>SkilledBase | {title} Signup</Title>
      </Box>
      <Text c="dimmed" fz={"md"} ta="center" mt={5}>
        Already have an account? &nbsp;
        <Link href={"/login"}>
          <Anchor size="sm" component="button">
            Log in
          </Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap={"lg"}>
            <TextInput
              label="Name"
              placeholder="Enter full name"
              key={form.key("fullName")}
              {...form.getInputProps("fullName")}
              required
            />
            <TextInput
              label="Username"
              placeholder="Enter user name"
              key={form.key("username")}
              {...form.getInputProps("username")}
              required
            />
            <TextInput
              type="email"
              label="Email Address"
              key={form.key("email")}
              {...form.getInputProps("email")}
              placeholder="Enter email address"
              required
            />
            <TextInput
              type="number"
              label="Contact Number"
              key={form.key("contact")}
              {...form.getInputProps("contact")}
              placeholder="Enter contact number"
              required
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              key={form.key("password")}
              {...form.getInputProps("password")}
              required
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
              key={form.key("confirmpassword")}
              {...form.getInputProps("confirmpassword")}
              required
            />
          </Stack>
          <Button type="submit" fullWidth mt="xl">
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
