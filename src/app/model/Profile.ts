import { Book } from './Book';

export class Profile {  
    id: number;  
    name: string;
    middleName: string;
    lastName: string;
    dayOfBirth: string;
    bookList: Book[];
    updatedOn: string;    
}