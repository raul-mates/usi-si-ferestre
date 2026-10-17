import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SmallCard } from '../../shared/components/small-card/small-card';
import { ISmallCard } from '../../shared/components/small-card/small-card.model';
import { cards } from './cards.data';

@Component({
  selector: 'app-homepage',
  imports: [
    RouterLink,
    SmallCard
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  infoCards = signal<ISmallCard[]>(cards);
  selectedCard = signal<number>(0);

  onSelectedCard(event: number | PointerEvent): void {
    this.selectedCard.set((event as number) !== this.selectedCard() ? (event as number) : 0);
  }

  deselectEventDelegation(event: PointerEvent): void {
    if (!(event.target as HTMLElement).classList.value.includes('card-container')) this.selectedCard.set(0);
  }
}
