import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-homepage',
  imports: [
    RouterLink,
    ButtonModule
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  selectedCard = signal<number>(0);

  deselectEventDelegation(event: PointerEvent): void {
    if (!(event.target as HTMLElement).classList.value.includes('card-container')) this.selectedCard.set(0);
  }
}
