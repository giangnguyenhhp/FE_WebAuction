import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {
  }

  ngOnInit(): void {
    this.checkToken()

  }

  IsAdminLoggedIn() {
    const token = localStorage.getItem('token')
    if(token){
      const decodeToken = this.jwtHelper.decodeToken(token);
      const role = decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      return role === "Admin";
    }
    return false;
  }

  isUserAuthenticated() {
    const token = localStorage.getItem('token');
    return token != null;
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/'])
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (this.jwtHelper.isTokenExpired(token)) {
      localStorage.clear()
    }
    if (token!=null) {
      console.log(this.jwtHelper.getTokenExpirationDate(token))
    }
  }
}
