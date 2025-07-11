import {
  Box,
  Card,
  Text,
  Badge,
  Group,
  Image,
  Stack,
  Avatar,
} from "@mantine/core";
import { motion } from "motion/react";

import classes from "./JobOverview.module.css";

export const JobCard = ({
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
