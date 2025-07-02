"use client";
import { useState } from "react";
import {
  Icon2fa,
  IconBellRinging,
  IconDashboard,
  IconDatabaseImport,
  IconFingerprint,
  IconHome,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import { Box, Burger, Code, Group } from "@mantine/core";
import classes from "./UserNavbar.module.css";
import Logo from "../../logo/Logo";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const data = [
  { link: "/", label: "Home", icon: IconHome },
  { link: "", label: " My Profile ", icon: IconDashboard },
  { link: "", label: "Security", icon: IconFingerprint },
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Authentication", icon: Icon2fa },
  { link: "", label: "Other Settings", icon: IconSettings },
];

export function UserNavbar() {
  const [active, setActive] = useState("Billing");
  const [opened, { toggle, open }] = useDisclosure(true);
  const isLargeScreen = useMediaQuery("(min-width: 1100px)");

  if (isLargeScreen && !opened) {
    open();
  }

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Box
      bg={"azure.2"}
      style={{ zIndex: 1000 }}
      pos={opened ? "fixed" : "relative"}
    >
      <Burger onClick={toggle} opened={opened} hiddenFrom="lg" />
      <nav
        style={{ display: opened || isLargeScreen ? "block" : "none" }}
        className={classes.navbar}
      >
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            <Logo />
            <Code fw={700}>v3.1.2</Code>
          </Group>
          {links}
        </div>

        <div className={classes.footer}>
          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
            <span>Change account</span>
          </a>

          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>
      </nav>
    </Box>
  );
}
