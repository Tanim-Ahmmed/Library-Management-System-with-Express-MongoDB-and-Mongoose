import { Model } from "mongoose";

 export type Genre = 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
export interface IBooks {
    title: string;  
    author: string;
    genre: Genre;
    isbn: string;
    description: string;
    copies: number;
    available: boolean;

}

export interface IBooksMethods {
   updateCopies(copies: number): Promise<void>;
}


export type IBooksModel = Model<IBooks, IBooksMethods>;

export interface IBooksPayload {
    filter?: string;
    sortBy?: string;
    sort?: string;
    limit?: string;
}