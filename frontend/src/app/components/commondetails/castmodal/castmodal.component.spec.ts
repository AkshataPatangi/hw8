import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastmodalComponent } from './castmodal.component';

describe('CastmodalComponent', () => {
  let component: CastmodalComponent;
  let fixture: ComponentFixture<CastmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
