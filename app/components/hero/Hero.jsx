"use client";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import NextLink from "next/link";
import classes from "./Hero.module.css";
import { JumboTitle } from "../jumbotitle/JumboTitle";

export const Hero = ({
  badge,
  title,
  description,
  heroImages,
  callToAction = {
    label: "Get Started",
    href: "/signup",
  },
  secondaryAction = {
    label: "Learn More",
    href: "#features",
  },

  imageGridItemSize = { width: 200, height: 300 },
  ...containerProps
}) => {
  const imageGridItems = heroImages;
  return (
    <Container
      mt={45}
      bg="var(--mantine-color-body)"
      px={0}
      style={{ overflow: "hidden" }}
      fluid
    >
      <Container
        component="section"
        h={"110vh"}
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
        <Flex mt={-30} h="100%" align="center" pos="relative">
          <Stack
            maw="var(--mantine-breakpoint-xs )"
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
                <Badge variant="light" size="xl" mb="md">
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
                    className={classes.cta}
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
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    component={NextLink}
                    href={secondaryAction.href}
                    variant="outline"
                  >
                    {secondaryAction.label}
                  </Button>
                </motion.div>
              </motion.div>
            </Group>
          </Stack>
        </Flex>
        <Grid
          top={0}
          gutter="lg"
          right={-30}
          pos="absolute"
          w={imageGridItemSize.width * 3 + 60}
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
