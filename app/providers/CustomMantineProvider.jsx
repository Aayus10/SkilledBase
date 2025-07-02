import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export default function CustomMantineProvider({ children }) {
  const theme = createTheme({
    colors: {
      black: [
        "#f8f8f8", // Lightest (Shade 0)
        "#e0e0e0", // Shade 1
        "#c7c7c7", // Shade 2
        "#a9a9a9", // Shade 3
        "#8f8f8f", // Shade 4
        "#666666", // Neutral Grey (Shade 5)
        "#4c4c4c", // Shade 6
        "#333333", // Shade 7
        "#1a1a1a", // Shade 8
        "#000000", // Pure Black (Shade 9)
      ],
    },
    primaryColor: "black",
    primaryShade: 2, // Dark mode will use the 8th shade of the black color

    components: {
      Title: {
        defaultProps: {
          fw: 550,
          fz: "",
          style: { fontFamily: "sans-serif", lineHeight: "52px" },
        },
      },
      ActionIcon: {
        defaultProps: { size: "lg", variant: "transparent", radius: "md" },
      },

      Anchor: {
        defaultProps: {
          fz: "",
          c: "#222642",
        },
      },
      Text: {
        defaultProps: {
          fw: 400,
          fz: "18px",
          style: { fontFamily: "sans-serif", lineHeight: "29px" },
        },
      },
      Badge: {
        defaultProps: { variant: "light", size: "xl" },
      },
      Button: {
        defaultProps: {
          size: "sm",
          radius: "lg",
          variant: "filled",
        },
      },
    },
  });
  return (
    <div>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </div>
  );
}
