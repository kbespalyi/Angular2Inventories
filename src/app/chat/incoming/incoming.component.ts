import { Component, ElementRef } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.css']
})

export class IncomingMessagesComponent {

    private messages: Message[] = new Array();

    constructor(
      private chatService: ChatService
    ) {

      chatService.messages.subscribe(msg => {
        this.messages.push(msg);
      });
      
    }
}