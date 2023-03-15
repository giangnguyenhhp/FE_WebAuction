import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(
    private router : Router
  ) {
  }

  ngOnInit(): void {
  }

  IsAdminLoggedIn() {
    return true
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/main'])
  }
}
