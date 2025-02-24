import { Anchor, Box, Container, Flex, Stack, Text } from "@mantine/core";
import { ReactNode } from "react";
import { JumboTitle } from "../jumbotitle/JumboTitle";

const FaqCell = ({ question, answer }) => (
  <Box
    p={{
      base: "xl",
      lg: "calc(var(--mantine-spacing-lg) * 2)",
    }}
    w={{
      base: "100%",
      lg: "33.333%",
    }}
  >
    <Text fz="lg" fw="bold" component="blockquote" mb={4}>
      {question}
    </Text>
    <Text fz="md" component="blockquote">
      {answer}
    </Text>
  </Box>
);

export const Faq = ({ faqs }) => (
  <Box
    bg="var(--mantine-color-body)"
    py={{
      base: "calc(var(--mantine-spacing-lg) * 4)",
      xs: "calc(var(--mantine-spacing-lg) * 5)",
      lg: "calc(var(--mantine-spacing-lg) * 6)",
    }}
  >
    <Box size="md">
      <Stack gap="xs" align="center">
        <JumboTitle
          order={2}
          fz="sm"
          ta="center"
          style={{ textWrap: "balance" }}
          mb="sm"
        >
          Frequently Asked Questions
        </JumboTitle>
        <Text c="dimmed" ta="center" fz="lg" style={{ textWrap: "balance" }}>
          Can't find what you're looking for? Drop us an{" "}
          <Anchor href="#" underline="always" c="dimmed" inherit>
            email
          </Anchor>
          and our support team will assist you promptly.
        </Text>
      </Stack>
    </Box>
    <Box size="xl">
      <Flex
        mt="calc(var(--mantine-spacing-lg) * 3)"
        wrap="wrap"
        justify="center"
      >
        {faqs.map((faq) => (
          <FaqCell key={faq.id} {...faq} />
        ))}
      </Flex>
    </Box>
  </Box>
);
