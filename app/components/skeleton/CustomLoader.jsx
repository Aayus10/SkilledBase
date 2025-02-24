import React from "react";

import { Flex, Loader } from "@mantine/core";

export default function CustomLoader() {
  return (
    <div>
      <Flex justify={"center"} mt={20}>
        <Loader color="teal" />
      </Flex>
    </div>
  );
}
