import { Router } from "express";
import { BooksController } from "./books.controller";



const routerBook = Router();

routerBook.post('/books', BooksController.createBook);
routerBook.get('/books', BooksController.getAllBooks);
routerBook.get('/books/:bookId', BooksController.getBookById);
routerBook.put('/books/:bookId', BooksController.updateBook);
routerBook.delete('/books/:bookId', BooksController.deleteBook);



export default routerBook;