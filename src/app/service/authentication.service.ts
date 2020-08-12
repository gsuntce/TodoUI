import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticate(username, password){
    if(username === "leapdemo" && password === "dd"){
      sessionStorage.setItem("authenticatedUser",username)
      return true;
    }else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem("authenticatedUser")
  }
  constructor() { }
}
