import "reflect-metadata";
import { join } from 'path';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typesArray = loadFilesSync(join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(join(__dirname, '**/*.resolvers.ts'));

async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    const server = new ApolloServer({
        schema: schema
    });

    await server.start();
    server.applyMiddleware({
        app,
        path: '/graphql'
    });

    app.listen(5000, () => {
        console.log('Running GraphQL server...');
    });
};

startApolloServer();