import { Component, OnInit } from '@angular/core';
import { MylistsService } from './mylists.component.service';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout'; 


@Component({
  selector: 'app-mylists',
  templateUrl: './mylists.component.html',
  styleUrls: ['./mylists.component.css']
})
export class MylistsComponent implements OnInit {
  details:any;
  colclass = 'col-md-2'
  constructor(private service:MylistsService,private router: Router,public bo: BreakpointObserver) { }

  ngOnInit(): void {
    var mylists = JSON.parse(localStorage.getItem('watchlist'));
    this.service.MylistDetails(mylists).subscribe(response=>this.details=response);
    this.bo.observe([Breakpoints.Handset])
      .subscribe((bs: BreakpointState) => {
        if(bs.matches) {
          this.colclass = 'col-sm-2'
        } 
      })
  }
}
