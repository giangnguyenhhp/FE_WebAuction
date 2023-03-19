import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthenticationService} from "../../Services/authentication.service";

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent {
  showError = false;
  errorMessage = '';
  showSuccess = false;

  constructor(private route: ActivatedRoute,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.confirmEmail()
  }

  private confirmEmail() {
    const token = this.route.snapshot.queryParams['token'];
    const email = this.route.snapshot.queryParams['email'];
    console.log(token);
    console.log(email);

    this.authService.confirmEmail(token, email).subscribe({
      next: (_) => this.showSuccess = true,
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.message;
      }
    })

  }

}
