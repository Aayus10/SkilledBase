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
} from "@mantine/core";

import Logo from "../../logo/Logo";
import Link from "next/link";
import { useLoginForm } from "@/app/hooks/useLoginForm";
import { useLogin } from "@/app/hooks/useLogin";
import { useSession } from "next-auth/react";

export function Login() {
  const { data: session } = useSession();
  console.log("session", session);
  const form = useLoginForm();
  const { mutate, data } = useLogin();
  const handleSubmit = (values) => {
    mutate(values);
    console.log(data);
  };

  return (
    <Container pt={50} size={500} mb={40}>
      <Box ta={"center"}>
        <Logo />
      </Box>
      <Text c="dimmed" fz={"md"} ta="center" mt={5}>
        Do not have an account? &nbsp;
        <Link href={"/signup"}>
          <Anchor size="sm" component="button">
            Create an account
          </Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap={"lg"}>
            <TextInput
              type="email"
              label="Email Address"
              placeholder="Enter email address"
              key={form.key("email")}
              {...form.getInputProps("email")}
              required
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              key={form.key("password")}
              {...form.getInputProps("password")}
              required
            />
          </Stack>
          <Group justify="space-between" mt="lg">
            <Checkbox required label="Remember me" />
            <Anchor size="sm" component="button">
              Forgot password?
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
