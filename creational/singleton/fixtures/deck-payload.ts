import { Card } from '../card';
import { CardColor } from '../card-color';
import { CardSuit } from '../card-suit';
import { CardValue } from '../card-value';
import { VALUES } from '../constants/card-values';

const createPayload: (values: CardValue[]) => Card[] = (values: CardValue[]) => {
  return Object.values(CardSuit)
    .map((suit: CardSuit) => {
      return values.map((value: CardValue) => {
        return {
          value,
          suit,
        };
      });
    })
    .flat()
    .map((card, ind) => {
      return { ...card, color: ind < 26 ? CardColor.Black : CardColor.Red };
    });
};

export const DECK_PAYLOAD = createPayload(VALUES);
