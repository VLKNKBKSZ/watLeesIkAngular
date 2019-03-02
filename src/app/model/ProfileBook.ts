import {Book} from './Book';
import {Rating} from './Rating';

export class ProfileBook {
  id:number;
  book: Book;
  rating: Rating;
  addedOn: number;
  finishedOn: number;
}
