import {Book} from './Book';
import {Rating} from './Rating';

export class ProfileBook {
  id:number;
  book: Book;
  rating: Rating;
  addedOn: number;
  finishedOn: number;

  constructor(profileBook: ProfileBook) {
    this.book = profileBook.book;
    this.addedOn = profileBook.addedOn;
    this.finishedOn = profileBook.finishedOn;
    this.rating = profileBook.rating;
    this.id = profileBook.id;
  }
}
