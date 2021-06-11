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
        const books = await this.bookService.getAll()
        res.status(200).send({ books })
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

        res.status(201).send(newBook)
    }

    public update = async (req: Request, res: Response) => {
        const randomNumber = Math.floor(Math.random() * 100);
        const body: iUpdateBook = {
            id: Number(req.params.id),
            title: `Hello_updated_${randomNumber}`,
            editorial: `Editorial_updated_${randomNumber}`,
            year: 1999 + randomNumber,
            price: 50000 + randomNumber,
        }


        res.status(200).send(await this.bookService.update(body))
    }

    public delete = async (req: Request, res: Response) => {
        const bookId: number = Number(req.params.id)
        res.status(200).send(await this.bookService.delete(bookId))
    }

    public routes() {
        this.router.get('/', this.getAll);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}