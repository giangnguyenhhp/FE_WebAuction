import {CategoryDto} from "../../category-model/Models/CategoryDto";

export interface ProductDto {
  "productId": string,
  "productName": string,
  "priceOpen": number,
  "description": string,
  "isApproved": boolean,
  Category : CategoryDto,
}
