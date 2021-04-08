import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class CastDetailsService {
    baseUrl: string = '/castdetails?personid=';
    constructor(private http: HttpClient) { }
    castDetails(personid:string) {
        return this.http
            .get(this.baseUrl  + personid)
            
      }
}