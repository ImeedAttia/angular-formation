import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-api-follower',
  templateUrl: './api-follower.component.html',
  styleUrls: ['./api-follower.component.css']
})
export class ApiFollowerComponent implements OnInit {

  constructor(private router:ActivatedRoute,private routers:Router) {

   }
   id:any
   username : any
   type : any
  ngOnInit(): void {
   // dinamyque
    this.router.paramMap.subscribe(params =>{
      console.log(params)
      console.log(params.get("username"))
      console.log(params.keys)
      console.log(params.has("username"))
      this.username= params.get("username")
      this.id = params.get("id")
    })

    //gueery akali baad ? fel url
    this.router.queryParamMap.subscribe(query=>{
      console.log(query.get("page"),query.get("type"))

    })


    // orrr
    this.id = this.router.snapshot.paramMap.get('id')
    this.username = this.router.snapshot.paramMap.get('username')
    this.type = this.router.snapshot.queryParamMap.get('type')

  }

  ajouter(){
    this.routers.navigate(['api',12,"imed attia"],{
      queryParams:{
        type : "admin",
        page : 12

      }
    })
  }

}
