"use client";
import {
  ActionIcon,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Container,
  ContainerProps,
  Flex,
  Image,
  Rating,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import NextImage from "next/image";
import classes from "./AboutHero.module.css";
import { JumboTitle } from "../../jumbotitle/JumboTitle";

export const AboutHero = ({
  title = "Our Mission",
  description = "Welcome to SkilledBase! We're on a mission to revolutionize the recruitment process and empower professionals to shape the future of technology. Join us and take the next step in your career journey with the best opportunities that fit your skills and passion!",
  subdescription = "At SkilledBase, we believe that talent knows no boundaries. Whether you're looking to take your skills to the next level or seeking the perfect talent to drive your business forward, SkilledBase is the place where both professionals and employers thrive.",
  rating = 5,
  ratingLabel = "Trusted by 20+ companies",
  avatarItems = AVATAR_ITEMS_DEMO,
  ...containerProps
}) => (
  <Container
    pos="relative"
    h="100vh"
    mah={950}
    style={{ overflow: "hidden" }}
    fluid
  >
    <Container
      component="section"
      h="100vh"
      mah={950}
      mx="auto"
      size="xl"
      {...containerProps}
    >
      <Image
        pos="absolute"
        inset={0}
        src="./aboutbg.jpeg"
        mx="auto"
        alt=""
        width={1784}
        height={1000}
        style={{ pointerEvents: "none", userSelect: "none" }}
        darkHidden
      />
      <Image
        component={NextImage}
        pos="absolute"
        inset={0}
        src="/bg/kubadesign-19-dark.jpg"
        mx="auto"
        alt=""
        width={1784}
        height={1000}
        style={{ pointerEvents: "none", userSelect: "none" }}
        priority
        lightHidden
      />
      <Box
        pos="absolute"
        top={0}
        left={0}
        h="100%"
        w="100%"
        className={classes["vertical-backdrop"]}
      />
      <Flex h="100%" align="center" pos="relative" justify="center">
        <Stack
          mt={-150}
          maw="var(--mantine-breakpoint-md)"
          align="center"
          gap="lg"
          style={{ zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <JumboTitle
              ta="center"
              order={1}
              fz="lg"
              style={{ textWrap: "balance" }}
            >
              {title}
            </JumboTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Text
              ta="center"
              maw="var(--mantine-breakpoint-lg)"
              fz="xl"
              style={{ textWrap: "balance" }}
            >
              {description}
            </Text>
            <Text
              mt={30}
              ta="center"
              maw="var(--mantine-breakpoint-lg)"
              fz="xl"
              style={{ textWrap: "balance" }}
            >
              {subdescription}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Stack align="center" mt="xl">
              <AvatarGroup>
                {avatarItems.map((avatarItem, index) => (
                  <Avatar
                    key={index}
                    src={avatarItem.src}
                    className={classes.avatar}
                  />
                ))}
              </AvatarGroup>
              <Stack align="center" gap={4}>
                {rating && (
                  <Rating color="var(--mantine-color-text)" value={rating} />
                )}
                {ratingLabel && (
                  <Text ta="center" fz="sm" c="dimmed">
                    {ratingLabel}
                  </Text>
                )}
              </Stack>
            </Stack>
          </motion.div>
        </Stack>
      </Flex>
    </Container>
  </Container>
);

const AVATAR_ITEMS_DEMO = [
  {
    src: "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1645857195444-2064b4ecabf3?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1707672972137-64390186af62?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
];
