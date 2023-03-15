import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoleService} from "../../Service/role.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoleRequest} from "../../Models/RoleRequest";

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent {
  updateRoleForm = new FormGroup({
    name: new FormControl('', Validators.required),
    id: new FormControl()
  });

  constructor(
    private roleService: RoleService,
    private dialogRef: MatDialogRef<UpdateRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.ngInitData();
  }

  submit() {
    const request = <RoleRequest>this.updateRoleForm.value;
    this.roleService.updateRole(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true);
      }
    })
  }

  private ngInitData() {
    this.updateRoleForm.patchValue(this.data)
  }
}
