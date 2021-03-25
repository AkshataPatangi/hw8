import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    
  baseUrl: string = 'http://localhost:3000/searchmulti';
  queryUrl: string = '?search=';

  constructor(private http: HttpClient) { }
  
  searchEntries(term:string) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        
  }
}