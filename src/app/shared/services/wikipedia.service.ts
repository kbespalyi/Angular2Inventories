import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface IWikiItem {
  title: String;
  description: String;
};

@Injectable()
export class WikipediaService {

  private times: number = 0;

  constructor(private jsonp: Jsonp) {}

  search (term: string) {
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', `__ng_jsonp__.__req${this.times}.finished`);
    // let queryString = `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;

    this.times++;

    return this
      .jsonp
      .get(wikiUrl, { search: params })
      .map(response => {
        const items = {
          titles: <String[]> response.json()[1],
          descriptions: <String[]> response.json()[2]
        }
        if (items.titles) {
          return items.titles.map((title, index) => ({
              title: title,
              description: items.descriptions[index]
            })
          );
        } else {
          return [];
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }  
}