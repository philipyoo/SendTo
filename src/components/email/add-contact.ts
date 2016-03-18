import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {CreateTokenComponent} from './create-token';
import {ToListService} from './to-list.service';

@Component({
    selector: 'add-contact',
    template: require('./add-contact.html'),
    directives: [CreateTokenComponent],
    inputs: ['emptyInputField']
})
export class AddContactComponent implements OnInit {
    allAddedContacts: Array<any>;
    @Output() inputChange = new EventEmitter<string>();
    @Input() emptyInputField;
    @Output() resetClickToggleBool = new EventEmitter<boolean>();

    constructor(private _toListService: ToListService) {}

    enterContact(contact: string) {
        this._toListService.addContact(contact);
    }

    ngOnInit() {
        this.allAddedContacts = this._toListService.getAddedContacts();
    }

    emptyOnClick() {
      this.inputChange.emit('');
      this.emptyInputField = false;
      this.resetClickToggleBool.emit(this.emptyInputField);
      return '';
    }
}
