import { Component, inject, WritableSignal } from '@angular/core';
import { BurgerModal } from './burger-modal/burger-modal';
import { BurgerService } from './burger-service';

@Component({
  selector: 'app-burger-menu',
  imports: [
    BurgerModal
  ],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss'
})
export class BurgerMenu {
  readonly #burgerService = inject(BurgerService);
  burgerMenuClicked: WritableSignal<boolean> = this.#burgerService.burgerMenuClicked;
}
