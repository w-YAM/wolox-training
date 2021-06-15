import {BookService} from "../app/services/book.services";

// Provide resolver functions for your schema fields
const bookService = new BookService()
export const resolvers = {
  Query: {
    hello: () => 'Hello world from GraphQL and express!...',
    getAllBooks: async() => {
      return bookService.getAll()
    },
  },
  Mutation: {
    createBook: async (parent, args, context, info) => {
      const {book} = args
      return bookService.create(book)
    },
    updateBook: async (parent, args, context, info) => {
      const {book} = args
      return bookService.update(book)
    },
    deleteBook: async (parent, args, context, info) => {
      const {id} = args
      return bookService.delete(id)
    },
  }
};
