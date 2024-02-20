import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { CartService } from '../services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';


@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, CommonModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {

  }


  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

}
