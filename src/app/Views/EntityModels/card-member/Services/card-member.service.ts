import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CardMemberDto} from "../Models/CardMemberDto";
import {environment} from "../../../../../environments/environment";
import {CreateCardMemberRequest} from "../Models/CreateCardMemberRequest";
import {UpdateCardMemberRequest} from "../Models/UpdateCardMemberRequest";

@Injectable({
  providedIn: 'root'
})
export class CardMemberService {

  constructor(
    private http : HttpClient
  ) { }

  getAllCardMembers() {
    return this.http.get<CardMemberDto[]>(`${environment.domain}/api/cardMember`)
  }

  createCardMember(request: CreateCardMemberRequest) {
    return this.http.post<CardMemberDto>(`${environment.domain}/api/cardMember`,request)
  }

  deleteCardMember(cardId: string) {
    return this.http.delete(`${environment.domain}/api/cardMember/delete/${cardId}`)

  }

  updateCardMember(request: UpdateCardMemberRequest) {
    return this.http.put(`${environment.domain}/api/cardMember/update/${request.cardId}`,request)

  }
}
