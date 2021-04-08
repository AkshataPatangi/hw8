import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class TVDetailsService {
  baseUrl: string = '/tvdetails?tvid=';
  baseUrl1: string = '/tvcastcrew?tvid=';
  baseUrl2: string = '/tvreviews?tvid=';
  baseUrl3: string = '/tvrecommend?tvid=';
  baseUrl4: string = '/tvsimilar?tvid=';

  constructor(private http: HttpClient) { }
  
  TVDetails(movieid:string) {
    return this.http
        .get(this.baseUrl  + movieid)
        
  }
  TVCastCrewDetails(movieid:string) {
    return this.http
    .get(this.baseUrl1  + movieid)
  }
  TVReviews(movieid:string) {
    return this.http
    .get(this.baseUrl2  + movieid)
  }
  TVRecommend(movieid:string) {
    return this.http
    .get(this.baseUrl3  + movieid)
  }
  TVSimilar(movieid:string) {
    return this.http
    .get(this.baseUrl4  + movieid)
  }
    
}