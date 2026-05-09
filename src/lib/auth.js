import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
// import { oAuthProxy } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("projectdb-mongodb");

export const auth = betterAuth({
  // plugins: [
  //   oAuthProxy({
  //     productionURL: "https://my-production-app.com",
  //   }),
  // ],
  // trustedOrigins: [
  //   "http://localhost:3000",
  //   "https://my-app-*-preview.example.com",
  // ],
  emailAndPassword: {
    enabled: true,
    rememberMe: true,
  },
  baseURL:
    process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    "http://localhost:3000",
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
