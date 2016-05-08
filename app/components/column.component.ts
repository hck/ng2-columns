import {Component, EventEmitter} from '@angular/core';

import {Column} from '../models/column';
import {CardComponent} from '../components/card.component';
import {FilterWithPipe} from '../pipes/filter-with.pipe';

@Component({
    selector: 'column-component',
    templateUrl: 'app/templates/column.template.html',
    directives: [CardComponent],
    pipes: [FilterWithPipe],
    inputs: ['column', 'cards', 'draggedCard'],
    outputs: ['dragColumn', 'moveColumn', 'deleteColumn', 'dragCard', 'moveCard']
})

export class ColumnComponent {
    public column: Column;
    public isDragged: boolean = false;

    public dragColumn = new EventEmitter();
    public moveColumn = new EventEmitter();
    public deleteColumn = new EventEmitter();

    public dragCard = new EventEmitter();
    public moveCard = new EventEmitter();

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
            console.log('moving column');
            this.moveColumn.emit(this.column.id);
        }

        if (transferTypes.indexOf('draggedcardid') > -1) {
            console.log('moving card');
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
}
