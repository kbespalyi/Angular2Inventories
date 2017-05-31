import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }               from '@angular/common';
import { FormsModule }                from '@angular/forms';

import { ChatService }                from './chat.service';

import { ChatComponent }              from './chat.component';
import { CreateMessageComponent }     from './create-message/create-message.component';
import { IncomingMessagesComponent }  from './incoming/incoming.component';

@NgModule({
  declarations: [
    ChatComponent,
    CreateMessageComponent,
    IncomingMessagesComponent
  ],
  exports: [
    ChatComponent,
    CreateMessageComponent,
    IncomingMessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ChatService ]
})

export class ChatModule {}
