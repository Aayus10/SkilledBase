import React from "react";
import { Box, Skeleton } from "@mantine/core";

export default function CustomSkeleton() {
  const skeleton = (
    <Box mt={50}>
      <Skeleton height={50} circle mb="xl" />
      <Skeleton height={12} radius="xl" />
      <Skeleton height={12} mt={6} radius="xl" />
      <Skeleton height={12} mt={6} width="70%" radius="xl" />
    </Box>
  );
  return (
    <Box mx={"20%"}>
      {skeleton}
      {skeleton}
    </Box>
  );
}
