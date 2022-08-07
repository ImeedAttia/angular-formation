import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derictive',
  templateUrl: './derictive.component.html',
  styleUrls: ['./derictive.component.css']
})
export class DerictiveComponent implements OnInit {
  courses=["VueJs","angular","Laravel"];
  constructor() { }

  ngOnInit(): void {
  }
  //3) ngswitchcase
  viewCourse="Laravel";
  //4) ng for
  coursess: any;

  addcourses(){
   this.coursess.push({id:6,title:'reactJs'});
  }
  removeCourse(course :any){
    let index =this.coursess.indexOf(course);
    this.coursess.splice(index,1);
  }
  editCourse(course :any){
    course.title="updated";
  }


  //6)
  laodCourses(){
this.coursess=[
  {id: 1 , title:"Laravel"},
  {id: 2 , title:"angular"},
  {id: 3 , title:"VueJs"},
  {id: 4 , title:"Symphony"},
  {id: 5 , title:"AdonisJS"}
]
  }

  trackCourse(index:number,course:any){
  //return  if course not null then return course.id else return undefined
    return        course        ?      course.id       :       undefined;
  }
}
