import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from '../../Services/contact.service';
import {MatDialogRef} from "@angular/material/dialog";
import {CreateContactRequest} from "../../Models/CreateContactRequest";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent {
  createContactForm = new FormGroup({
    "fullName": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required]),
    "message": new FormControl('', [Validators.required]),
    "phoneNumber": new FormControl('', [Validators.required]),
  });

  constructor(
    private contactService: ContactService,
    private dialogRef: MatDialogRef<CreateContactComponent>
  ) {
  }

  ngOnInit() {
  }

  submit() {
    const request = <CreateContactRequest>this.createContactForm.value
    this.contactService.createContact(request).subscribe({
      next:_=>{
        this.dialogRef.close(true);
      },
      error:(err:HttpErrorResponse) => {
        console.log(err.message);
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.createContactForm.get(controlName)?.invalid
    && this.createContactForm.get(controlName)?.touched
    && this.createContactForm.get(controlName)?.hasError(errorName)
  }
}
