import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { RoleService } from '../../Service/role.service';
import {MatDialogRef} from "@angular/material/dialog";
import {RoleRequest} from "../../Models/RoleRequest";

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent {
  createRoleFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(
    private roleService: RoleService,
    private dialogRef: MatDialogRef<CreateRoleComponent>
  ) {
  }

  ngOnInit() {
  }

  submit() {
    const request = <RoleRequest>this.createRoleFormGroup.value
    this.roleService.createRole(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
