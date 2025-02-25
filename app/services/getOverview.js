import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL; // Make sure this is set in .env.local

// Function to fetch data with token
const fetchOverview = async (token) => {
  if (!token) {
    throw new Error("No token found"); // If no token found, throw an error
  }

  const response = await fetch(`${API_URL}/overview`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Add token to Authorization header
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json(); // Return the response data
};

// React Query hook for fetching data
export const usefetchOverview = (token) => {
  return useQuery({
    queryKey: ["overview", token], // Unique key for the query, include the token
    queryFn: () => fetchOverview(token), // Pass the function reference
    // Optional: Add options like refetching intervals, caching, etc.
  });
};
