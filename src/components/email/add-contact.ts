import {Component, Output, EventEmitter, OnInit} from 'angular2/core';
import {CreateTokenComponent} from './create-token';
import {ToListService} from './to-list.service';

@Component({
    selector: 'add-contact',
    template: require('./add-contact.html'),
    directives: [CreateTokenComponent],
    inputs: ['emptyIt']
})
export class AddContactComponent implements OnInit {
    allAddedContacts: Array<any>;
    @Output() inputChange = new EventEmitter<string>();

    constructor(private _toListService: ToListService) {}

    enterContact(contact: string) {
        this._toListService.addContact(contact);
    }

    ngOnInit() {
        this.allAddedContacts = this._toListService.getAddedContacts();
    }
}
