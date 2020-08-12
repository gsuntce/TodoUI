import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  username: string
  todo: Todo
  constructor(
    private todoservice: TodoService,
    private route: ActivatedRoute,
    private authservice: BasicAuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = this.authservice.getAuthenticatedUser()
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', new Date(), false)
    if (this.id != -1) {
      this.todoservice.retreiveTodo(this.username, this.id).subscribe(
        data => {
          this.todo = data
        }
      )

    }
  }

  saveTodo() {
    console.log("Saving todo")
    if (this.id == -1) {
      this.todoservice.createTodo(this.username, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
      this.todoservice.updateTodo(this.username, this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }

}
