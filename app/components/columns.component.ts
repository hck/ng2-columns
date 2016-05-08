import {Component, OnInit} from '@angular/core';
import {Column} from '../models/column';
import {ColumnsService} from '../services/columns.service';
import {Card} from '../models/card';
import {CardsService} from '../services/cards.service';
import {ColumnComponent} from '../components/column.component';

@Component({
    selector: 'columns-component',
    templateUrl: 'app/templates/columns.template.html',
    directives: [ColumnComponent]
})

export class ColumnsComponent implements OnInit {
    private _dragColumn: Column;
    public dragCard: Card;

    public columns: Column[];
    public cards: Card[];

    constructor(private _columnsService: ColumnsService, private _cardsService: CardsService) {}

    ngOnInit() {
        this._columnsService.fetchAll().then(columns => this.columns = columns);
        this._cardsService.fetchAll().then(cards => { this.cards = cards });
    }

    onDragColumn(event) {
        this._dragColumn = event;
    }

    onMoveColumn(event) {
        const columnId = this._dragColumn.id;
        const dstColumnId = event;

        if (columnId !== dstColumnId) {
            this._columnsService.moveColumn(this.columns, columnId, dstColumnId)
                .then(columns => this.columns = columns);
        }
    }

    onDragCard(event) {
        this.dragCard = event;
    }

    onMoveCard(event) {
        const cardId = this.dragCard.id;
        const dstColumnId = event;

        this._cardsService.moveCard(this.cards, cardId, dstColumnId)
            .then(cards => {
                this.cards = cards;
            });
    }
}
