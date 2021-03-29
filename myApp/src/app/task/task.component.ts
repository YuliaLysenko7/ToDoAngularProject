import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import { Task } from '../utils/types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent  {
  newTaskText=""
  @Output() delEmiter= new EventEmitter<string>()
  @Output() changeEmiter= new EventEmitter<string>()
   
  deleteHandler=()=>{
    this.delEmiter.emit(this.oneTask.id)
  }

  onChangeHandler=()=>{
    this.changeEmiter.emit(this.oneTask.id)
  }

 @Input() oneTask: Task ={id:'', text:'', isCompleted:false}  
  

}
