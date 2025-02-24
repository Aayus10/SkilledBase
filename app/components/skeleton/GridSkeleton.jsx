"use client";
import React from "react";

import { Grid, Skeleton } from "@mantine/core";

export default function GridSkeleton() {
  const skeleton = <Skeleton mt={50} h={200} />;
  const index = [1, 2, 3];
  return (
    <div>
      <Grid mx={"10%"}>
        {index.map((val) => {
          return (
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }} key={val}>
              {skeleton}
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
}
