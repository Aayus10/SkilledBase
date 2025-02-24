"use client";

import { motion } from "motion/react";

import {
  ActionIcon,
  Box,
  Container,
  Grid,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import classes from "./TalentList.module.css";
import { JumboTitle } from "../../jumbotitle/JumboTitle";

const EMPLOYEES = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&format&fit=facearea&facepad=3&w=900&h=900&q=80",
    name: "Sarah Thompson",
    alt: "Sarah Thompson",
    title: "Cloud Engineer",
    social: {
      x: "#",
      linkedin: "#",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    name: "Michael Rodriguez",
    title: "Product Manager",
    alt: "Michael Rodriguez",
    social: {
      x: "#",
      linkedin: "#",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542996966-2e31c00bae31?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    name: "Emily Nakamura",
    title: "Accountant",
    alt: "Emily Nakamura",
    social: {
      x: "#",
      linkedin: "#",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    name: "Priya Patel",
    title: "Graphic Designer",
    alt: "Priya Patel",
    social: {
      x: "#",
      linkedin: "#",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    name: "Liam Novak",
    title: "Marketing Officer",
    alt: "Liam Novak",
    social: {
      x: "#",
      linkedin: "#",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    name: "Olivia Torres",
    title: "SEO Consultant",
    alt: "Olivia Torres",
    social: {
      x: "#",
      linkedin: "#",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    name: "Marcus Johnson",
    title: "Full Stack Developer",
    alt: "Marcus Johnson",
    social: {
      x: "#",
      linkedin: "#",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1645857195444-2064b4ecabf3?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    name: "David Okafor",
    title: "QA Engineer",
    alt: "David Okafor",
    social: {
      x: "#",
      linkedin: "#",
    },
  },
];

const EmployeeCell = ({ name, title, social, imageUrl, alt, index }) => {
  const theme = useMantineTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2 * index,
          ease: "easeOut",
          once: true,
        },
      }}
    >
      <Box w="100%" mb="xl">
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "var(--mantine-shadow-xl)" }}
          transition={{ type: "spring" }}
        >
          <Box
            pos="relative"
            w="100%"
            style={{
              aspectRatio: "1/1",
              borderRadius: "var(--mantine-radius-lg)",
            }}
            mb="lg"
          >
            <Image
              mb="lg"
              radius="lg"
              src={imageUrl}
              alt={alt}
              sizes={`(max-width: ${theme.breakpoints.xs}) 100vw, (max-width: ${theme.breakpoints.md}) 50vw, 25vw`}
            />
          </Box>
        </motion.div>
        <Text fz="xl" fw="bold">
          {name}
        </Text>
        <Text fz="lg">{title}</Text>
        <Group
          gap={0}
          mt={{
            base: "xs",
            xs: "md",
          }}
        >
          {social.x && (
            <ActionIcon
              className={classes["action-icon"]}
              variant="subtle"
              component="a"
              href="#"
              target="_blank"
              size="xl"
            >
              <IconBrandX />
            </ActionIcon>
          )}
          {social.x && (
            <ActionIcon
              className={classes["action-icon"]}
              variant="subtle"
              component="a"
              href="#"
              target="_blank"
              size="xl"
            >
              <IconBrandLinkedin />
            </ActionIcon>
          )}
        </Group>
      </Box>
    </motion.div>
  );
};

export const TalentList = () => (
  <Box
    bg="var(--mantine-color-body)"
    size="xl"
    px={0}
    py={{
      base: "calc(var(--mantine-spacing-lg) * 4)",
      xs: "calc(var(--mantine-spacing-lg) * 5)",
      lg: "calc(var(--mantine-spacing-lg) * 6)",
    }}
  >
    <Box
      size="lg"
      px={{
        base: "xl",
        lg: 0,
      }}
    >
      <Grid
        gutter={{
          base: 0,
          lg: "calc(var(--mantine-spacing-xl) * 2)",
        }}
        align="end"
      >
        <Grid.Col span={{ base: 12, lg: 7 }}>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <JumboTitle
              order={1}
              fz="md"
              style={{ textWrap: "balance" }}
              pr={{
                base: 0,
                xs: "calc(var(--mantine-spacing-xl) * 4)",
              }}
              mb={{
                base: "xs",
                lg: 0,
              }}
            >
              Our Top talents
            </JumboTitle>
          </motion.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 5 }}>
          <Text
            c="dimmed"
            fz="xl"
            component={motion.div}
            initial={{ opacity: 0.0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Hire great people and give them the tools to do great work.
          </Text>
        </Grid.Col>
      </Grid>
      <Box
        mt={{
          base: "calc(var(--mantine-spacing-xl) * 3)",
          lg: "calc(var(--mantine-spacing-xl) * 3)",
        }}
      >
        <Grid gutter="xl">
          {EMPLOYEES.map((employee, index) => (
            <Grid.Col span={{ base: 12, xs: 6, md: 3 }} key={employee.name}>
              <EmployeeCell key={employee.name} {...employee} index={index} />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  </Box>
);
