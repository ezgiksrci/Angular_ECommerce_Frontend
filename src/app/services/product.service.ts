import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

/* ng g service service_adi */
/* Injectable => Angular'da service'ler */

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  apiUrl = 'https://localhost:44383/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    // let => method içinde local değişken tanımlamak için.
    let newPath = this.apiUrl + 'products/getall';

    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategoryId(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + 'products/getbycategoryid?categoryId=' + categoryId;

    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'products/add',
      product
    );
  }
}
