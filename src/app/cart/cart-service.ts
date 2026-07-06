import { Injectable, signal } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<Product[]>([]);

  addtoCart(product: Product) : void{console.log('Adding to cart', product.name);
    this.cartItems.update((items: any): Product[] => [...items, product]);
  }
}
