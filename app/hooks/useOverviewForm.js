import { useForm } from "@mantine/form";

export const useOverviewForm = () => {
  return useForm({
    mode: "uncontrolled",
    initialValues: {
      description: "",
      bio: "",
      country: "",
      github: "",
      twitter: "",
      linkedIn: "",
      visibility: "",
    },
  });
};
