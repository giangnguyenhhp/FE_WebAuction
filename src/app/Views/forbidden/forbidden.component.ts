import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss']
})
export class ForbiddenComponent {
constructor(private router : Router) {
}
  navigateToLogin() {
    this.router.navigate(['/authentication/login'])
  }
}
