import {Component, Input} from 'angular2/core';
import {AddContactComponent} from './add-contact';
import {AddHiddenContactComponent} from './add-hidden-contact';
import {ToListService} from './to-list.service';

@Component({
    selector: 'email',
    template: require('./email.html'),
    inputs: ['contacts', 'from'],
    directives: [AddContactComponent, AddHiddenContactComponent],
    providers: [ToListService]
})

export class EmailComponent {
    @Input() inputChange;
    showingCc: boolean;
    showingBcc: boolean;
    

    constructor(private _toListService: ToListService) {}

    addSelectedContact(contact: any) {
        this._toListService.addContact(contact);
    }

}

