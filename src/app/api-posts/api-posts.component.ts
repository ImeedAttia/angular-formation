import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './../Service/post.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppError } from './../Commun/app-error';
import { NotFoundError } from './../Commun/not-found-error';
import { BadInput } from './../Commun/bad-input-error';
@Component({
  selector: 'app-api-posts',
  templateUrl: './api-posts.component.html',
  styleUrls: ['./api-posts.component.css']
})
export class ApiPostsComponent implements OnInit {
  Postes :any;
  buttonTitle: boolean = true;
  errorMsg: any;
  constructor(private Service:PostService) {

  }

  ngOnInit(): void {
    this.getPosts()
  }

  //get
getPosts(){

     this.Service.getAll().subscribe(responses =>{
      this.Postes = responses;
   },(error : Response) => {
    alert('erreur inatendue')
    console.log(error)
   })
}

  Poste :any= {
    id : 0,
    title : '',
    body : '',
    userId : ''
  }
  // http post
  CreatePost(){
    this.Service.Add(this.Poste).subscribe(data =>{

      console.log(data);
      // teyd meloul .unshift()
      this.Postes.unshift(data);
      //^pour vider la formulaire apres le poste
      this.Poste = {
        id : 0,
        title : '',
        body : '',
        userId : ''
      }
    },(error : Response) => {
      if(error instanceof BadInput){
        alert('Verifiée vos info ')
      }else{
        alert('erreur inatendue')
        console.log(error)
      }})

  }



  // Update
  EditPost(poste : any){
    this.buttonTitle=false
    this.Poste=poste

  }


  UpdatePost(){
    this.Service.Update(this.Poste).subscribe(data =>{
    this.Poste ={
      id : 0,
      title : '',
      body : '',
      userId : ''
    }
    this.buttonTitle = true
  }
    ,(error : Response) => {
      if(error instanceof BadInput){
        alert('Verifiée vos info ')
      }else{
        alert('erreur inatendue')
        console.log(error)
      }

  })
}

//delete
DeletePost(poste : any){
  this.Service.Delete(undefined).subscribe(data =>{
  let index = this.Postes.indexOf(poste)
  //splice effacer
  this.Postes.splice(index,1)
  alert("deleteed")
},(error : AppError) => {
  if(error instanceof NotFoundError){
    alert('Ce poste est deja supprimée')
  }else{
    alert('erreur inatendue')
    console.log(error)
  }

 })
}








}
