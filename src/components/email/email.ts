import {Component, Input} from 'angular2/core';
import {Contact} from '../contact/contact';
import {AddContactComponent} from './add-contact';
import {AddHiddenContactComponent} from './add-hidden-contact';

@Component({
    selector: 'email',
    template: require('./email.html'),
    inputs: ['contacts'],
    directives: [AddContactComponent, AddHiddenContactComponent]
})

export class EmailComponent {
    addedContacts:any[] = [];
    @Input() inputChange
    
    addSelectedContact(contact: Contact) {
        this.addedContacts.push(contact);
    }

    addInputContact(contact: string) {
        this.addedContacts.push(contact);
    }


}

