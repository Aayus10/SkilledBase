import { useForm } from "@mantine/form";

export const useRegistrationForm = () => {
  return useForm({
    mode: "uncontrolled",
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      contact: "",
      password: "",
      confirmpassword: "",
    },
  });
};
