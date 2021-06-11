import { Book, iBook, iCreateBook, iUpdateBook } from "../entities/book.entity"

export class BookService {
    private book: Book

    constructor() {
        this.book = new Book()
    }

    public getAll = async (): Promise<iBook[]> => {
        try {
            const books: iBook[] = await Book.find()
            return books
        } catch (error) {
            console.error('getAll ERROR', error);
        }
    }

    public create = async (body: iCreateBook): Promise<iBook> => {
        try {
            const newBook = await Book.create(body).save() // Me genera error al usar solo save(body)
            return newBook
        } catch (error) {
            console.error('create ERROR', error);
        }
    }

    public update = async (body: iUpdateBook): Promise<{
        updatedStatus: boolean,
        book: iBook
    }> => {
        try {
            const oldBook: Book = await Book.findOne(body.id)

            const book: iUpdateBook = { ...oldBook, ...body }
            const updateBook = await Book.update(book.id, book)
            const updatedStatus: boolean = !!updateBook.affected

            return { updatedStatus, book }
        } catch (error) {
            console.error('update ERROR', error);
        }
    }

    public delete = async (id: number): Promise<{
        deletedStatus: boolean
    }> => {
        try {
            const deleteBook = await Book.delete(id)
            const deletedStatus: boolean = !!deleteBook.affected
            return { deletedStatus }
        } catch (error) {
            console.error('delete ERROR', error);
        }
    }
}