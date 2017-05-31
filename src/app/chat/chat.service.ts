import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { ConfigService } from '../shared/services/config.service';
import { WebSocketService } from '../shared/services/websocket.service';

export interface Message {
  author: string;
  message: string;
}

@Injectable()
export class ChatService {

  public messages: Subject<Message>;

  constructor(
    private configService: ConfigService,
    private wsService: WebSocketService
  ) {

    this.messages = <Subject<Message>> wsService
      .connect(configService.getUrls().socketWS_Chat)
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message,
        }
      });
  }
}