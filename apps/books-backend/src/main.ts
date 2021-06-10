/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { Request, Response  } from "express";
import { BookController } from './app/controllers/book.controller';
import { createConnection } from "typeorm";

const app = express();
const bookController = new BookController()

app.get('/api', (req: Request, res: Response) => {
  res.send({ message: 'Welcome to books-backend!' });
});

app.use('/api/books/', bookController.router)

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
