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

    public getAll =  async (res: Response, req: Request) => {
        const data = await this.bookService.getAll()
        console.log('=================data', data);
        
        res.send(data).json()
    }
    public create =  async (res: Response, req: Request) => {
        res.send(this.bookService.create())
    }
    public update =  async (res: Response, req: Request) => {
        res.send(this.bookService.update())
    }
    public delete =  async (res: Response, req: Request) => {
        res.send(this.bookService.delete())
    }
    
    public routes(){
        this.router.get('/',this.getAll);
        this.router.post('/',this.create);
        this.router.put('/:id',this.update);
        this.router.delete('/:id',this.delete);
    }
}