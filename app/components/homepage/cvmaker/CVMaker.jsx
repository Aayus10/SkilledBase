"use client";

import { useEffect, useRef, useState } from "react";
import {
  px,
  Box,
  Flex,
  Text,
  Group,
  Stack,
  Center,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { GalleryCard } from "../../gallerycard/GalleryCard";
import { JumboTitle } from "../../jumbotitle/JumboTitle";

export const CVMaker = ({
  galleryItems,

  style,
  title = "Create a professional CV in minutes",
  description = "Craft a standout CV with our intuitive CV maker. Choose from a variety of templates, customize your details, and download your resume instantly.",
  onClickItem,
  ...containerProps
}) => {
  const items = galleryItems;
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const theme = useMantineTheme();

  useEffect(() => {
    const findCenterElement = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      const containerCenter = containerRect.left + containerRect.width / 2;
      const { scrollLeft } = container;

      const children = Array.from(container.children);
      let closestIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      children.forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2 + scrollLeft;
        const distance = Math.abs(containerCenter + scrollLeft - childCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex - 1); // -1 to account for left spacer box
    };

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(findCenterElement);
    resizeObserver.observe(container);
    Array.from(container.children).forEach((child) => {
      resizeObserver.observe(child);
    });

    container.addEventListener("scroll", findCenterElement);
    window.addEventListener("resize", findCenterElement);

    findCenterElement();

    return () => {
      container.removeEventListener("scroll", findCenterElement);
      window.removeEventListener("resize", findCenterElement);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children);
    const targetElement = children[index + 1]; // +1 to account for left spacer box

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const gutterBoxWidth = `calc((${
    containerRef.current?.getBoundingClientRect().width ?? 0
  }px - ${px(theme.breakpoints.lg)}px) / 2)`;

  return (
    <Box
      bg="var(--mantine-color-body)"
      px={0}
      pt={{
        base: "calc(var(--mantine-spacing-lg) * 4)",
        xs: "calc(var(--mantine-spacing-lg) * 5)",
        lg: "calc(var(--mantine-spacing-lg) * 6)",
      }}
      style={{ overflow: "hidden", ...style }}
      {...containerProps}
    >
      <Box size="md" mb="xl">
        <Stack gap="xs">
          {title && (
            <JumboTitle order={2} fz="sm" style={{ textWrap: "balance" }}>
              {title}
            </JumboTitle>
          )}
          {description && (
            <Text c="dimmed" fz="lg" style={{ textWrap: "balance" }}>
              {description}
            </Text>
          )}
        </Stack>
      </Box>
      <Box px={0}>
        <Center mb="xl">
          <Group gap="xl">
            <ActionIcon
              variant="light"
              radius="xl"
              size="lg"
              disabled={centerIndex === 0}
              onClick={() => scrollToIndex(centerIndex - 1)}
            >
              <IconChevronLeft />
            </ActionIcon>
            <ActionIcon
              variant="light"
              radius="xl"
              size="lg"
              disabled={centerIndex === items.length - 1}
              onClick={() => scrollToIndex(centerIndex + 1)}
            >
              <IconChevronRight />
            </ActionIcon>
          </Group>
        </Center>
        <Flex
          ref={containerRef}
          gap="xl"
          style={{
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          }}
        >
          <GutterBox w={gutterBoxWidth} />
          {items.map((item, index) => {
            return (
              <GalleryCard
                onClickItem={onClickItem}
                key={item.title}
                index={index}
                item={item}
                backgroundImageSizes="353px"
                backgroundImageAlt=""
                w={{ base: 240, md: 353 }}
                h={{ base: 320, md: 471 }}
              />
            );
          })}
          <GutterBox w={gutterBoxWidth} />
        </Flex>
      </Box>
    </Box>
  );
};

const GutterBox = ({ style, ...boxProps }) => (
  <Box
    h={1}
    bg="dark.8"
    style={{
      scrollSnapAlign: "center",
      flexShrink: 0,
      visibility: "hidden",
      ...style,
    }}
    {...boxProps}
  />
);
