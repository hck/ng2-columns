import {Component, EventEmitter} from 'angular2/core';

import {Card} from '../models/card';

@Component({
    selector: 'card-component',
    templateUrl: 'app/templates/card.template.html',
    inputs: ['card']
})

export class CardComponent {
    public card: Card;
    //public isDragged: boolean = false;

    //public dragColumn = new EventEmitter();
    //public moveColumn = new EventEmitter();
    //public deleteColumn = new EventEmitter();

    //private _isDragAllowed(event) {
    //    return event.dataTransfer.types.indexOf('draggedcolumnid') > -1;
    //}
    //
    //onDragStart(event) {
    //    event.dataTransfer.setData('draggedColumnId', this.column.id);
    //    event.dataTransfer.effectAllowed = 'move';
    //    event.dataTransfer.dropEffect = 'move';
    //    event.stopPropagation();
    //
    //    this.isDragged = true;
    //
    //    this.dragColumn.emit(this.column);
    //}
    //
    //onDragOver(event, column) {
    //    if (!this._isDragAllowed(event)) return true;
    //    event.preventDefault();
    //}
    //
    //onDragEnter(event, column) {
    //    if (!this._isDragAllowed(event)) return true;
    //
    //    this.moveColumn.emit(column.id);
    //}
    //
    //onDragLeave(event, column) {
    //    if (!this._isDragAllowed(event)) return true;
    //}
    //
    //onDrop(event, column) {
    //    if (!this._isDragAllowed(event)) return true;
    //
    //    event.preventDefault();
    //    const columnId = event.dataTransfer.getData('draggedColumnId');
    //}
    //
    //onDragEnd(event) {
    //    this.isDragged = false;
    //}
}
