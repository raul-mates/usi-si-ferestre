import { Component, signal } from '@angular/core';
import { BurgerModal } from './burger-modal/burger-modal';

@Component({
  selector: 'app-burger-menu',
  imports: [
    BurgerModal
  ],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss'
})
export class BurgerMenu {
  burgerMenuClicked = signal<boolean>(false);
}
