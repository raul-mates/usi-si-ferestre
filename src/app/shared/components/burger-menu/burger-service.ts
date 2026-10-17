import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  burgerMenuClicked = signal<boolean>(false);
}
