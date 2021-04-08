import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
   
@Injectable({
  providedIn: 'root'
})
export class CarouselContinueService {
    public listofdata = [];
    baseUrl1: string = '/moviedetails?movieid=';
    baseUrl2: string = '/tvdetails?tvid=';
    
  constructor(private http: HttpClient) { }
    MylistDetails() {
        var mylists = JSON.parse(localStorage.getItem('continuewatch'));
        this.listofdata = [];
        for(var i=0;i<mylists.length;i++){
          if(mylists[i]['media_type'] == 'movie'){
            this.listofdata.push(this.http.get(this.baseUrl1  + mylists[i]['id']))
          }else{
            this.listofdata.push(this.http.get(this.baseUrl2  + mylists[i]['id']))
          }
        }
       
        return forkJoin(this.listofdata)
    }
    
}