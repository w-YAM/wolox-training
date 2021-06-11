import { Request, Response, Router } from "express";
import { iCreateBook, iUpdateBook } from "../entities/book.entity";
import { BookService } from "../services/book.services";

export class BookController {
    public router: Router
    private bookService: BookService

    constructor() {
        this.router = Router()
        this.bookService = new BookService()
        this.routes()
    }

    public getAll = async (req: Request, res: Response) => {
        res.send(await this.bookService.getAll())
    }
    public create = async (req: Request, res: Response) => {
        const randomNumber = Math.floor(Math.random() * 100);
        const body: iCreateBook = {
            title: `Hello_${randomNumber}`,
            editorial: `Editorial_${randomNumber}`,
            year: 1999 + randomNumber,
            price: 50000 + randomNumber,
        }

        const newBook = await this.bookService.create(body)

        res.send(newBook)
    }

    public update = async (req: Request, res: Response) => {
        const randomNumber = Math.floor(Math.random() * 100);
        const body: iUpdateBook = {
            title: `Hello_updated_${randomNumber}`,
            editorial: `Editorial_updated_${randomNumber}`,
            year: 1999 + randomNumber,
            price: 50000 + randomNumber,
        }

        const bookId: number = Number(req.params.id)

        res.send(await this.bookService.update(body, bookId))
    }

    public delete = async (req: Request, res: Response) => {
        const bookId: number = Number(req.params.id)
        res.send(await this.bookService.delete(bookId))
    }

    public routes() {
        this.router.get('/', this.getAll);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}