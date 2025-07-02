import { motion } from "motion/react";
import { Box, Card, Flex, Stack, Text } from "@mantine/core";

import classes from "./Features.module.css";

export const FeatureCell = ({
  feature: { icon, title, description },
  index,
  iconSize,
}) => (
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
