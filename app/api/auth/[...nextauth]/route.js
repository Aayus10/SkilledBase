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
        const response = await fetch(`${API_URL}/employee/login`, {
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

        // If successful and token is received, return token along with user info
        if (response.ok && data.token) {
          return {
            token: data.token,
            email: credentials.email, // Add email
            name: data.name, // Add name
          };
        } else {
          throw new Error(data.message || "Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Store token, name, and email in JWT if available
      if (user) {
        token.token = user.token;
        token.email = user.email; // Add email to token
        token.name = user.name; // Add name to token
      }
      return token;
    },
    async session({ session, token }) {
      // Attach token, name, and email to session object
      if (token) {
        session.user.token = token.token;
        session.user.email = token.email; // Add email to session
        session.user.name = token.name; // Add name to session
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to home page ("/") after successful login
      return baseUrl; // Redirect to the homepage
    },
  },
  session: {
    strategy: "jwt", // Use JWT session strategy
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
