import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.css']
})
export class ExComponent implements OnInit {
@Input('is-fav') isSelected : boolean = false;
@Output('change') hello = new EventEmitter()
constructor() { }

  ngOnInit(): void {
  }
  myFavorite(){
    this.isSelected = !this.isSelected;
    this.hello.emit({newState : this.isSelected});
  }

}
