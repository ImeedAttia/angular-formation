import { Component, OnInit } from '@angular/core';
import { ExerciceService } from './../Service/exercice.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {


  Ppl : any
  errorMsg: any;
  constructor(private Service:ExerciceService) {

  }

  ngOnInit(): void {
    this.get()
  }

  //get
get(){
     this.Service.getAll().subscribe(responses =>{
      this.Ppl = responses;
   },(error : Response) => {
    alert('erreur inatendue')
    console.log(error)
   })
}


  }



