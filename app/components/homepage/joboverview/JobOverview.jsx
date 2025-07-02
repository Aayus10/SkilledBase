"use client";

import NextLink from "next/link";
import { JobCard } from "./JobCard";
import { JumboTitle } from "../../jumbotitle/JumboTitle";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";

export const JobOverview = ({
  viewAllTitle = "Explore more jobs",
  title = "Trending Jobs",
  description = "Personalized filters make it quick and easy to find the jobs you care about.",
  jobs,
}) => {
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
          <Stack>
            <JumboTitle order={2} fz="sm" style={{ textWrap: "balance" }}>
              {title}
            </JumboTitle>
            <Text c="dimmed" fz="lg" style={{ textWrap: "balance" }}>
              {description}
            </Text>
          </Stack>
          <Button variant="outline">{viewAllTitle}</Button>
        </Flex>
      </Box>
      <Box size="lg" p={0} mt="xl">
        <Grid gutter="xl" align="center">
          {jobs.map((job, index) => (
            <Grid.Col key={job.title} span={{ base: 12, md: 4 }}>
              <JobCard
                {...job}
                backgroundImageSizes={`(max-width: ${theme.breakpoints.md}) 100vw, 33vw`}
                index={index}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
