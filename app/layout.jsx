"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import CustomQueryProvider from "./providers/CustomQueryProvider";
import CustomMantineProvider from "./providers/CustomMantineProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <CustomQueryProvider>
            <CustomMantineProvider>{children}</CustomMantineProvider>
          </CustomQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
