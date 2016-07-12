import { Column } from './column';

describe('Column', () => {
    let column: Column;

    beforeEach(() => {
       column = {id: 101, title: 'To Do'};
    });

    it('has id', () => {
        expect(column.id).toEqual(101);
    });

    it('has title', () => {
        expect(column.title).toEqual('To Do');
    });
});
