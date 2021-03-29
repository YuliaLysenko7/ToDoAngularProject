import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './utils/types';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public http: HttpClient) { }

  getTasks(url:string) {
    return this.http.get<Task[]>(url)
  }  
  
  postTask(url: string, newTask: Task)  {
   return this.http.post(url, newTask)//пушим в масив
}

deleteTaskByID(url:string, id:string){
  return this.http.delete(url+'/'+id)
}

checkedTaskById(url:string, id:string, isComplited:boolean){
  return this.http.patch(url+'/'+id,{isCompleted:isComplited})}
}
