"use client";

import {
  Box,
  Button,
  Center,
  Container,
  ContainerProps,
  Flex,
  Grid,
  GridColProps,
  GridProps,
  Group,
  Image,
  MantineBreakpoint,
  Text,
  TextProps,
} from "@mantine/core";
import {
  IconBrandAmd,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandMantine,
  IconBrandMedium,
  IconBrandNextjs,
  IconBrandOpenai,
  IconBrandReact,
  IconBrandReddit,
  IconBrandRevolut,
  IconBrandStripe,
  IconBrandVercelFilled,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";
import { JumboTitle } from "../../jumbotitle/JumboTitle";
import { Marquee } from "../../marquee/Marquee";

const ITEMS = [
  {
    key: "mantine",
    logo: (
      <Group wrap="nowrap">
        <IconBrandMantine size={32} />
        <Text fz={24} fw={600}>
          Mantine
        </Text>
      </Group>
    ),
  },
  {
    key: "nextjs",
    logo: (
      <Group wrap="nowrap">
        <IconBrandNextjs size={32} />
        <Text fz={24} fw={600}>
          Next.js
        </Text>
      </Group>
    ),
  },
  {
    key: "react",
    logo: (
      <Group wrap="nowrap">
        <IconBrandReact size={32} />
        <Text fz={24} fw={600}>
          React
        </Text>
      </Group>
    ),
  },
  {
    key: "medium",
    logo: (
      <Group wrap="nowrap">
        <IconBrandMedium size={32} />
        <Text fz={24} fw={600}>
          Medium
        </Text>
      </Group>
    ),
  },
  {
    key: "vercel",
    logo: (
      <Group wrap="nowrap">
        <IconBrandVercelFilled size={32} />
        <Text fz={24} fw={600}>
          Vercel
        </Text>
      </Group>
    ),
  },
  {
    key: "github",
    logo: (
      <Group wrap="nowrap">
        <IconBrandGithub size={32} />
        <Text fz={24} fw={600}>
          Github
        </Text>
      </Group>
    ),
  },
  {
    key: "discord",
    logo: (
      <Group wrap="nowrap">
        <IconBrandDiscord size={32} />
        <Text fz={24} fw={600}>
          Discord
        </Text>
      </Group>
    ),
  },
  {
    key: "revolut",
    logo: (
      <Group wrap="nowrap">
        <IconBrandRevolut size={32} />
        <Text fz={24} fw={600}>
          Revolut
        </Text>
      </Group>
    ),
  },
  {
    key: "openai",
    logo: (
      <Group wrap="nowrap">
        <IconBrandOpenai size={32} />
        <Text fz={24} fw={600}>
          OpenAI
        </Text>
      </Group>
    ),
  },
  {
    key: "stripe",
    logo: (
      <Group wrap="nowrap">
        <IconBrandStripe size={32} />
        <Text fz={24} fw={600}>
          Stripe
        </Text>
      </Group>
    ),
  },
  {
    key: "instagram",
    logo: (
      <Group wrap="nowrap">
        <IconBrandInstagram size={32} />
        <Text fz={24} fw={600}>
          Instagram
        </Text>
      </Group>
    ),
  },
  {
    key: "reddit",
    logo: (
      <Group wrap="nowrap">
        <IconBrandReddit size={32} />
        <Text fz={24} fw={600}>
          Reddit
        </Text>
      </Group>
    ),
  },
  {
    key: "amd",
    logo: (
      <Group wrap="nowrap">
        <IconBrandAmd size={32} />
        <Text fz={24} fw={600}>
          AMD
        </Text>
      </Group>
    ),
  },
];

export const Clients = ({
  title = "Trusted by 20+ leading companies ",
  items = ITEMS,
  gridProps,
  titleProps,
  numVisibleItems = 6,
  breakpoint = "sm",
  ...containerProps
}) => {
  const [index, setIndex] = useState(0);
  const visibleItems = (() => {
    const updatedItems = [];
    while (updatedItems.length < numVisibleItems) {
      updatedItems.push(items[(index + updatedItems.length) % items.length]);
    }
    return updatedItems;
  })();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + numVisibleItems) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length, numVisibleItems]);

  return (
    <Box
      mt={80}
      bg="var(--mantine-color-body)"
      py={{
        base: "calc(var(--mantine-spacing-lg) * 1)",
        xs: "calc(var(--mantine-spacing-lg) * 2)",
        lg: "calc(var(--mantine-spacing-lg) * 3)",
      }}
      size="lg"
      {...containerProps}
    >
      <Flex align={"end"} justify={"space-between"}>
        <JumboTitle fz="xs" order={2} style={{ textWrap: "balance" }}>
          {title}
        </JumboTitle>
        <Button variant="outline">Explore all companies</Button>
      </Flex>
      <Marquee
        items={items.map((item) => item.logo)}
        gap="calc(var(--mantine-spacing-lg) * 4)"
        duration={15}
        hiddenFrom={breakpoint}
        mt="xl"
      />
      <Grid
        style={{ overflow: "hidden" }}
        justify="flex-start"
        gutter="calc(var(--mantine-spacing-xl) * 2)"
        visibleFrom={breakpoint}
        mt="calc(var(--mantine-spacing-xl) * 2)"
        {...gridProps}
      >
        {visibleItems.map((item, i) => (
          <Grid.Col key={i} span={4}>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.key}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.5, delay: i * 0.05 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(10px)",
                  transition: { duration: 0.5, delay: i * 0.05 },
                }}
              >
                {item.logo}
              </motion.div>
            </AnimatePresence>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
