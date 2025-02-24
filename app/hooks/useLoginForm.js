import { useForm } from "@mantine/form";

export const useLoginForm = () => {
  return useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
  });
};
