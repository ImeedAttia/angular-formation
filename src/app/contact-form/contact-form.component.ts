import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  Contact=[{id : 1 ,name : 'email'},{id : 2 , name :"telephone"},{id :3 , name : "sms"}]
  constructor() { }

  ngOnInit(): void {
  }
  submit(f : NgForm){
    console.log(f);
    console.log(f.value);
    console.log(f.value.User);
    console.log(f.value.User.firstName);

  }
}
