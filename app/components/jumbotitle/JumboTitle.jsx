import clsx from "clsx";
import classes from "./JumboTitle.module.css";
import { Title } from "@mantine/core";

const FONT_WEIGHT_MAP = {
  xl: 800,
  lg: 800,
  md: 700,
  sm: 600,
  xs: 500,
};

export const JumboTitle = ({
  className,
  children,
  order = 1,
  fz = "xl",
  ...otherProps
}) => (
  <Title
    fw={FONT_WEIGHT_MAP[fz]}
    className={clsx(classes[fz], className)}
    lh={1}
    order={order}
    {...otherProps}
  >
    {children}
  </Title>
);
