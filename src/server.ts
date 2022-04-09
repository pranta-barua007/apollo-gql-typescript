import "reflect-metadata";
import { join } from 'path';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
//import { loadFilesSync, loadFiles } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { buildTypeDefsAndResolvers } from "type-graphql";
//import { buildSchema } from "type-graphql";
//import { ProductsResolvers } from "./products/products.resolvers";
//import { OrdersResolvers } from "./orders/orders.resolvers";

// const typesArray = loadFilesSync(join(__dirname, '**/*.graphql'));
// const resolversArray = loadFilesSync(join(__dirname, '**/*.resolvers.ts'));

async function startApolloServer() {
    const app = express();

        //SOURCE: https://typegraphql.com/docs/bootstrap.html#create-typedefs-and-resolvers-map
        //TODO: not working after building 
    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
        resolvers: [join(__dirname, '**/*.resolver.ts')]
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

    app.listen(5000, () => {
        console.log('Running GraphQL server...');
    });
};

startApolloServer();

