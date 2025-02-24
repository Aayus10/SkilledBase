import React from "react";
import { Title } from "@mantine/core";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Title order={2}>SkilledBase</Title>
    </Link>
  );
}
