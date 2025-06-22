import { model, Schema } from "mongoose";
import { IBooks, IBooksMethods, IBooksModel } from "./books.interface";


const bookSchema = new Schema<IBooks, IBooksModel, IBooksMethods>({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
        required: true,
        uppercase: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        default: '',
    },
    copies: {
        type: Number,
        required: true,
        min: 0,
    },
    available: {
        type: Boolean,
        default: true,
        required: true,
    },

},
{
    timestamps: true,
    versionKey: false
});



bookSchema.method('updateCopies', async function (quantity: number){
  if (this.copies < quantity){
    throw new Error('enough copies are not available');
  }
    this.copies -= quantity;
    if (this.copies === 0) {
        this.available = false;
    }
    await this.save();

})



//middlewware runs before saving books


bookSchema.pre('save', function (next) {
    console.log(`book titled ${this.title} is being saved`);
    next();
})

  const Book = model<IBooks, IBooksModel>('Book', bookSchema);
export default Book;