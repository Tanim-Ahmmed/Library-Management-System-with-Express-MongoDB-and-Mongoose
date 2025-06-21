import { Request, Response } from "express";
import {BooksService} from "./books.service";


const createBook = async (req: Request, res: Response)=>{
    try {
        const data = await BooksService.createBook(req.body);
        res.status(201).json({
            success: true, message: 'Book created successfully', data: data});
    } catch (error: unknown) {
        res.status(400).json({
            success: false, message: 'Failed to create book', error});
    }
};



const getAllBooks = async (req: Request, res: Response) => {
    try {
        const data = await BooksService.getAllBooks(req.query);
        res.status(200).json({
            success: true, message: 'Books retrieved successfully', data: data});
    } catch (error: unknown) {
        res.status(400).json({
            success: false, message: 'Failed to retrieve books', error});
    }};



    
const getBookById = async (req: Request, res: Response) => {
    try {
        const data = await BooksService.getBookById(req.params.bookId);
        res.status(200).json({
            success: true, message: 'Book retrieved successfully', data: data});
    } catch (error: unknown) {
        res.status(400).json({
            success: false, message: 'Failed to retrieve book', error});
    }};

    const updateBook = async (req: Request, res: Response) => {
        try {
            const data = await BooksService.updateBook(req.params.bookId, req.body);
            res.status(200).json({
                success: true, message: 'Book updated successfully', data: data});
        } catch (error: unknown) {
            res.status(400).json({
                success: false, message: 'Failed to update book', error});
        }
    }

const deleteBook = async (req: Request, res: Response) => { 
    try {
         await BooksService.deleteBook(req.params.bookId);
        res.status(200).json({
            success: true, message: 'Book deleted successfully', data: null});

    } catch (error: unknown) {
        res.status(500).json({
            success: false, message: 'Failed to delete book', error});
}};

export const BooksController = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}