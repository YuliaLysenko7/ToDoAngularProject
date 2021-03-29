import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Task, User } from './utils/types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(public service: MainService){}

  
  
  // counter: number=0

  // users: User[]=[
  //   {id:1, name:'Alex', age:15},
  //   {id:1, name:'Anna', age:19},
  //   {id:1, name:'Grisha', age:22}
  // ]


  // addOne=()=>{
  //   this.counter+=1
  // }

  // minusOne=()=>{
  //   this.counter-=1
  // }

  // addNewTaskAppHandler=(newText:string)=>{
  //   console.log(newText)
  // }

}
