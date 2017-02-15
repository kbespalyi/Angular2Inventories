import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts.component';
import { ContactsDetailComponent } from './contacts-detail.component';
import { ContactsService } from './contacts.service';
import { ContactsRoutingModule } from './contacts.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent,
    ContactsDetailComponent
  ],
  providers: [ ContactsService ]
})

export class ContactsModule {}
