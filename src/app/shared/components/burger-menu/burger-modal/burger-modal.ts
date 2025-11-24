import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-burger-modal',
  imports: [
    RouterLink
  ],
  templateUrl: './burger-modal.html',
  styleUrl: './burger-modal.scss'
})
export class BurgerModal {
  burgerMenuClicked = input();
}
