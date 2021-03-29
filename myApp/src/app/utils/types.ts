export interface Task{
  id:string;
  text: string;
  taskDate?: Date;
  isCompleted: boolean;
}


export interface User{
    id: number;
    name: string;
    age: number;
  }