import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/data/todo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name="";
  welcomeMessage = ""

  constructor(
    private route: ActivatedRoute,
    private httpservice: TodoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
  }

  
  handleSuccessfulMessage(){
    this.router.navigate(['todos'])
  }

}
