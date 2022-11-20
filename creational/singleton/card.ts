import { CardColor } from './card-color';
import { CardSuit } from './card-suit';
import { CardValue } from './card-value';

export class Card {
  constructor(public value: CardValue, public suit: CardSuit, public color: CardColor) {
    this.value = value;
    this.suit = suit;
    this.color = color;
  }
};
