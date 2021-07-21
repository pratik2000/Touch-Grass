import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema/typeDefs";
import resolvers from "./schema/resolvers";
import generateDestinationModel from "./schema/models";
import dbConnection from "./db/connection";
import cors from "cors"

const path = require("path");
const startApolloServer = async () => {
  await dbConnection()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  const app = express();

  app.use(cors())
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    subscriptions: { path: "/subscriptions" },
    context: ({ req }) => {
      return {
        models: {
          Destination: generateDestinationModel(),
        },
      };
    },
  });
  await server.start();
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(express.static('./client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
 
  await new Promise((resolve) => app.listen({ port: 3000 }, resolve));
  console.log(`Server ready at http://localhost:3000${server.graphqlPath}`);
  console.log(
` Subscriptions ready at ws://localhost:3000${server.subscriptionsPath}`
);

  return { server, app };
};


startApolloServer();