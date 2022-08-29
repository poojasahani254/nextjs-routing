import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectDb } from "../../../components/helpers/db-utils";
import { VerifyPassword } from "../../../components/helpers/auth-utils";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectDb();

        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          await client.close();
          throw new Error("No user found!");
        }

        const isValid = await VerifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          await client.close();
          throw new Error("Invalid credentials!");
        }

        await client.close();
        return { email: user.email };
      },
    }),
  ],
});
