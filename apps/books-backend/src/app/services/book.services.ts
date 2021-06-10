import { Book } from "../entities/book.entity"

export class BookService {
    private book: Book

    constructor(){
        this.book = new Book()
    }

    public getAll = async () => {
        const book = Book.find()
        return book
    }
    public create = async () => {
        return 'Create a book from BookService'
    }
    public update = async () => {
        return 'Update a book from BookService'
    }
    public delete = async () => {
        return 'Delete a book from BookService'
    }
}