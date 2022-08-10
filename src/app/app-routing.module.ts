import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiFollowerComponent } from './api-follower/api-follower.component';
import { ApiPostsComponent } from './api-posts/api-posts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseComponent } from './course/course.component';
import { DerictiveComponent } from './derictive/derictive.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : "derct",
    component :DerictiveComponent
  },
  {
    path : "api",
    component :ApiPostsComponent
  },
  {
    path : "api/:id/:username",
    component :ApiFollowerComponent},
  {
    path : "git" ,
    component :GithubFollowersComponent
  },
  {
    path : "course" ,
    component :CourseComponent
  },
  {
    path : "two-way" ,
    component :TwoWayComponent
  },
  {
    path : "Contact" ,
    component :ContactFormComponent
  },
  {
    path : "Reactive" ,
    component :SignUpFormComponent
  },
  // pour les router qui nexiste pas
  {
    path : "**" ,
    component :PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
