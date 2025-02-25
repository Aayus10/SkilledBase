import { useMutation } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL; // Ensure this is defined in .env.local

export const useRegisterOverview = (token) => {
  return useMutation({
    mutationFn: async (values) => {
      const response = await fetch(`${API_URL}/overview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values), // Send form data as JSON
      });

      if (!response.ok) {
        throw new Error("Failed to register"); // Handle errors
      }

      return await response.json(); // Return response data
    },

    onSuccess: (data) => {
      alert(`Registration successful: ${data.message || "Welcome!"}`);
      // Handle successful registration (e.g., redirect, store token)
    },

    onError: (error) => {
      alert(`Registration failed: ${error.message || "An error occurred."}`);
    },
  });
};
