import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{

  constructor(private authenitationservice: AuthenticationService,
              private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authenitationservice.isUserLoggedIn()){
      return true;
    }else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
