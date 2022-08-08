import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiPostsComponent } from './api-posts/api-posts.component';
import { DerictiveComponent } from './derictive/derictive.component';

const routes: Routes = [
  {path : "derct" , component :DerictiveComponent},
  {path : "api" , component :ApiPostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
