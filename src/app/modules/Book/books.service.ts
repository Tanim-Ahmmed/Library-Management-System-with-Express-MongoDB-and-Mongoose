import { IBooks, IBooksPayload } from './books.interface';
import Book from './books.model';
const createBook = async (payload: IBooks)=>{
    const book = new Book(payload);
    return await book.save();
}

const getAllBooks = async (query: IBooksPayload) =>{
    const {filter, sortBy = 'createdAt', sort ='desc', limit = '10'} = query;
    const filteredQuery: Record<string, unknown> = {};

    if (filter) {
        filteredQuery.genre = filter;
    }


    const sortOrder: 1 | -1 = sort === 'asc' ? 1 : -1;
    const sortedQuery: Record<string, 1 | -1> = {
        [sortBy]: sortOrder 
    };
    const books = await Book.find(filteredQuery).sort(sortedQuery).limit(Number(limit));
    return books;

}

 const getBookById = async (id: string) => {
    return await Book.findById(id);
}

const updateBook = async (id: string, payload: IBooks) => {
    const result = await Book.replaceOne({ _id: id }, payload);

    if (result.modifiedCount === 0) {
        throw new Error('Book not found or not modified');
    }
    return await Book.findById(id);
};


const deleteBook = async (id: string) => {
    return await Book.findByIdAndDelete(id);
}



export const BooksService = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
};