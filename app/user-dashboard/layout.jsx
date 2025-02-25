import React from "react";
import { UserNavbar } from "../components/user-dashboard/navbar/UserNavbar";
import { Box, Grid, GridCol } from "@mantine/core";

export default function UserDashboardLayout({ children }) {
  return (
    <Grid style={{ overflow: "hidden" }}>
      <GridCol span={{ base: 12, lg: 3 }}>
        <UserNavbar />
      </GridCol>
      <GridCol span={{ base: 12, lg: 9 }}>
        <Box>{children}</Box>
      </GridCol>
    </Grid>
  );
}
