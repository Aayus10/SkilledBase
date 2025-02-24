import { Box, Button, Card, Container, Stack } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import NextLink from "next/link";
import classes from "./CompanySignupAction.module.css";
import { JumboTitle } from "../../jumbotitle/JumboTitle";

export const CompanySignupAction = () => (
  <Box bg="var(--mantine-color-body)" mt={-100}>
    <Box>
      <Card radius="lg" mih={400} className={classes.card} p="xl">
        <Stack
          align="center"
          justify="center"
          h="100%"
          gap="xl"
          flex={1}
          p="xl"
        >
          <JumboTitle
            order={3}
            fz="xs"
            ta="center"
            style={{ textWrap: "balance" }}
            mb="sm"
            maw="80%"
          >
            Connect with more talented professionals that might match your
            companies' demands.
          </JumboTitle>
          <Button
            component={NextLink}
            href="#"
            className={classes.button}
            rightSection={<IconArrowUpRight />}
          >
            Sign up as company
          </Button>
        </Stack>
      </Card>
    </Box>
  </Box>
);
