/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import "reflect-metadata"
import * as express from 'express';
import { Request, Response  } from "express";
import { BookController } from './app/controllers/book.controller';
import { createConnection } from "typeorm";

createConnection().then(async connection => {
  
  const app = express();
  const bookController = new BookController()

  console.log('Listing dbConnection OK');
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

