"use client";

import { JumboTitle } from "../../jumbotitle/JumboTitle";
import { FeatureCell } from "./FeatureCell";
import { Badge, Box, Grid, Stack, Text } from "@mantine/core";

export const Features = ({
  badge,
  title,
  description,
  features,
  iconSize = 20,
}) => {
  return (
    <Box
      id="features"
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
                feature={feature}
                index={index}
                iconSize={iconSize}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
