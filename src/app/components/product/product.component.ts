import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // any tipi ile her türlü veriyi tutabiliriz.
  product1: any = {
    productId: 1,
    productName: 'Dondurma',
    categoryId: 2,
    unitPrice: 15
  };

  products = [
    { productId: 32432, productName: 'Dondurma', categoryId: 2, unitPrice: 15 },
    { productId: 11129, productName: 'Çikolata', categoryId: 2, unitPrice: 20 },
    { productId: 24535, productName: 'Çilek', categoryId: 2, unitPrice: 25 },
    { productId: 67874, productName: 'Muz', categoryId: 2, unitPrice: 30 },
    { productId: 50032, productName: 'Elma', categoryId: 2, unitPrice: 35 }
  ];

}
