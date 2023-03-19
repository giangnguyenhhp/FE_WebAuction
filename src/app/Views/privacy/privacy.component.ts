import {Component} from '@angular/core';
import {AuthenticationService} from "../authentication/Services/authentication.service";
import {ClaimsDto} from "./ClaimsDto";

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  public claims: ClaimsDto[] = []


  constructor(
    private authService: AuthenticationService,
  ) {
  }

  ngOnInit() {
    this.getPrivacy();
  }

  private getPrivacy() {
    this.authService.getClaims().subscribe(res => {
      if (res) {
        this.claims = res;
      }
    })
  }



}
