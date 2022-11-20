import { Card } from './card';
import { CardValue } from './card-value';
import { DECK_PAYLOAD } from './fixtures/deck-payload';
import { VALUES } from './constants/card-values';

export class Deck {
  private static instance;
  private cards: Card[];
  private readonly values: CardValue[] = VALUES;

  private constructor() {
    this.cards = DECK_PAYLOAD.map((cardPayload) => {
      return new Card(cardPayload.value, cardPayload.suit, cardPayload.color)
    });
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new Deck();
    }

    return this.instance;
  }
};
