import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contact } from '../shared/models/contact'
import { ContactsService }  from './contacts.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'contacts-root',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  title = 'CONTACTS';

  contacts: Observable<Contact[]>;
  private selectedId: number;

  constructor(
    private service: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.contacts = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getContacts();
      });
  }

  isSelected(contact: Contact) {
    return contact.id === this.selectedId;
  }

  onSelect(contact: Contact) {
    this.selectedId = contact.id;

    // Navigate with relative link
    this.router.navigate([contact.id], { relativeTo: this.route });
    //this.router.navigate(['/contacts/contact', contact.id]);
  }
}
