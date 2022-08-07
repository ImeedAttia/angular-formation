import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CourseComponent,TwoWayComponent,ExComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
