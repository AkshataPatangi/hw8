import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
    
  baseUrl: string = '/searchmulti';
  queryUrl: string = '?search=';

  constructor(private http: HttpClient) { }
  
  searchEntries(term:string) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        
  }
}