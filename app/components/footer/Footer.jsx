"use client";

import {
  Alert,
  Anchor,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Image,
  Text,
} from "@mantine/core";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconHeartHandshake,
} from "@tabler/icons-react";
import NextImage from "next/image";
import NextLink from "next/link";
import classes from "./Footer.module.css";

const LinkGroup = ({ title, links }) => (
  <Box>
    <Text fw="bold">{title}</Text>
    {links.map((link) => (
      <Anchor
        c="dimmed"
        className={classes.link}
        display="block"
        fz="sm"
        href={link.href}
        key={link.href}
        py={4}
        underline="never"
      >
        {link.title}
      </Anchor>
    ))}
  </Box>
);

export const Footer = () => (
  <Container component="footer" className={classes.container} fluid>
    <Container
      size="xl"
      px={0}
      py={{
        base: "xl",
        sm: "calc(var(--mantine-spacing-xl) * 2)",
      }}
    >
      <Grid>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <LinkGroup
            title="Blocks"
            links={[
              { title: "Banners", href: "a" },
              { title: "Features", href: "b" },
              { title: "Footers", href: "c" },
              { title: "Headers", href: "d" },
              { title: "Heros", href: "e" },
              { title: "Navbars", href: "f" },
            ]}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <LinkGroup
            title="Components"
            links={[
              { title: "Accordion", href: "g" },
              { title: "AutoScrollView", href: "h" },
              { title: "Carousel", href: "i" },
              { title: "Jumbo Title", href: "j" },
              { title: "Ratings", href: "k" },
              { title: "Stats", href: "l" },
            ]}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <LinkGroup
            title="Company"
            links={[
              { title: "About", href: "m" },
              { title: "Blog", href: "n" },
              { title: "Careers", href: "o" },
              { title: "Press", href: "p" },
              { title: "Privacy Policy", href: "q" },
              { title: "Terms of Service", href: "r" },
            ]}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <LinkGroup
            title="Social"
            links={[
              {
                title: (
                  <Flex align="center" gap={4}>
                    <IconBrandGithubFilled size={16} /> Github
                  </Flex>
                ),
                href: "s",
              },
              {
                title: (
                  <Flex align="center" gap={4}>
                    <IconBrandLinkedinFilled size={16} /> LinkedIn
                  </Flex>
                ),
                href: "t",
              },
              {
                title: (
                  <Flex align="center" gap={4}>
                    <IconBrandX size={16} /> X
                  </Flex>
                ),
                href: "u",
              },
              {
                title: (
                  <Flex align="center" gap={4}>
                    <IconBrandYoutubeFilled size={16} /> YouTube
                  </Flex>
                ),
                href: "v",
              },
            ]}
          />
        </Grid.Col>
      </Grid>
      <Divider my="xl" />
      <Flex justify={{ sm: "space-between" }} wrap="wrap" gap="xl">
        <Box>
          <Text mt="xs" size="xs" c="dimmed">
            © {new Date().getFullYear()} SkilledBase. All rights reserved.
          </Text>
        </Box>
      </Flex>
    </Container>
  </Container>
);
