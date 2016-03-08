import {Injectable} from 'angular2/core';

@Injectable()
export class ToListService {
    _addedContacts: Array<any> = new Array();
    
    getAddedContacts() {
        return this._addedContacts;
    }

    addContact(contact: any) {
        this._addedContacts.push(contact);
    }
    
    removeContact(contact: any) {
        this._addedContacts.splice(this._addedContacts.indexOf(contact), 1);
    }
}