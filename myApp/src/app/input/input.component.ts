import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})


export class InputComponent {
  newTaskText=""
  @Output() textEmiter=new EventEmitter<string>()

  addNewTask=()=>{
    this.textEmiter.emit(this.newTaskText)
    console.log(this.newTaskText)
  }
  // constructor() {     }

  // ngOnInit(): void {
  //   alert('Hello')
  // }

}
