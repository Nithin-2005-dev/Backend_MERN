import { ApolloServer } from "@apollo/server";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/schema.js";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { dbConfig } from "./database/dbConfig.js";
dotenv.config();
dbConfig();
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT },
  });
  console.log(url);
};
startServer();
