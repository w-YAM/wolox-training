import { Book } from "../entities/book.entity"

export class BookService {
    private book: Book

    constructor(){
        this.book = new Book()
    }

    public getAll = async () => {
        try {
            const book = await Book.find()
            console.log('============book',book);
        } catch (error) {
            console.error('============book error',error);
        }
        
        return 'getAll books from BookService!'
    }
    public create = async () => {
        return 'Create a book from BookService!'
    }
    public update = async () => {
        return 'Update a book from BookService!'
    }
    public delete = async () => {
        return 'Delete a book from BookService!'
    }
}