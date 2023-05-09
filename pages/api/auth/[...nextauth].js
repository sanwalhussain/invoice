import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "../../../models/user";
import bcrypt from "bcrypt";
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
  // callback to get id from session
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 1800,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        dbConnect();

        const { email, password, isRegister } = credentials;

        const user = await User.findOne({ email });

        if (user && isRegister) {
          return user;
        }

        if (!user) {
          throw new Error("Invalid credentials");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
