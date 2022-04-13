import "reflect-metadata";
import { join } from 'path';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { buildTypeDefsAndResolvers } from "type-graphql";

const PORT = process.env.PORT || 5000;

async function startApolloServer() {
    const app = express();

        //SOURCE: https://typegraphql.com/docs/bootstrap.html#create-typedefs-and-resolvers-map
    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
        resolvers: [join(__dirname, '**/*.resolver.{ts,js}')]
      });

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers
    });

    const server = new ApolloServer({
        schema: schema
    });

    await server.start();
    server.applyMiddleware({
        app,
        path: '/graphql'
    });

    app.listen(PORT, () => {
        console.log(`Running GraphQL server... on http://localhost:${PORT}/graphql`);
    });
};

startApolloServer();

