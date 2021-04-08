import { Component, Input, OnInit } from '@angular/core';
import {CastmodalComponent} from './../castmodal/castmodal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout'; 
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-castandcrew',
  templateUrl: './castandcrew.component.html',
  styleUrls: ['./castandcrew.component.css'],
  providers:[CastmodalComponent]
})

export class CastandcrewComponent implements OnInit {
@Input() castcrew:any;
mobile = false
size='lg'
colclass = 'col-2 card-group'

  constructor( private modalService: NgbModal,public bo: BreakpointObserver) { }

  ngOnInit(): void {
    this.bo.observe([Breakpoints.Handset])
      .subscribe((bs: BreakpointState) => {
        if(bs.matches) {
          this.mobile = true;
          this.size = 'sm';
          this.colclass= 'col-6 card-group';
        } 
      })
  }

  openModal(id,image) {
    const modalRef = this.modalService.open(CastmodalComponent,
      {
        size: this.size,
        
        centered: true,
      });
      console.log(this.size)

    modalRef.componentInstance.personid = id;
    modalRef.componentInstance.castimage = image;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }
}
