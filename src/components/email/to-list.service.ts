import {Injectable} from 'angular2/core';
import {addedContacts} from './all-added-contacts';

@Injectable()
export class ToListService {
    getAddedContacts() {
        return addedContacts;
    }

    addContact(contact: any) {
        addedContacts.push(contact);
        console.log(addedContacts);
    }
    
    removeContact(index: number) {
        addedContacts.splice(index, 1);
        console.log(addedContacts);
    }
}