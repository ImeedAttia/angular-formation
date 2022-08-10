import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ResumePipe } from './resume.pipe';
import { ExComponent } from './ex/ex.component';
import { PanelComponent } from './panel/panel.component';
import { DerictiveComponent } from './derictive/derictive.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ApiPostsComponent } from './api-posts/api-posts.component';
import { PostService } from './Service/post.service';
import { DataService } from './Service/data.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiFollowerComponent } from './api-follower/api-follower.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TwoWayComponent,
    ResumePipe,
    ExComponent,
    PanelComponent,
    DerictiveComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignUpFormComponent,
    ApiPostsComponent,
    GithubFollowersComponent,
    PageNotFoundComponent,
    ApiFollowerComponent,
    NavbarComponent
  ],
  imports: [

BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],

  providers: [CourseComponent,TwoWayComponent,ExComponent,PostService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
