import {Component, Input} from 'angular2/core';

@Component({
    selector: 'contact-detail',
    template: require('./contact-detail.html')
})

export class ContactDetailComponent {
    @Input() contact;
}



