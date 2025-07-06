import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OffresEmploiComponent} from "./offres-emploi/offres-emploi.component";
import {ArticlesComponent} from "./articles/articles.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'exercice1', component:OffresEmploiComponent},
  {path:'exercice2', component:ArticlesComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
