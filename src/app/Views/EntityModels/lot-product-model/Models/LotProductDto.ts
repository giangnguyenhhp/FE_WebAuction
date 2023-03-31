import {ProductDto} from "../../product-model/Models/ProductDto";

export interface LotProductDto {
  "lotProductId": string,
  "priceLotOpen": number,
  "timeStarted": Date,
  "timeEnded": Date,
  "priceOfferMax": number,
  "products": ProductDto[]
}
