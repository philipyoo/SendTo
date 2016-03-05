import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CreateTokenComponent} from './create-token';

@Component({
    selector: 'add-contact',
    template: require('./add-contact.html'),
    directives: [CreateTokenComponent],
    inputs: ['addedContacts']
})
export class AddContactComponent {
    @Input() contacts;
    @Output() inputChange = new EventEmitter<string>();
    @Output() addInputContact = new EventEmitter<string>();
    
    addContact(contact: string) {
        this.addInputContact.emit(contact)
    }
}