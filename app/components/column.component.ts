import {Component, EventEmitter} from '@angular/core';

import {Column} from '../models/column';
import {Card} from '../models/card';
import {CardComponent} from '../components/card.component';

@Component({
    selector: 'column-component',
    templateUrl: 'app/templates/column.template.html',
    directives: [CardComponent],
    inputs: ['column', 'cards', 'draggedCard'],
    outputs: ['dragColumn', 'moveColumn', 'deleteColumn', 'dragCard', 'moveCard', 'dragCardEnd']
})

export class ColumnComponent {
    public cards: Card[];
    public column: Column;
    public isDragged: boolean = false;

    public dragColumn = new EventEmitter();
    public moveColumn = new EventEmitter();
    public deleteColumn = new EventEmitter();

    public dragCard = new EventEmitter();
    public moveCard = new EventEmitter();
    public dragCardEnd = new EventEmitter();

    private _isDragAllowed(event) {
        let transferTypes = event.dataTransfer.types;
        return transferTypes.indexOf('draggedcolumnid') > -1 || transferTypes.indexOf('draggedcardid') > -1;
    }

    onDragStart(event) {
        event.dataTransfer.setData('draggedColumnId', this.column.id);
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        event.stopPropagation();

        this.isDragged = true;

        this.dragColumn.emit(this.column);
    }

    onDragOver(event) {
        if (!this._isDragAllowed(event)) return true;
        event.preventDefault();
    }

    onDragEnter(event) {
        if (!this._isDragAllowed(event)) return true;

        let transferTypes = event.dataTransfer.types;

        if (transferTypes.indexOf('draggedcolumnid') > -1) {
            this.moveColumn.emit(this.column.id);
        }

        if (transferTypes.indexOf('draggedcardid') > -1) {
            this.moveCard.emit(this.column.id);
        }
    }

    onDragLeave(event) {
        if (!this._isDragAllowed(event)) return true;
    }

    onDrop(event) {
        if (!this._isDragAllowed(event)) return true;
    }

    onDragEnd(event) {
        this.isDragged = false;
    }

    onDragCard(event) {
        this.dragCard.emit(event);
    }

    onDragCardEnd(event) {
        this.dragCardEnd.emit(event);
    }

    columnCards() {
        return this.cards.filter(card => card.columnId === this.column.id);
    }
}
