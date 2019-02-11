import {Author} from './Author';
import {Rating} from './Rating';
import {BookType} from './BookType';

export class Book {
  id: number;
  title: string;
  isbn: number;
  author: Author;
  publicationYear: number;
  pages: number;
  bookType: string;
  rating: Rating[];
}
