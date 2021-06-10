import { Request, Response, Router } from "express";
import { BookService } from "../services/book.services";

export class BookController {
    public router: Router
    private bookService: BookService

    constructor(){
        this.router = Router()
        this.bookService = new BookService()
        this.routes()
    }

    public getAll =  async (req: Request, res: Response) => {
        res.send(await this.bookService.getAll())
    }
    public create =  async (req: Request, res: Response) => {
        res.send(await this.bookService.create())
    }
    public update =  async (req: Request, res: Response) => {
        res.send(await this.bookService.update())
    }
    public delete =  async (req: Request, res: Response) => {
        res.send(await this.bookService.delete())
    }
    
    public routes(){
        this.router.get('/',this.getAll);
        this.router.post('/',this.create);
        this.router.put('/:id',this.update);
        this.router.delete('/:id',this.delete);
    }
}