import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isDone: boolean) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent implements OnInit {
  
  todos: Todo []
  username: string
  message: string
  // [
  //   new Todo(1,"Learn Dance",false,new Date()),
  //   new Todo(2,"Learn Singing",false,new Date()),
  //   new Todo(3,"Learn Cycling",false,new Date()),
  //   new Todo(4,"Learn speaking",false,new Date())]
    constructor(
      private service: TodoService,
      private authservice: BasicAuthenticationService,
      private router: Router) { }

  ngOnInit() {
    this.username = this.authservice.getAuthenticatedUser()
    this.refreshTodos();  
  }
  
  refreshTodos(){
    
    this.service.retreiveTodoList(this.username).subscribe(
      response => {
        this.todos = response
      }
    );
  }

  deleteTodo(id, description)  {
    this.service.deleteTodo(this.username,id).subscribe(
      response => {        
        this.message = `Delete for ${description} Succesful!`
        this.refreshTodos();
      }
    );    
  }

  updateTodo(id){
     this.router.navigate(["todo",id])
  }

  addTodo(){
    this.router.navigate(["todo",-1])
  }

}
