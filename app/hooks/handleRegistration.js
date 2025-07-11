import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useRegister = () => {
  return useMutation({
    mutationFn: async (values) => {
      const { fullName, username, email, contact, password } = values;
      await fetch(`${API_URL}/employee/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName,
          username: username,
          email: email,
          contact: contact,
          password: password,
        }),
      });
    },
    onSuccess: (data) => {
      console.log(`Registration successful: ${data}`);
    },
    onError: (error) => {
      alert(`Registration failed: ${error.response?.data || error.message}`);
    },
  });
};

// await fetch(`${API_URL}/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       fullName: fullName,
//       username: username,
//       email: email,
//       contact: contact,
//       password: password,
//     }),
//   });
// },
