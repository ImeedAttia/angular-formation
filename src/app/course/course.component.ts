import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }
  onClick($event : any){
    $event.stopPropagation();
    console.log("btn est clicker",$event)
  }
  ngOnInit(): void {
  }
  OnClickDiv(){
    console.log("div is clicked !")
  }
  onKey(){

    console.log("angular key");
  }
  onKey1($event :any){

    console.log($event.target.value);
  }
  onKey2(e :any){

    console.log(e.value);
  }
}
