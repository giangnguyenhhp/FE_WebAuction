import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoleDto} from "../../../role/Models/RoleDto";
import {UserService} from '../../Services/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoleService} from "../../../role/Service/role.service";
import {UpdateUserDto} from "../../Models/UpdateUserDto";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  updateUserFormGroup = new FormGroup({
    "address": new FormControl('', [Validators.required]),
    "userName": new FormControl('', [Validators.required]),
    "roleNames": new FormControl(),
    "id": new FormControl()
  });
  roles: RoleDto[] = [];
  userRoles: string[] = [];

  constructor(
    private roleService: RoleService,
    private userService: UserService,
    private dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.roleService.getAllRoles().subscribe(res => {
      if (res) {
        this.roles = res;
      }
    })
  }

  ngOnInit() {
    this.InitData();
  }

  submit() {
    const request = <UpdateUserDto>this.updateUserFormGroup.value
    this.userService.updateUser(request).subscribe(res => {
      if (res) {
        this.dialogRef.close(true);
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.updateUserFormGroup.get(controlName)?.invalid
      && this.updateUserFormGroup.get(controlName)?.touched
      && this.updateUserFormGroup.get(controlName)?.hasError(errorName)
  }

  private InitData() {
    this.updateUserFormGroup.patchValue(this.data)
    for (const role of this.data.roles) {
      this.userRoles.push(role.name);
    }
    this.updateUserFormGroup.controls.roleNames.setValue(this.userRoles)
  }
}
