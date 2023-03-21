import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryDto} from "../Models/CategoryDto";
import {environment} from "../../../../../environments/environment";
import {CreateCategoryRequest} from "../Models/CreateCategoryRequest";
import {UpdateCategoryRequest} from "../Models/UpdateCategoryRequest";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllCategories() {
    return this.http.get<CategoryDto[]>(`${environment.domain}/api/category`)
  }

  createCategory(request: CreateCategoryRequest) {
    return this.http.post<CategoryDto>(`${environment.domain}/api/category`, request)
  }

  updateCategory(request: UpdateCategoryRequest) {
    return this.http.put<CategoryDto>(`${environment.domain}/api/category/update/${request.categoryId}}`, request)
  }

  deleteCategory(categoryId: string) {
    return this.http.delete(`${environment.domain}/api/category/delete/${categoryId}`)
  }
}
