import {Pipe} from '@angular/core';

@Pipe({
    name: 'filterWith'
})

export class FilterWithPipe {
    transform(value, key, val): any {
        return value && value.filter(item => item[key] == val);
    }
}
