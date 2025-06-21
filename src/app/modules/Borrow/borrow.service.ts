import mongoose from "mongoose";
import Book from "../Book/books.model";
import { IBorrow } from "./borrow.interface";
import Borrow from "./borrow.model";

const borrowBooks = async (payload: IBorrow)=>{
    
    const {book: bookId, quantity, dueDate} = payload;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
    throw new Error('Invalid book ID');
  }

const book = await Book.findById(bookId);
   if (!book) {
        throw new Error('The book is not found');
    }
    if (book.copies < quantity){
        throw new Error('There is not enough copies available');
    }

    book.copies -= quantity;
    if(book.copies === 0 ){
        book.available = false;
    }

    await book.save();

    const borrow = await Borrow.create({
        book: bookId,
        quantity,
        dueDate,
    });
    return borrow;
}


const getSummary = async () => {
    return await Borrow.aggregate([
        {
            $group:{
                _id: '$book',
                totalQuantity: { $sum: '$quantity' },
            }
        },
        {
            $lookup:{
                from: 'books',
                localField: '_id',
                foreignField: '_id',
                as: 'bookInfo',
            }
        },
        {
            $unwind: '$bookInfo',
        },
        {
            $project:{
                _id: 0,
                book: {
                    title: '$bookInfo.title',
                    isbn: '$bookInfo.isbn',
                },
                totalQuantity: 1,
            }
        }
    ])
};

export const BorrowService = {
    borrowBooks,
    getSummary,
};