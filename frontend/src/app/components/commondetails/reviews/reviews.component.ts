import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
 @Input() reviews:any;
 @Input() count;any;
  constructor() { }

  ngOnInit(): void {
  }

}
