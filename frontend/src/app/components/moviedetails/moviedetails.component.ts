import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from './moviedetails.component.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  private id;
  results: any;
  castcrew:any;
  reviews: any;
  recommend:any;
  similar:any;
  continuelisttemp = JSON.parse(localStorage.getItem('continuewatch'));
  constructor(private route: ActivatedRoute, private service:MovieDetailsService,public bo: BreakpointObserver) {
  
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.MovieDetails(this.id).subscribe(response => {
      this.results = response;
    });
    this.service.MovieCastCrewDetails(this.id).subscribe(response => {
      this.castcrew = response;
    });
    this.service.MovieReviews(this.id).subscribe(response => {
      this.reviews = response;
    });
    this.service.MovieRecommend(this.id).subscribe(response => {
      this.recommend = response;
      this.bo.observe([Breakpoints.Handset])
      .subscribe((bs: BreakpointState) => {
        if(bs.matches) {
          var mobileresults = new Array()
          for(var i=0;i<this.recommend.length;i++){
            for(var j=0;j<this.recommend[i].length;j++){
              mobileresults.push([this.recommend[i][j]])
            }
          }
          this.recommend = mobileresults
        } 
      })
      
        
    });
    this.service.MovieSimilar(this.id).subscribe(response => {
      this.similar = response;
      this.bo.observe([Breakpoints.Handset])
      .subscribe((bs: BreakpointState) => {
        if(bs.matches) {
          var mobileresults = new Array()
          for(var i=0;i<this.similar.length;i++){
            for(var j=0;j<this.similar[i].length;j++){
              mobileresults.push([this.similar[i][j]])
            }
          }
          this.similar = mobileresults
        } 
      })
      
    });

    
    for(var i=0;i<this.continuelisttemp.length;i++){
      if(this.continuelisttemp[i]['id']== this.id && this.continuelisttemp[i]['media_type'] == 'movie'){
          this.continuelisttemp.splice(i,1)
          break;
      }
    }
    if(this.continuelisttemp.length == 24){
      this.continuelisttemp.pop()
    }
    this.continuelisttemp.unshift({'id':this.id,'media_type':'movie'})
    localStorage.setItem('continuewatch', JSON.stringify(this.continuelisttemp));
    // console.log(JSON.parse(localStorage.getItem('continuewatch')))
}

}
