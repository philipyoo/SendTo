import {Component} from 'angular2/core';
import {ToListService} from './to-list.service';

@Component({
    selector: 'create-token',
    template: require('./create-token.html'),
    inputs: ['contact']
})
export class CreateTokenComponent {
    constructor(private _toListService: ToListService) {}
    
    removeContact(contact: any) {
        this._toListService.removeContact(contact);
    }
}