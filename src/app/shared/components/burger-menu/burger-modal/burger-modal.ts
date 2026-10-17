import { Component, inject, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BurgerService } from '../burger-service';

@Component({
  selector: 'app-burger-modal',
  imports: [
    RouterLink
  ],
  templateUrl: './burger-modal.html',
  styleUrl: './burger-modal.scss'
})
export class BurgerModal {
  readonly #burgerService = inject(BurgerService);
  burgerMenuClicked: WritableSignal<boolean> = this.#burgerService.burgerMenuClicked;

  onLinkClicked(event: PointerEvent) {
    const currentTarget = event.currentTarget as HTMLElement | null;
    if (currentTarget) {
      currentTarget.classList.remove('left');
      this.burgerMenuClicked.set(false);
    }
  }
}
