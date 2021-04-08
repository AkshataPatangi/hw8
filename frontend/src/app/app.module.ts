import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { TvdetailsComponent } from './components/tvdetails/tvdetails.component';
import { MylistsComponent } from './components/mylists/mylists.component';
import { CommondetailsComponent } from './components/commondetails/commondetails.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import {CarouselPopularComponent} from './components/homepage/carousel-popular/carousel-popular.component';
import {CarouselComponent} from './components/homepage/carousel/carousel.component';
import {CarouselGeneralComponent} from './components/carousel-general/carousel-general.component';
import { CarouselTopratedComponent } from './components/homepage/carousel-toprated/carousel-toprated.component';
import { CarouselTrendingComponent } from './components/homepage/carousel-trending/carousel-trending.component';
import { CarouselTopratedTvComponent } from './components/homepage/carousel-toprated-tv/carousel-toprated-tv.component';
import { CarouselTrendingTvComponent } from './components/homepage/carousel-trending-tv/carousel-trending-tv.component';
import { CarouselPopularTvComponent } from './components/homepage/carousel-popular-tv/carousel-popular-tv.component';
import { FooterComponent } from './components/footer/footer.component';
import { YoutubePlayerComponent } from './components/commondetails/youtube-player/youtube-player.component';
import { CastandcrewComponent } from './components/commondetails/castandcrew/castandcrew.component';
import { ReviewsComponent } from './components/commondetails/reviews/reviews.component';
import { CastmodalComponent } from './components/commondetails/castmodal/castmodal.component';
import { CarouselContinueComponent } from './components/homepage/carousel-continue/carousel-continue.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoviedetailsComponent,
    TvdetailsComponent,
    MylistsComponent,
    CommondetailsComponent,
    NavbarComponent,
    SearchComponent,
    CarouselPopularComponent,
    CarouselComponent,
    CarouselGeneralComponent,
    CarouselTopratedComponent,
    CarouselTrendingComponent,
    CarouselTopratedTvComponent,
    CarouselTrendingTvComponent,
    CarouselPopularTvComponent,
    FooterComponent,
    YoutubePlayerComponent,
    CastandcrewComponent,
    ReviewsComponent,
    CastmodalComponent,
    CarouselContinueComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents:[
    CastmodalComponent
  ],
})
export class AppModule { }
