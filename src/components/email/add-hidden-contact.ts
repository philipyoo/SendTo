import {Component, Output, EventEmitter} from 'angular2/core';
import {Contact} from '../contact/contact';
import {ContactDetailComponent} from '../contact/contact-detail';
import {ToListService} from './to-list.service';

@Component({
    selector: 'add-hidden-contact',
    template: require('./add-hidden-contact.html'),
    directives: [ContactDetailComponent],
    inputs: ['contacts', 'searchContact']
})

export class AddHiddenContactComponent {
    @Output() emptyInputField = new EventEmitter<boolean>();
    
    checkList(inputValue: string, contact: Contact) {
        var re = new RegExp("^" + inputValue, 'i');
        // parse name into first and last name
        return re.test(contact.name);
    }

    constructor(private _toListService: ToListService) {}

    addSelected(contact: Contact) {
        this._toListService.addContact({name: contact.name, email: contact.email});
        this.emptyInputField.emit(true);
    }

}