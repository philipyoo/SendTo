import {Component, OnInit} from "angular2/core";
import {EmailComponent} from '../../components/email/email';
import {ContactDetailComponent} from '../../components/contact/contact-detail';
import {Contact} from '../../components/contact/contact';
import {ContactService} from '../../components/contact/contact.service';

@Component({
    selector: 'app-shell',
    template: require('./app-shell.html'),
    directives: [EmailComponent, ContactDetailComponent],
    providers: [ContactService]
})
export class AppShell implements OnInit {
    contacts: Contact[];
    constructor(private _contactService: ContactService) { }

    getContacts() {
        this._contactService.getContacts().then(contacts => this.contacts = contacts);
    }

    ngOnInit() {
        this.getContacts();
    }
}