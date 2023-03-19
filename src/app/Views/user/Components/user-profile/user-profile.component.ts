import {Component} from '@angular/core';
import {UserDto} from "../../Models/UserDto";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../Services/user.service";
import {AuthenticationService} from "../../../authentication/Services/authentication.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user = <UserDto>{}
  id = '';
  Roles = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams['id'];
    if (this.id) {
      this.getUserById();
    } else
      this.getUserProfile();
  }

  getUserById() {
    //get user from id
    this.userService.getUserById(this.id).subscribe(res => {
      if (res) {
        this.user = res;
        for (let role of this.user.roles) {
          this.Roles += role.name + ','
        }
      }
    })
  }

  private getUserProfile() {
    this.authService.getUserProfile().subscribe(res => {
      if (res) {
        this.user = res;
        if (this.Roles === '') {
          for (let role of this.user.roles) {
            this.Roles += role.name + ','
          }
        }
      }
    })
  }
}
