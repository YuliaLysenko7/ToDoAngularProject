import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../home/home.component';
import { ToDoComponent } from '../to-do/to-do.component';

const toDoRoute: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'todo', component:ToDoComponent}
]


@NgModule({

  imports: [RouterModule.forRoot(toDoRoute)],
  exports: [RouterModule]
  
})
export class RoutingModuleModule { }
