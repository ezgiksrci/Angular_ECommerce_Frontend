import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseModel } from '../models/productResponseModel';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

/* ng g service service_adi */
/* Injectable => Angular'da service'ler */

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  apiUrl = 'https://localhost:44383/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
