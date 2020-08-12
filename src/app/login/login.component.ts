import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router: Router,
    private authenticationservice: AuthenticationService,
    private basicauthenticationservice: BasicAuthenticationService
    ) { }
  ngOnInit() {
  }

  handleBasicLogin() {
    if (this.authenticationservice.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleLogin() {
    this.basicauthenticationservice.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false;
      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }
    )    
  }

  signUp(){
    this.router.navigate(['signup'])
  }
}
