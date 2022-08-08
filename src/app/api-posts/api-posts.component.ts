import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-api-posts',
  templateUrl: './api-posts.component.html',
  styleUrls: ['./api-posts.component.css']
})
export class ApiPostsComponent implements OnInit {
  Postes :any;
  buttonTitle: boolean = true;
  constructor(private http: HttpClient) {
    //get
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(responses =>{
       this.Postes = responses;
    })
  }




  ngOnInit(): void {
  }

  Poste :any= {
    id : 0,
    title : '',
    body : '',
    userId : ''
  }
  // http post
  CreatePost(){
    this.http.post('https://jsonplaceholder.typicode.com/posts',this.Poste).subscribe(data =>{

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
    })

  }



  // Update
  EditPost(poste : any){
    this.buttonTitle=false
    this.Poste=poste

  }


  UpdatePost(){
    this.http.put('https://jsonplaceholder.typicode.com/posts/'+this.Poste.id,this.Poste).subscribe(data =>{
    console.log(data);
    this.Poste ={
      id : 0,
      title : '',
      body : '',
      userId : ''
    }
    this.buttonTitle = true
  })
}

//delete
DeletePost(poste : any){
this.http.delete('https://jsonplaceholder.typicode.com/posts/'+this.Poste.id).subscribe(data =>{
  console.log(data);
  alert('delete sucess')
  let index = this.Postes.indexOf(poste)
  //splice effacer
  this.Postes.splice(index,1)
})
}
}
