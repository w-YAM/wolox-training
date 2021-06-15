import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Book {
    id: ID
    title: String
    editorial: String
    year: Int
    price: Int
  }

  type BookUpdated {
    updatedStatus: Boolean
    book: Book
  }

  type BookDeleted {
    deletedStatus: Boolean
  }

  input CreateBookInput {
    title: String
    editorial: String
    year: Int
    price: Int
  }

  input UpdateBookInput {
    id: ID
    title: String
    editorial: String
    year: Int
    price: Int
  }

  type Query {
    hello: String
    getAllBooks: [Book]
  }

  type Mutation {
    createBook(book: CreateBookInput ): Book
    updateBook(book: UpdateBookInput ): BookUpdated
    deleteBook(id: ID ): BookDeleted
  }
`;
