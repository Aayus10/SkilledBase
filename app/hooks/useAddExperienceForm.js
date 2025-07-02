import { useForm } from "@mantine/form";

export const useAddExperienceForm = () => {
  return useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      compName: "",
      empType: "",
      country: "",
      status: false,
      description: "",
      skills: [],
      startDate: "",
      endDate: "",
    },
  });
};
