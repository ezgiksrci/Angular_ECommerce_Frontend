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

  user1 = { userId: 1, userName: 'Ezgi' };
  user2 = { userId: 2, userName: 'Elif' };
  user3 = { userId: 3, userName: 'Ece' };

  users = [this.user1, this.user2, this.user3];
}