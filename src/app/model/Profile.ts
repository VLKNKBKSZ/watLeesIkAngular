import { Book } from './Book';

export class Profile {  
    id: number;  
    name: string;
    middleName: string;
    lastName: string;
    dayOfBirth: string;
    account: Account;
    bookList: Book[];
    updatedOn: string;    
}