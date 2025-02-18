import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function CustomMantineProvider({ children }) {
  const theme = createTheme({
    components: {
      Title: {
        defaultProps: {
          fw: 550,
          fz: "",
          style: { fontFamily: "sans-serif", lineHeight: "52px" },
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
        defaultProps: { variant: "light", color: "dark", size: "xl" },
      },
      Button: {
        defaultProps: {
          size: "sm",
          radius: "sm",
          variant: "filled",
          color: "rgb(1,136,150)",
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
