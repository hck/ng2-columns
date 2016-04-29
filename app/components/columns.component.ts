import {Component, OnInit} from 'angular2/core';
import {Column} from '../models/column';
import {ColumnsService} from '../services/columns.service';
import {ColumnComponent} from '../components/column.component';

@Component({
    selector: 'columns-component',
    templateUrl: 'app/templates/columns.template.html',
    directives: [ColumnComponent]
})

export class ColumnsComponent implements OnInit {
    public _dragColumn: Column;
    public columns: Column[];

    constructor(private _columnsService: ColumnsService) {}

    ngOnInit() {
        this._columnsService.fetchAll().then(columns => this.columns = columns);
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
