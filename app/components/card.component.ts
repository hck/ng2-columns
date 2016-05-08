import {Component, EventEmitter} from '@angular/core';

import {Card} from '../models/card';

@Component({
    selector: 'card-component',
    templateUrl: 'app/templates/card.template.html',
    inputs: ['card', 'draggedCard'],
    outputs: ['dragCard', 'moveCard']
})

export class CardComponent {
    public card: Card;

    public isDragged: boolean = false;

    public dragCard = new EventEmitter();
    public moveCard = new EventEmitter();

    private _isDragAllowed(event) {
        return event.dataTransfer.types.indexOf('draggedcardid') > -1;
    }

    onDragStart(event) {
        event.dataTransfer.setData('draggedCardId', this.card.id);
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        event.stopPropagation();

        this.isDragged = true;

        this.dragCard.emit(this.card);
    }

    onDragOver(event, card) {
        if (!this._isDragAllowed(event)) return true;
        event.preventDefault();
    }

    onDragEnter(event, card) {
        if (!this._isDragAllowed(event)) return true;
        //this.moveCard.emit(card.id);
    }

    onDragLeave(event, card) {
        if (!this._isDragAllowed(event)) return true;
    }

    onDrop(event, card) {
        if (!this._isDragAllowed(event)) return true;
    }

    onDragEnd(event) {
        this.isDragged = false;
    }
}
