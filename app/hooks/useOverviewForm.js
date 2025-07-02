import { useForm } from "@mantine/form";

export const useOverviewForm = (overview) => {
  return useForm({
    mode: "uncontrolled",
    initialValues: {
      description: overview?.data?.description,
      bio: overview?.data?.bio,
      country: overview?.data?.country,
      github: overview?.data?.github,
      twitter: overview?.data?.twitter,
      linkedIn: overview?.data?.linkedIn,
      visibility: overview?.data?.visibility,
    },
  });
};
