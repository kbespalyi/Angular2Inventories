import { Headers, RequestOptions } from '@angular/http';

let contentHeaders = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});
//contentHeaders.append();
//contentHeaders.append();

export const options = new RequestOptions({ headers: contentHeaders });
