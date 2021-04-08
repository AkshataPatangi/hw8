import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  baseUrl: string = '/moviedetails?movieid=';
  baseUrl1: string = '/moviecastcrew?movieid=';
  baseUrl2: string = '/moviereviews?movieid=';
  baseUrl3: string = '/moviesrecommend?movieid=';
  baseUrl4: string = '/moviessimilar?movieid=';

  constructor(private http: HttpClient) { }
  
  MovieDetails(movieid:string) {
    return this.http
        .get(this.baseUrl  + movieid)
        
  }
  MovieCastCrewDetails(movieid:string) {
    return this.http
    .get(this.baseUrl1  + movieid)
  }
  MovieReviews(movieid:string) {
    return this.http
    .get(this.baseUrl2  + movieid)
  }
  MovieRecommend(movieid:string) {
    return this.http
    .get(this.baseUrl3  + movieid)
  }
  MovieSimilar(movieid:string) {
    return this.http
    .get(this.baseUrl4  + movieid)
  }
    
}