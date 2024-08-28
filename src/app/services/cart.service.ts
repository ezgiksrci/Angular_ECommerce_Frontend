import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product): void {
    let cartItem = CartItems.find(
      (c) => c.product.productId === product.productId
    );

    if (cartItem) {
      cartItem.quantity++;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeFromCart(product: Product) {
    let cartItem: CartItem = CartItems.find(
      (c) => c.product.productId === product.productId
    );

    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      CartItems.splice(CartItems.indexOf(cartItem), 1);
    }
  }
}
