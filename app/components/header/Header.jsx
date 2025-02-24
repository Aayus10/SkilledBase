"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconAdjustments,
  IconBrandFacebook,
  IconBrandGmail,
  IconBrandGoogle,
  IconChevronDown,
  IconMoon,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Center,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import Link from "next/link";
import Logo from "../logo/Logo";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Box pb={10}>
      <Box
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background
          backdropFilter: "blur(20px)", // Blurs background content
          WebkitBackdropFilter: "blur(10px)", // Safari support
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Group
          px={20}
          // px={{ base: 10, sm: 50, md: 70, lg: 120 }}
          justify="space-between"
          h="100%"
        >
          <Logo />
          <Group h="100%" visibleFrom="sm">
            <Link href="/" className={classes.link}>
              Jobs
            </Link>

            <Link href="/recruiters" className={classes.link}>
              Companies
            </Link>
            <Link href="/talent" className={classes.link}>
              Talent
            </Link>
            <Link href="/about-us" className={classes.link}>
              Advice
            </Link>
            <Link href="/about-us" className={classes.link}>
              About Us
            </Link>
          </Group>
          <Group gap="xl">
            <Group mr={"lg"} visibleFrom="sm">
              <ActionIcon aria-label="Facebook">
                <IconBrandFacebook
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon aria-label="Gmail">
                <IconBrandGmail
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon aria-label="Dark Mode">
                <IconMoon
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
            <Group visibleFrom="sm">
              <Link href={"/login"}>
                <Button variant="default">Log in</Button>
              </Link>
              <Link href={"/signup"}>
                <Button>Sign up</Button>
              </Link>
            </Group>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </Box>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
        title="Main Menu"
        opened={drawerOpened}
        onClose={closeDrawer}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <Link href="/" className={classes.link}>
            For Developers
          </Link>

          <Link href="/recruiters" className={classes.link}>
            For Recruiters
          </Link>
          <Link href="/about-us" className={classes.link}>
            About Us
          </Link>

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
