import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselContinueComponent } from './carousel-continue.component';

describe('CarouselContinueComponent', () => {
  let component: CarouselContinueComponent;
  let fixture: ComponentFixture<CarouselContinueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselContinueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
