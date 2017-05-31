import { Injectable, Component } from '@angular/core';
import { Observer, Observable, Subject } from 'rxjs/Rx';
//import { Zone } from 'zone.js/dist/zone';

@Injectable()
export class WebSocketService {
  
  private socket: Subject<MessageEvent>;

  constructor() {}

  public connect(url: string, room?: string, secret?: string): Subject<MessageEvent> {
    if (!url) {
      url = 'ws://localhost:3010';
    }
    if(!this.socket) {
      this.socket = this.create(url, room, secret);
    }
    return this.socket;
  }

  private create(url: string, room?: string, secret?: string): Subject<MessageEvent> {
    let ws = new WebSocket(url);
    let observable = Observable
      .create((obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        
        return ws.close.bind(ws);
      }
    );

    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(data));
        }
      },
    };

    /*
    ws.onopen = function() {
      if (!secret) {
        secret = 'bah!';
      }
      if (!room) {
        room = 'secrete-zone';
      }
      
      Zone.current
        .fork({
          properties: {
            secretPayload: secret
          },
          name: room
        })
        .run(function() {
          ws.onmessage = function(eventListener) {
            if (Zone.current.get('secretPayload') === secret) {
              console.log("The current zone (id: %s) has secretPayload. Zones are working!", Zone.current.name);
            } else {
              console.error('Secret payload not found where expected! Zones are not working! :-(', Zone.current.name);
            }
          };
          console.log('Setting secret payload in the current zone (id: %s)', Zone.current.name);
        });
      ws.send('hello!');
    };
    */

    return Subject.create(observer, observable);
  }

}
