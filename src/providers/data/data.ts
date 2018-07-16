import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  limit:number = 50;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getGames(genre, offset_num) {
    
    let genre_id = genre;
    let offset = offset_num;

    return this.http.get('https://api-endpoint.igdb.com/games/?fields=name,release_dates,screenshots&limit='+this.limit+'&offset='+offset+'&order=release_dates.date:desc&filter[genres][eq]='+genre_id+'&filter[screenshots][exists]', 
      {
        headers: { 
          'user-key': ' bda92525df8e94f07f8e7216407f2fd6',
          Accept: 'application/json'
        }
      })
      .map(response => response);
  }

}
