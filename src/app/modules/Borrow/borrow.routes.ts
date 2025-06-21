import { Router } from "express";
import { BorrowController } from "./borrow.controller";


const routerBorrow = Router();


routerBorrow.post('/borrow', BorrowController.borrowBooks);
routerBorrow.get('/borrow', BorrowController.getSummary);

export default routerBorrow;