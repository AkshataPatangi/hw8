import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTypeaheadTemplate } from './search/typeahead-template';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselTrendingComponent } from './carousel-trending/carousel-trending.component';
import { CarouselGeneralComponent } from './carousel-general/carousel-general.component';




@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    NgbdTypeaheadTemplate,
    CarouselTrendingComponent,
    CarouselGeneralComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  exports: [CarouselComponent],
  providers: [],
  bootstrap: [AppComponent,CarouselComponent]
})
export class AppModule { }
