"use client";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "motion/react";
import NextLink from "next/link";
import classes from "./JobOverview.module.css";
import { JumboTitle } from "../jumbotitle/JumboTitle";

const BlogCard = ({
  backgroundImageUrl,
  backgroundImageAlt,
  backgroundImageSizes,
  title,
  tag,
  authorName,
  authorAvatarUrl,
  authorAvatarAlt,
  publishedAt,
  index = 1,
}) => (
  <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeInOut" }}
    viewport={{ once: true }}
  >
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "var(--mantine-shadow-xl)" }}
      transition={{ type: "spring" }}
      style={{ borderRadius: "var(--mantine-radius-lg)" }}
    >
      <Card radius="lg" p="xl" className={classes["blog-card"]}>
        <Stack>
          <Box pos="relative" w="100%" style={{ aspectRatio: "9/6" }}>
            <Image
              src={backgroundImageUrl}
              alt={backgroundImageAlt}
              sizes={backgroundImageSizes}
            />
          </Box>
          <Group mb="xs">
            <Badge variant="light">{tag}</Badge>
            <Text fz="sm" c="dimmed">
              {publishedAt}
            </Text>
          </Group>
          <Text fz="xl" fw="bold" style={{ textWrap: "balance" }} lh={1.3}>
            {title}
          </Text>
          <Group gap="xs">
            <Avatar
              radius="xl"
              size="sm"
              pos="relative"
              w="var(--avatar-size-sm)"
              h="var(--avatar-size-sm)"
            >
              <Image src={authorAvatarUrl} alt={authorAvatarAlt} />
            </Avatar>
            <Text fz="sm" c="dimmed">
              {authorName}
            </Text>
          </Group>
        </Stack>
      </Card>
    </motion.div>
  </motion.div>
);

export const JobOverview = ({
  viewAllTitle = "View All",
  title = "Trending Jobs",
  jobs,
}) => {
  const blogs = jobs;
  const theme = useMantineTheme();
  return (
    <Box
      mt={30}
      bg="var(--mantine-color-body)"
      py={{
        base: "calc(var(--mantine-spacing-lg) * 1)",
        xs: "calc(var(--mantine-spacing-lg) * 2)",
        lg: "calc(var(--mantine-spacing-lg) * 3)",
      }}
    >
      <Box size="lg" px={0}>
        <Flex justify="space-between" align="end">
          <JumboTitle order={2} fz="sm" style={{ textWrap: "balance" }}>
            {title}
          </JumboTitle>
          <Button component={NextLink} href="#" variant="outline" radius="xl">
            {viewAllTitle}
          </Button>
        </Flex>
      </Box>
      <Box size="lg" p={0} mt="xl">
        <Grid gutter="xl" align="center">
          {blogs.map((blog, index) => (
            <Grid.Col key={blog.title} span={{ base: 12, md: 4 }}>
              <BlogCard
                key={blog.title}
                backgroundImageUrl={blog.backgroundImageUrl}
                backgroundImageAlt={blog.backgroundImageAlt}
                backgroundImageSizes={`(max-width: ${theme.breakpoints.md}) 100vw, 33vw`}
                title={blog.title}
                tag={blog.tag}
                authorName={blog.authorName}
                authorAvatarUrl={blog.authorAvatarUrl}
                authorAvatarAlt={blog.authorAvatarAlt}
                publishedAt={blog.publishedAt}
                index={index}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

/**
 * The following is demo code. You can remove it.
 */

const BLOGS = [
  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1455612693675-112974d4880b?q=80&w=900&h=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImageAlt: "",
    title: "Smart Home Features Buyers Want Now",
    tag: "Market",
    authorName: "Liam Novak",
    authorAvatarUrl:
      "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=900&h=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=256&h=256&q=80&ixlib=rb-1.2.1",
    authorAvatarAlt: "Liam Novak",
    publishedAt: "Dec 4th, 2024",
  },
  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=900&h=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImageAlt: "",
    title: "Luxury Market: Beyond the Basics",
    tag: "Investing",
    authorName: "Emily Nakamura",
    authorAvatarUrl:
      "https://images.unsplash.com/photo-1542996966-2e31c00bae31?&format&fit=facearea&facepad=3&w=256&h=256&q=80&ixlib=rb-1.2.1",
    authorAvatarAlt: "Emily Nakamura",
    publishedAt: "Nov 25th, 2024",
  },
  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1445699269025-bcc2c8f3faee?q=80&w=900&h=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImageAlt: "",
    title: "First-Time Buyer's Guide to Mortgages",
    tag: "Tips",
    authorName: "Michael Rodriguez",
    authorAvatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&format&fit=facearea&facepad=3&w=256&h=256&q=80&ixlib=rb-1.2.1",
    authorAvatarAlt: "Michael Rodriguez",
    publishedAt: "Nov 19th, 2024",
  },
];
