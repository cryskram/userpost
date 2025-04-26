import express from "express";
import { UserResolver } from "./resolvers/userResolver";
import { PostResolver } from "./resolvers/postResolver";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schemas/schema";

const app = express();

const root = {
  ...UserResolver,
  ...PostResolver,
};

app.use(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

export default app;
