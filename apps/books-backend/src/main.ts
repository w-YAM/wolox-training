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
  const app = express();
  const bookController = new BookController()

  console.log('Listing dbConnection OK', connection.isConnected)
  app.get('/api', (req: Request, res: Response) => {
    res.send({ message: 'Welcome to books-backend!' });
  });

  app.use('/api/books/', bookController.router)

  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
}).catch(err => {
  console.log('ERROR dbConnection', err);
});

