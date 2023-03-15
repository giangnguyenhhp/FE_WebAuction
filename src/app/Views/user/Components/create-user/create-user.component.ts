import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../Services/user.service';
import {PasswordValidatorService} from "../../Services/password-validator.service";
import {RoleDto} from "../../../role/Models/RoleDto";
import {RoleService} from "../../../role/Service/role.service";
import {CreateUserDto} from "../../Models/CreateUserDto";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  createUserFormGroup = new FormGroup({
    "address": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, Validators.email]),
    "userName": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required]),
    "phoneNumber": new FormControl('', [Validators.required]),
    "confirmPassword": new FormControl(),
    "roleNames": new FormControl([], [Validators.required]),
  });
  roles: RoleDto[]=[];

  constructor(
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private userService: UserService,
    private passwordService: PasswordValidatorService,
    private roleService: RoleService
  ) {
  }

  ngOnInit() {
    this.setValidators();
    this.roleService.getAllRoles().subscribe(res=>{
      if(res){
        this.roles = res
      }
    });
  }

  setValidators() {
    this.createUserFormGroup.get('confirmPassword')?.setValidators(
      [Validators.required, this.passwordService.validateConfirmPassword(this.createUserFormGroup.get('password'))]
    )
  }

  submit() {
    const request = <CreateUserDto>this.createUserFormGroup.value
    this.userService.createUser(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.createUserFormGroup.get(controlName)?.invalid
      && this.createUserFormGroup.get(controlName)?.touched
      && this.createUserFormGroup.get(controlName)?.hasError(errorName)
  }
}
