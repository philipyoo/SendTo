import {Injectable} from 'angular2/core';
import {addedContacts} from './all-added-contacts';
import {Contact} from '../contact/contact';

@Injectable()
export class ToListService {
    getAddedContacts() {
        return addedContacts;
    }

    addContact(contact: any) {
        addedContacts.push(contact);
        console.log(addedContacts);
    }
    
    removeContact(contact: any) {
        addedContacts.splice(addedContacts.indexOf(contact), 1);
        console.log(addedContacts);
    }
}