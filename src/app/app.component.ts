import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // typescript'te tip güvenliği sağlamak için degisken_adi:type olarak yazılır.
  title: string = 'Northwind';

  user: string = 'Ezgi Keserci';

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

  user1 = { userId: 1, userName: 'Ezgi' };
  user2 = { userId: 2, userName: 'Elif' };
  user3 = { userId: 3, userName: 'Ece' };

  users = [this.user1, this.user2, this.user3];
}