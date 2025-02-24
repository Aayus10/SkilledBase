import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const API_URL = process.env.NEXT_PUBLIC_API_URL; // Make sure this is set in .env.local

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Make request to the backend
        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const data = await response.json();

        // If successful and token is received, return token
        if (response.ok && data.token) {
          return { token: data.token }; // Only return the token
        } else {
          throw new Error(data.message || "Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Store token in JWT if it's present from the authorize method
      if (user) {
        token.token = user.token; // Only store the token
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the token to the session object
      if (token) {
        session.user.token = token.token; // Store only token in session
      }
      return session;
    },
  },
  session: {
    strategy: "jwt", // Use JWT session strategy
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
