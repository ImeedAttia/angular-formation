import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DerictiveComponent } from './derictive/derictive.component';

const routes: Routes = [
  {path : "derct" , component :DerictiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
