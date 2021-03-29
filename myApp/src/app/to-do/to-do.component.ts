
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Task } from '../utils/types';



@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(public service: MainService){}
ngOnInit(){
  this.service.getTasks(this.url).subscribe(response=>this.taskArray=response)
  
} 
taskArray: Task[] = []

  generate(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  url = 'http://localhost:3004/tasks'
  addNewTaskAppHandler = (newText: string) => {
    this.service.postTask(this.url, { id: this.generate(), text: newText, taskDate: new Date(), isCompleted: false }).subscribe(response=>console.log(response))// on server
    this.taskArray.push({ id: this.generate(), text: newText, taskDate: new Date(), isCompleted: false })//пушим в масив

  }

  deleteHandler=(id:string)=>{
    this.taskArray= this.taskArray.filter((task)=>task.id!==id)
      this.service.deleteTaskByID(this.url, id).subscribe(responce=>console.log('del'))
  }

  isCheckedHandler=(id:string)=>{
    this.taskArray= this.taskArray.map(task=>{
      if(task.id===id){
        this.service.checkedTaskById(this.url, id, !task.isCompleted).subscribe(responce=>console.log('isCompleted'))
        return {
          ...task, isCompleted: !task.isCompleted
              }}
        else{
          return task
        }
      })


     
  }

  showArray = () => {
    console.log(this.taskArray)
  }
  
}
