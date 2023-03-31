import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LotProductDto} from "../Models/LotProductDto";
import {environment} from "../../../../../environments/environment";
import {CreateLotProductRequest} from "../Models/CreateLotProductRequest";
import {UpdateLotProductRequest} from "../Models/UpdateLotProductRequest";

@Injectable({
  providedIn: 'root'
})
export class LotProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllLotProducts() {
    return this.http.get<LotProductDto[]>(`${environment.domain}/api/lotProduct`);
  }

  createLotProduct(request: CreateLotProductRequest) {
    return this.http.post<LotProductDto>(`${environment.domain}/api/lotProduct`, request);
  }

  updateLotProduct(request: UpdateLotProductRequest) {
    return this.http.put<LotProductDto>(`${environment.domain}/api/lotProduct/update/${request.lotProductId}`, request);
  }

  deleteLotProduct(id: string) {
    return this.http.delete(`${environment.domain}/api/lotProduct/delete/${id}`);
  }
}
