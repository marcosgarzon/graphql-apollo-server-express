import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import loader from './daos/dbLoader.js';
import typeDefs from './typeDef.js';
import resolvers from './resolvers.js';

const startServer = async () => {
  const app = express();
  await loader.start();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(8080, () => console.log('Servidor ejecutándose en http://localhost:8080'));
};

startServer();