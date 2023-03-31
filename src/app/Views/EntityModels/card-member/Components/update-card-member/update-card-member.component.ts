import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CardMemberService} from "../../Services/card-member.service";
import {UpdateCardMemberRequest} from "../../Models/UpdateCardMemberRequest";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-update-card-member',
  templateUrl: './update-card-member.component.html',
  styleUrls: ['./update-card-member.component.scss']
})
export class UpdateCardMemberComponent {
  updateCardMemberForm= new FormGroup({
    "cardId": new FormControl(),
    "nameMember": new FormControl('',[Validators.required]),
    "addressMember": new FormControl('',[Validators.required]),
    "phoneNumberMember": new FormControl('',[Validators.required]),
    "deposit": new FormControl(500000,[Validators.required,Validators.min(500000)]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialogRef : MatDialogRef<UpdateCardMemberComponent>,
    private cardMemberService : CardMemberService
  ) {
  }

  ngOnInit() {
    this.inItData();
  }

  validateControl(controlName: string, errorName: string) {
    return this.updateCardMemberForm.get(controlName)?.invalid
      && this.updateCardMemberForm.get(controlName)?.touched
      && this.updateCardMemberForm.get(controlName)?.hasError(errorName)
  }

  submit() {
    const request = <UpdateCardMemberRequest>this.updateCardMemberForm.value;
    this.cardMemberService.updateCardMember(request).subscribe({
      next:_=>{
        this.dialogRef.close(true);
      },
      error:(err:HttpErrorResponse) => {
        console.log(err.message);
      }
    })
  }

  private inItData() {
    this.updateCardMemberForm.patchValue(this.data)
  }
}
