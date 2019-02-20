import {Rating} from './Rating';
import {Author} from './Author';
import {BookCategory} from './BookCategory';

export class Book {
  id: number;
  title: string;
  isbn: number;
  author: Author;
  publicationYear: number;
  pages: number;
  bookCategory: BookCategory;
  rating: Rating[];
}
