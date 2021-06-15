/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import "reflect-metadata"
import * as express from 'express';
import { Request, Response } from "express";
import { BookController } from './app/controllers/book.controller';
import { Connection, createConnection } from "typeorm";
import { Book } from "./app/entities/book.entity";
import { Author } from "./app/entities/author.entity";
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

const dbConfig = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "userDB",
  password: "passwordDB",
  database: "wolox_books_db",
  entities: [
    Book,
    Author
  ],
  logging: true,
  synchronize: true,
  autoLoadEntities: true
}

createConnection(dbConfig).then(async (connection: Connection) => {
  const serverGPL = new ApolloServer({ typeDefs, resolvers });
  const app: express.Express = express();
  const port: number = parseInt(process.env.port) || 3333;
  serverGPL.applyMiddleware({ app });

  const bookController = new BookController()

  console.log('🚀 DB Connection =>', connection.isConnected)

  app.get('/api', (req: Request, res: Response) => {
    res.send({ message: 'Welcome to books-backend!' });
  });

  app.use('/api/books/', bookController.router)

  const server = app.listen(port, () => {
    console.log(`🚀 RESTful API Server ready http://localhost:${port}/api`);
    console.log(`🚀 GraphQL Server ready at http://localhost:${port}${serverGPL.graphqlPath}`)
  });

  server.on('error', console.error);
}).catch(err => {
  console.log('ERROR dbConnection', err);
});

