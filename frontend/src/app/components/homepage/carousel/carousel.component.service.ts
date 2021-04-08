import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  url = '/currently';
    
  constructor(private httpClient: HttpClient) { }
   
  getPosts(){
    return this.httpClient.get(this.url)
  }
    
}