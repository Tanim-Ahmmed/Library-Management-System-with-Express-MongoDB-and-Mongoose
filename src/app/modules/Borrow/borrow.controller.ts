import { Request, Response } from "express";
import { BorrowService } from "./borrow.service";



const borrowBooks = async (req: Request, res: Response)=>{
    try {
        const resut = await BorrowService.borrowBooks(req.body);
        res.status(201).json({
            success: true,
            message: 'Book borrowed successfully',
            data: resut,
        })
    }  catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || 'Borrowing book failed',
        });
    }
}


   const getSummary = async (req: Request, res: Response)=>{
    try {
        const result = await BorrowService.getSummary();
        res.status(200).json({
            success: true,
            message: 'Borrowed books summary retrieved successfully',
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || 'Fetching borrow books summary failed',
        });
    }
   }



export const BorrowController = {
    borrowBooks,
    getSummary,
};




