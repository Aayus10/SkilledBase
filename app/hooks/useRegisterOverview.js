import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useRegisterOverview = (token) => {
  const [firstSubmit, setFirstSubmit] = useState(true);
  const [savedValues, setSavedValues] = useState(null);

  return useMutation({
    mutationFn: async (values) => {
      // Check if the 'description' field is empty during the first submission
      if (firstSubmit && !values.description) {
        throw new Error("Please fill in the description before submitting.");
      }

      // Use previous values if this is not the first submission
      const finalValues = firstSubmit ? values : savedValues || values;

      // Determine the request method: POST for the first, PUT for subsequent
      const method = firstSubmit ? "POST" : "PUT";

      const response = await fetch(`${API_URL}/overview`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(finalValues),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();

      // Save the submitted values after the first successful submission
      if (firstSubmit) {
        setSavedValues(values);
        setFirstSubmit(false); // After first submit, switch to PUT for subsequent submissions
      }

      return data;
    },

    onSuccess: (data) => {
      alert(`Added successfully: ${data.message || "Welcome!"}`);
    },

    onError: (error) => {
      alert(`Adding failed: ${error.message || "An error occurred."}`);
    },
  });
};
