import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/data/todo.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = "";
  password = "";
  
  constructor(
    private route: ActivatedRoute,
    private httpservice: TodoService,
    private router: Router
  ) { }

  
  ngOnInit() {
  }

  createUser(){
    this.router.navigate(['todos'])
  }

  createNewUser(){
    this.httpservice.createUser(this.username, this.password);
  }

}
