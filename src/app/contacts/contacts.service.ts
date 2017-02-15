import { Injectable } from '@angular/core';
import { Contact } from '../shared/models/contact'

let CONTACTS = [
  new Contact(11, 'Mr. Nice'),
  new Contact(12, 'Narco'),
  new Contact(13, 'Bombasto'),
  new Contact(14, 'Celeritas'),
  new Contact(15, 'Magneta'),
  new Contact(16, 'RubberMan')
];

let contactsPromise = Promise.resolve(CONTACTS);

@Injectable()
export class ContactsService {
  getContacts() { return contactsPromise; }
  getContact(id: number | string) {
    return contactsPromise
      .then(contacts => contacts.find(contact => contact.id === +id));
  }
}
