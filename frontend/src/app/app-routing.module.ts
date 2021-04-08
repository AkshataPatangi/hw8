import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationEnd,Router,ActivatedRoute } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {MoviedetailsComponent} from './components/moviedetails/moviedetails.component';
import {TvdetailsComponent} from './components/tvdetails/tvdetails.component';
import {MylistsComponent} from './components/mylists/mylists.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'watch/movie/:id',component:MoviedetailsComponent},
  {path:'watch/tv/:id',component:TvdetailsComponent},
  {path:'mylist',component:MylistsComponent}
];

@NgModule({       
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
