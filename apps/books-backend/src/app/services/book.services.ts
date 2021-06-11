import { Book, iBook, iCreateBook, iUpdateBook } from "../entities/book.entity"

export class BookService {
    private book: Book

    constructor() {
        this.book = new Book()
    }

    public getAll = async () => {
        try {
            const books: iBook[] = await Book.find()
            return { books }
        } catch (error) {
            console.error('getAll ERROR', error);
        }
    }
    public create = async (body: iCreateBook) => {
        try {
            const newBook = await Book.create(body).save() // Me genera error al usar solo save(body)
            return { book: newBook }
        } catch (error) {
            console.error('create ERROR', error);
        }
    }

    public update = async (body: iUpdateBook, id: number) => {
        try {
            const oldBook: Book = await Book.findOne(id)

            const book: iUpdateBook = { ...oldBook, ...body }
            const updateBook = await Book.update(id, book)

            return { updateBook, book }
        } catch (error) {
            console.error('update ERROR', error);
        }
    }

    public delete = async (id: number) => {
        try {
            const deleteBook = await Book.delete(id)
            return { deleteBook }
        } catch (error) {
            console.error('delete ERROR', error);
        }
    }
}