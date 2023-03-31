import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CardMemberService} from "../../Services/card-member.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CreateCardMemberRequest} from "../../Models/CreateCardMemberRequest";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-card-member',
  templateUrl: './create-card-member.component.html',
  styleUrls: ['./create-card-member.component.scss']
})
export class CreateCardMemberComponent {
  createCardMemberForm = new FormGroup({
    "nameMember": new FormControl('',[Validators.required]),
    "addressMember": new FormControl('',[Validators.required]),
    "phoneNumberMember": new FormControl('',[Validators.required]),
    "deposit": new FormControl(500000,[Validators.required,Validators.min(500000)]),
  });

  constructor(
    private cardMemberService : CardMemberService,
    private dialogRef : MatDialogRef<CreateCardMemberComponent>
  ) {
  }

  ngOnInit() {

  }

  submit() {
    const request = <CreateCardMemberRequest>this.createCardMemberForm.value;
    this.cardMemberService.createCardMember(request).subscribe({
      next:_=>{
        this.dialogRef.close(true);
      },
      error:(err:HttpErrorResponse) => {
        console.log(err.message);
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.createCardMemberForm.get(controlName)?.invalid
      && this.createCardMemberForm.get(controlName)?.touched
      && this.createCardMemberForm.get(controlName)?.hasError(errorName)
  }
}
