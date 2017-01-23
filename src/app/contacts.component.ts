import {Component} from '@angular/core';
import {Contact} from './models/contact';
import {ContactsService} from "./contacts.service";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent {

  // contact: Contact = {
  //   id: 6,
  //   name: 'Diana Ellis',
  //   email: '',
  //   phone: '',
  //   birthday: '',
  //   website: '',
  //   image: '/assets/images/6.jpg',
  //   address: {
  //     street: '6554 park lane',
  //     zip: '43378',
  //     city: 'Rush',
  //     country: 'United States'
  //   }
  // };

  // contacts = CONTACT_DATA;

  // trackByContacts(index: number, aContact: Contact) {
  //   return aContact.id;
  // }

  // contacts: Array<Contact>;
  // constructor(private contactsService: ContactsService) {
  // }
  //
  //
  // ngOnInit() {
  //   this.contacts = this.contactsService.getContacts();
  // }

}
