import {Component} from 'angular2/core';

@Component({
    selector: 'create-token',
    template: require('./create-token.html'),
    inputs: ['contact']
})
export class CreateTokenComponent {
    // does contact exist in contact list?
}