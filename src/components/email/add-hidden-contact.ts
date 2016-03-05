import {Component, EventEmitter} from 'angular2/core';
import {Contact} from '../contact/contact';
import {ContactDetailComponent} from '../contact/contact-detail';

@Component({
    selector: 'add-hidden-contact',
    template: require('./add-hidden-contact.html'),
    directives: [ContactDetailComponent],
    inputs: ['contacts', 'searchContact'],
    outputs: ['selectedContact', 'emptyField']
})

export class AddHiddenContactComponent {
    selectedContact = new EventEmitter<Contact>();
    
    checkList(inputValue: string, contact: Contact) {
        var re = new RegExp("^" + inputValue, 'i');
        // parse name into first and last name
        return re.test(contact.name);
    }
    
    addTo(contact: Contact) {
        this.selectedContact.emit(contact);
    }
}