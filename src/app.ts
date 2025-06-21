import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routerBook from './app/modules/Book/books.routes';
import routerBorrow from './app/modules/Borrow/borrow.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/',routerBook);
app.use('/',routerBorrow);
app.get('/', (req: Request, res: Response)=>{
    res.send('welcome to library management system');
})

export default app;
