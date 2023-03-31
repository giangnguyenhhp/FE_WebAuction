import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactDto} from "../Models/ContactDto";
import {environment} from "../../../../../environments/environment";
import {CreateContactRequest} from "../Models/CreateContactRequest";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http : HttpClient
  ) { }

  getAllContacts() {
    return this.http.get<ContactDto[]>(`${environment.domain}/api/contact`)
  }

  deleteContact(contactId: string) {
    return this.http.delete(`${environment.domain}/api/contact/delete/${contactId}`)
  }

  createContact(request: CreateContactRequest) {
    return this.http.post<ContactDto>(`${environment.domain}/api/contact`,request)
  }
}
