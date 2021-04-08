import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CastDetailsService } from './castmodal.component.service'


@Component({
  selector: 'app-castmodal',
  templateUrl: './castmodal.component.html',
  styleUrls: ['./castmodal.component.css']
})

export class CastmodalComponent implements OnInit {
 
  @Input() personid;
  @Input() castimage;
  fromParent:any;
  constructor(public activeModal: NgbActiveModal, private service:CastDetailsService) { }

  ngOnInit(): void {
    console.log(this.personid)
    this.service.castDetails(this.personid).subscribe(response => {
      this.fromParent = response;
      console.log(this.fromParent)
    });
  }
  closeModal() {
    this.activeModal.close();
  }
}
