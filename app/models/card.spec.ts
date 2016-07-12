import { Card } from './card';

describe('Card', () => {
    let card: Card;

    beforeEach(() => {
        card = <Card>{id: 1, columnId: 101, title: 'Sample Card'};
    });

    it('has id', () => {
        expect(card.id).toEqual(1);
    });

    it('has columnId', () => {
        expect(card.columnId).toEqual(101);
    });

    it('has title', () => {
        expect(card.title).toEqual('Sample Card');
    });
});
