import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.html',
  styleUrl: './small-card.scss',
  standalone: true
})
export class SmallCard {
  cardId = input<number>(0)
  iconName = input<string>('');
  header = input<string>('');
  mainParagraph = input<string>('');
  smallFootnote = input<string>('');
  selectedCard = input<number>(0);

  onSelectedCard = output<number>();

  onCardClicked(cardId: number): void {
    this.onSelectedCard.emit(cardId);
  }
}
