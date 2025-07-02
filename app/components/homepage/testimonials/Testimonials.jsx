import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Paper,
  PaperProps,
  Stack,
  Text,
} from "@mantine/core";
import { JumboTitle } from "../../jumbotitle/JumboTitle";

import classes from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    quote:
      "This product has completely transformed my workflow and boosted my productivity. I can't imagine going back to how I did things before!",
    name: "Sarah Thompson",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&format&fit=facearea&facepad=3&w=256&h=256&q=80",
    handle: "@sthompson",
    alt: "Sarah Thompson",
  },
  {
    quote:
      "I was skeptical at first, but after using this tool for a few weeks, I'm a total convert. It's intuitive, powerful, and has become an essential part of my creative process.",
    name: "Michael Rodriguez",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&format&fit=facearea&facepad=3&w=256&h=256&q=80&ixlib=rb-1.2.1",
    handle: "@mrodriguez",
    alt: "Michael Rodriguez",
  },
  {
    quote:
      "As someone who juggles multiple projects, having a reliable and efficient solution like this has been a game-changer. It streamlines so many tasks and helps me stay organized.",
    name: "Emily Nakamura",
    imageUrl:
      "https://images.unsplash.com/photo-1542996966-2e31c00bae31?&format&fit=facearea&facepad=3&w=256&h=256&q=80&ixlib=rb-1.2.1",
    handle: "@enakamura",
    alt: "Emily Nakamura",
  },
];

const TestimonialCell = ({
  quote,
  name,
  imageUrl,
  handle,
  alt,
  ...paperProps
}) => (
  <Paper
    component="figure"
    radius="xl"
    p="xl"
    mx={0}
    w={400}
    my={0}
    className={classes.cell}
    {...paperProps}
  >
    <Flex direction="column" justify="space-between" h="100%">
      <Text component="blockquote">"{quote}"</Text>
      <Group mt="xl" align="start">
        <Avatar radius="xl" size="lg">
          <Image src={imageUrl} alt={alt} />
        </Avatar>
        <Box>
          <Text fz="lg" fw={500}>
            {name}
          </Text>
          <Text c="dimmed">{handle}</Text>
        </Box>
      </Group>
    </Flex>
  </Paper>
);

export const Testimonials = () => (
  <Box
    bg="var(--mantine-color-body)"
    py={{
      base: "calc(var(--mantine-spacing-lg) * 4)",
      xs: "calc(var(--mantine-spacing-lg) * 5)",
      lg: "calc(var(--mantine-spacing-lg) * 3)",
    }}
  >
    <Flex justify={"space-between"} align={"end"}>
      <Stack gap="xs">
        <Badge>Testimonials</Badge>
        <JumboTitle order={2} fz="sm" style={{ textWrap: "balance" }} mb="sm">
          What our satisfied recruiters are saying
        </JumboTitle>
        <Text c="dimmed" fz="xl" style={{ textWrap: "balance" }}>
          Real stories from the people who know us best
        </Text>
      </Stack>
      <Button variant="outline">Create your company profile</Button>
    </Flex>
    <Box>
      <Flex
        mt="calc(var(--mantine-spacing-lg) * 3)"
        gap="calc(var(--mantine-spacing-sm) * 3)"
        justify={"space-between"}
        wrap="wrap"
      >
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCell key={testimonial.name} {...testimonial} />
        ))}
      </Flex>
    </Box>
  </Box>
);
