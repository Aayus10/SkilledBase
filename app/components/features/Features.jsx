"use client";

import {
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Stack,
  Text,
} from "@mantine/core";

import { motion } from "motion/react";
import classes from "./Features.module.css";
import { JumboTitle } from "../jumbotitle/JumboTitle";

const FeatureCell = ({ icon, title, description, index = 1, iconSize }) => (
  <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeInOut" }}
    viewport={{ once: true }}
    style={{ height: "100%" }}
  >
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "var(--mantine-shadow-xl)" }}
      transition={{ type: "spring" }}
      style={{
        borderRadius: "var(--mantine-radius-lg)",
        height: "100%",
      }}
    >
      <Card radius="lg" p="xl" className={classes.cell} h="100%">
        <Stack gap="xs">
          <Flex w={iconSize} h={iconSize} justify="center" align="center">
            {icon}
          </Flex>
          <Box>
            <Text fz="xl">{title}</Text>
            <Text fz="md" c="dimmed">
              {description}
            </Text>
          </Box>
        </Stack>
      </Card>
    </motion.div>
  </motion.div>
);

export const Features = ({
  badge = "Your Career Starts Here",
  title = "Discover the Best Job Opportunities",
  description = "Whether you’re a recent graduate or a seasoned professional, we help you connect with the right opportunities.",
  features,
  iconSize = 20,
}) => (
  <Box
    bg="var(--mantine-color-body)"
    pt={{
      base: "calc(var(--mantine-spacing-lg) * 4)",
      xs: "calc(var(--mantine-spacing-lg) * 5)",
      lg: "calc(var(--mantine-spacing-lg) * 6)",
    }}
  >
    <Box px={0}>
      <Stack gap="xs">
        <Badge>{badge}</Badge>
        {title && (
          <JumboTitle order={2} fz="sm" style={{ textWrap: "balance" }}>
            {title}
          </JumboTitle>
        )}
        {description && (
          <Text c="dimmed" fz="lg" style={{ textWrap: "balance" }}>
            {description}
          </Text>
        )}
      </Stack>
    </Box>
    <Box size="lg" p={0} mt="xl">
      <Grid gutter="xl">
        {features.map((feature, index) => (
          <Grid.Col
            key={feature.title}
            span={{ base: 12, xs: 6, md: 4 }}
            mih="100%"
          >
            <FeatureCell
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              iconSize={iconSize}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  </Box>
);
