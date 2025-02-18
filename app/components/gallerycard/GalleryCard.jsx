"use client";

import { Box, Image, Paper, Stack, Text } from "@mantine/core";
import { motion } from "motion/react";

export const GalleryCard = ({
  item: { title, subtitle, backgroundImageUrl },
  backgroundImageSizes,
  backgroundImageAlt,
  titleProps = { style: { textWrap: "balance" } },
  subtitleProps = { style: { textWrap: "balance" } },
  style,
  withGradient = true,
  ...paperProps
}) => {
  return (
    <Paper
      p="md"
      pos="relative"
      style={{ overflow: "hidden", ...style, border: "1px solid black" }}
      {...paperProps}
    >
      {backgroundImageUrl && (
        <motion.div
          initial={{ scale: 1 }}
          style={{
            position: "absolute",
            top: "-5%",
            left: "-5%",
            right: "-5%",
            bottom: "-5%",
            zIndex: 0,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={backgroundImageUrl}
            alt={backgroundImageAlt}
            sizes={backgroundImageSizes}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      )}
      {withGradient && (
        <Box
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "70%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      )}
      <Stack
        gap={0}
        h="100%"
        justify="end"
        pos="relative"
        style={{
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <Box px={10} bg={"#121721"}>
          {title && (
            <Text c="white" fz="lg" fw="bold" {...titleProps}>
              {title}
            </Text>
          )}
          {subtitle && (
            <Text c="white" fz="md" {...subtitleProps}>
              {subtitle}
            </Text>
          )}
        </Box>
      </Stack>
    </Paper>
  );
};
