import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {Subject} from 'rxjs';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {debounceTime} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commondetails',
  templateUrl: './commondetails.component.html',
  styleUrls: ['./commondetails.component.css']
})
export class CommondetailsComponent implements OnInit {
 @Input() details: any;
 @Input() castcrew:any;
 @Input() reviews:any;
 @Input() recommend:any;
 @Input() similar:any;
 @Input() carouselid:any;
 @Input() mediatype:any;
 @Input() mobileresultsr:any;
 @Input() mobileresultss:any;
 private _success = new Subject<string>();
 private _danger = new Subject<string>();


  successMessage = '';
  dangerMessage = '';
  
  constructor(private router: Router) { }

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;
  @ViewChild('dangerselfClosingAlert', {static: false}) dangerselfClosingAlert: NgbAlert;

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
    this._danger.subscribe(message => this.dangerMessage = message);
    this._danger.pipe(debounceTime(5000)).subscribe(() => {
      if (this.dangerselfClosingAlert) {
        this.dangerselfClosingAlert.close();
      }
    });
  }
  twitterURL(){
    var twit = 'https://twitter.com/intent/tweet?text=';
    var strval = 'Watch ' + this.details['name'].replaceAll('&','%26') + '%0A' + 'https://www.youtube.com/watch?v=' + this.details['vkey'] + '%0A' +'%23USC %23CSCI571 %23FightOn'
    return twit+strval

  }
  facebookURL(){
    var fb = "https://www.facebook.com/sharer/sharer.php?u=";
    var yt = 'https://www.youtube.com/watch?v=' + this.details['vkey']
    return fb+yt

  }

  checkexistance(): boolean{
    var watchlisttemp = JSON.parse(localStorage.getItem('watchlist'));
    for(var i=0;i<watchlisttemp.length;i++){
      if(watchlisttemp[i]['id'] == this.details['id'] && watchlisttemp[i]['media_type'] == this.mediatype){
        return true
      }
    }
    return false
  }
  addtowatchlist():void{
    var watchlisttemp = JSON.parse(localStorage.getItem('watchlist'));
    if (this.dangerselfClosingAlert) {
      this.dangerselfClosingAlert.close();
    }
    console.log(JSON.parse(localStorage.getItem('watchlist')))
    watchlisttemp.unshift({'id':this.details['id'],'media_type':this.mediatype});
    localStorage.setItem('watchlist', JSON.stringify(watchlisttemp));
    this._success.next('Added to watchlist.');
    console.log(JSON.parse(localStorage.getItem('watchlist')))
  }
  removefromwatchlist():void{
    if (this.selfClosingAlert) {
      this.selfClosingAlert.close();
    }
    var  temparray = JSON.parse(localStorage.getItem('watchlist'));
    console.log(JSON.parse(localStorage.getItem('watchlist')))
    for(var i=0;i<temparray.length;i++){
       if(temparray[i]['id'] == this.details['id'] && temparray[i]['media_type'] == this.mediatype){
          temparray.splice(i,1);
          break;
       }
    }
    localStorage.setItem('watchlist', JSON.stringify(temparray));
    this._danger.next('Removed from watchlist.');
    console.log(JSON.parse(localStorage.getItem('watchlist')))
  }

}
