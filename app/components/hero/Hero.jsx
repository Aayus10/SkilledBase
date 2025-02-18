"use client";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Container,
  ContainerProps,
  Flex,
  Grid,
  Group,
  Image,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import NextImage from "next/image";
import NextLink from "next/link";
import classes from "./Hero.module.css";
import { JumboTitle } from "../jumbotitle/JumboTitle";

export const Hero = ({
  badge = "Unlock Your Career Potential",
  title = "Discover Opportunities Tailored for Developers",
  description = "Explore a wide range of job openings from top tech companies. Elevate your career with positions that match your skills and aspirations.",
  heroImages,
  callToAction = {
    label: "Start Browsing",
    href: "#",
  },
  secondaryAction = {
    label: "Learn More",
    href: "#",
  },

  imageGridItemSize = { width: 200, height: 300 },
  ...containerProps
}) => {
  const imageGridItems = heroImages;
  return (
    <Container
      bg="var(--mantine-color-body)"
      px={0}
      style={{ overflow: "hidden" }}
      fluid
    >
      <Container
        component="section"
        h={{md:"95vh"}}
        pos="relative"
        size="xl"
        {...containerProps}
      >
        <Box
          pos="absolute"
          top={0}
          left={0}
          h="100%"
          w="100%"
          className={classes["horizontal-backdrop"]}
          visibleFrom="md"
        />
        <Box
          pos="absolute"
          top={0}
          left={0}
          h="100%"
          w="100%"
          className={classes["vertical-backdrop"]}
        />
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          h="100%"
          w="100%"
          bg="var(--mantine-color-body)"
          style={{ zIndex: 1 }}
          opacity={0.85}
          hiddenFrom="md"
        />
        <Flex h="100%" align="center" pos="relative">
          <Stack
            maw="var(--mantine-breakpoint-sm)"
            gap="lg"
            style={{ zIndex: 10 }}
          >
            {badge && (
              <motion.div
                initial={{ opacity: 0.0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <Badge variant="light" size="xl" mb="lg">
                  {badge}
                </Badge>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <JumboTitle order={1} fz="lg" style={{ textWrap: "balance" }}>
                {title}
              </JumboTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Text fz="xl" c="dimmed" style={{ textWrap: "balance" }}>
                {description}
              </Text>
            </motion.div>
            <Group mt="lg">
              <motion.div
                initial={{ opacity: 0.0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    component={NextLink}
                    href={callToAction.href}
                    radius="xl"
                    size="lg"
                    className={classes.cta}
                    rightSection={<IconArrowRight />}
                  >
                    {callToAction.label}
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <Button
                  component={NextLink}
                  href={secondaryAction.href}
                  size="lg"
                  variant="transparent"
                >
                  {secondaryAction.label}
                </Button>
              </motion.div>
            </Group>
          </Stack>
        </Flex>
        <Grid
          gutter="lg"
          w={imageGridItemSize.width * 3 + 60}
          pos="absolute"
          top={0}
          right={-30}
          style={{ transform: "rotate(8deg)", flexShrink: 0 }}
        >
          {imageGridItems.map((gridItemsColumn, rowIndex) => (
            <Grid.Col
              span={Math.floor(12 / imageGridItems.length)}
              key={rowIndex}
            >
              <Stack gap="md">
                {gridItemsColumn.map((gridItem, itemIndex) => (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: itemIndex * 0.2,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    key={itemIndex}
                  >
                    <Image
                      width={imageGridItemSize.width}
                      height={imageGridItemSize.height}
                      key={itemIndex}
                      src={gridItem.src}
                      alt={gridItem.alt}
                      radius="lg"
                      style={{ objectFit: "cover", flexShrink: 0 }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

const IMAGE_GRID_ITEMS_DEMO = [
  [
    {
      src: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1504810370725-2585de12e6ee?q=80&w=2474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1568124473866-26ad000f2831?q=80&w=3714&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1519872775884-29a6fea271ca?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=3189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1531256456869-ce942a665e80?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1531860494978-9326a0388ef4?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
  ],
];
