import { Headers, RequestOptions } from '@angular/http';

let contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

export const options = new RequestOptions({ headers: contentHeaders });
