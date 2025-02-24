import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useLogin = () => {
  return useMutation({
    mutationFn: async (values) => {
      const { email, password } = values;
      console.log(values);
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
      return result;
    },

    onSuccess: (data) => {
      alert(`Login successful: ${data || "Welcome!"}`);
      // Handle successful login, store token, redirect, etc.
    },

    onError: (error) => {
      alert(`Login failed: ${error.message || "An error occurred."}`);
      // Handle errors, show error message, etc.
    },
  });
};
