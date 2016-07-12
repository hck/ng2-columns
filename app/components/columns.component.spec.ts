import { ColumnsService } from './../services/columns.service';
import { CardsService } from './../services/cards.service';
import { ColumnsComponent } from './columns.component';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { inject, beforeEach, addProviders } from '@angular/core/testing';

import { COLUMNS } from './../services/mock-columns';
import { CARDS } from './../services/mock-cards';

describe('ColumnsComponent', () => {
    let tcb;

    beforeEach(() => {
        addProviders([ColumnsService, CardsService]);
    });

    beforeEach(inject([TestComponentBuilder], _tcb => {
        tcb = _tcb;
    }));

    it('it loads columns', (done) => {
        tcb.createAsync(ColumnsComponent).then(fixture => {
            fixture.detectChanges();

            let component = fixture.debugElement.componentInstance;

            component.ngOnInit().then(() => {
                expect(component.columns).toEqual(COLUMNS);
                expect(component.cards).toEqual(CARDS);
            }).catch(e => done.fail(e));

            done();
        }).catch(e => done.fail(e));
    })
});
