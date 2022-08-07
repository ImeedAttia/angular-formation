import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup,FormControl,Validator } from '@angular/forms';
import {Usernamevalidator} from './username.validator';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor() { }
  submit(f : NgForm){

  }
  ngOnInit(): void {
  }
  //FormControl(1/ la valuer initiale ,2/ les fncts  )
  form= new FormGroup({
    username : new FormControl("",[Validators.required,Validators.minLength(10),Validators.email,Usernamevalidator.cannotContainSpace]),
    password : new FormControl("",[Validators.required,Validators.minLength(10),Validators.email])
  })

get username(){
  return this.form.get("username")
}
get password(){
  return this.form.get("password")
}

}
