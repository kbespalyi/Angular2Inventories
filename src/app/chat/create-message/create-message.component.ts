import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})

export class CreateMessageComponent {

  private submitted = false;
  private message = {
    author: 'gogo',
    message: '',
  }

  constructor(
    private chatService: ChatService
  ) {}

  private onSubmit() {
    this.chatService.messages.next(this.message);
    this.message.message = '';
  }

}