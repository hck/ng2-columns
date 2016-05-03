import {Component, OnInit} from 'angular2/core';
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
    public _dragColumn: Column;
    public columns: Column[];
    public cards: Card[];

    constructor(private _columnsService: ColumnsService, private _cardsService: CardsService) {}

    ngOnInit() {
        this._columnsService.fetchAll().then(columns => this.columns = columns);
        this._cardsService.fetchAll().then(cards => { console.log(cards); this.cards = cards });
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
}
