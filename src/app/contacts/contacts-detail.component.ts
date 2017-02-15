import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { slideInDownAnimation } from '../animations';

import 'rxjs/add/operator/switchMap';

import { Contact } from '../shared/models/contact'
import { ContactsService }  from './contacts.service';

@Component({
  selector: 'contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css'],
  animations: [ slideInDownAnimation ]
})

export class ContactsDetailComponent implements OnInit {

  title = 'CONTACT';

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ContactsService
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getContact(+params['id']))
      .subscribe((contact: Contact) => this.contact = contact);
  }

  gotoContacts() {

    let contactId = this.contact ? this.contact.id : null;

    // Pass along the contact id if available
    // so that the ContactList component can select that contact.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['../', { id: contactId, foo: 'foo' }], { relativeTo: this.route });
    //this.router.navigate(['/contacts', { id: contactId, foo: 'foo' }]);
  }
}
