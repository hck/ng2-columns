import {Component, ViewChild, EventEmitter, ElementRef, AfterViewInit} from '@angular/core';

import {Card} from '../models/card';

@Component({
    selector: 'card-component',
    templateUrl: 'app/templates/card.template.html',
    inputs: ['card', 'draggedCard', 'dragCardEnd'],
    outputs: ['dragCard', 'moveCard']
})

export class CardComponent implements AfterViewInit {
    @ViewChild('dragDiv') dragDiv: ElementRef;

    public card: Card;
    public isDragged: boolean;
    public dragCardEnd: EventEmitter<Card>;

    public dragCard = new EventEmitter<Card>();
    //public moveCard = new EventEmitter();

    ngAfterViewInit() {
        let component = this;

        this.dragDiv.nativeElement.addEventListener('ondragend', (event) => {
            component.onDragEnd(event);
        });

        // this.dragDiv.nativeElement.ondragend = (event) => {
        //     component.onDragEnd(event);
        // };
    }

    private _isDragAllowed(event) {
        return event.dataTransfer.types.indexOf('draggedcardid') > -1;
    }

    onDragStart(event) {
        event.dataTransfer.setData('draggedCardId', this.card.id);
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        event.stopPropagation();

        this.dragCard.emit(this.card);
        this.isDragged = true;
    }

    onDragOver(event) {
        if (!this._isDragAllowed(event)) return true;
        event.preventDefault();
    }

    onDragEnter(event) {
        if (!this._isDragAllowed(event)) return true;
        //this.moveCard.emit(card.id);
    }

    onDragLeave(event) {
        if (!this._isDragAllowed(event)) return true;
    }

    onDragEnd(event) {
        this.dragCardEnd.emit(this.card);
        this.isDragged = false;
    }
}
