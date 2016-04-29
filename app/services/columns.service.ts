import {Injectable} from 'angular2/core';
import {Column} from '../models/column';
import {COLUMNS} from './mock-columns';

@Injectable()

export class ColumnsService {
    fetchAll() {
        return Promise.resolve(COLUMNS);
    }

    moveColumn(columns: Column[], columnId: Number, dstColumnId: Number) {
        const column = columns.find(column => column.id == columnId);
        const columnIndex = columns.indexOf(column);

        var columns = columns.slice();
        columns.splice(columnIndex, 1);

        const dstColumn = columns.find(column => column.id == dstColumnId);
        const dstIndex = columns.indexOf(dstColumn);

        const index = columnIndex > dstIndex ? dstIndex : dstIndex + 1;
        columns.splice(index, 0, column);

        return Promise.resolve(columns);
    }
}
