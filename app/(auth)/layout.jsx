import { Box } from "@mantine/core";

export default function AuthenticationLayout({ children }) {
  return (
    <Box mih={"100vh"} bg={"gray.2"} px={"30%"}>
      {children}
    </Box>
  );
}
