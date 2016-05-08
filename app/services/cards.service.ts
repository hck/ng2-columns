import {Injectable} from '@angular/core';
import {Card} from '../models/card';
import {CARDS} from './mock-cards';

@Injectable()

export class CardsService {
    fetchAll() {
        return Promise.resolve(CARDS);
    }

    moveCard(cards: Card[], cardId: Number, columnId: Number) {
        let result: Card[];
        let card: Card = cards.find(card => { return card.id == cardId });

        if (card.columnId != columnId) {
            let cardIndex = cards.indexOf(card);
            card.columnId = columnId;

            result = cards.slice();
            result.splice(cardIndex, 1);
            result.push(card);
        } else {
            result = cards;
        }

        return Promise.resolve(result);
    }
}
