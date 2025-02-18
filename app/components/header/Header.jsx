"use client";
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";



export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  
  return (
    <Box pb={10} >
      <header className={classes.header}>
        <Group px={100} justify="space-between" h="100%">
          <Title c={"cyan.9"} order={3}>SKILLEDBase</Title>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              For Developers
            </a>

            <a href="#" className={classes.link}>
              For Recruiters
            </a>
            <a href="/about-us" className={classes.link}>
              About Us
            </a>
          </Group>
          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
