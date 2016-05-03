import {Pipe} from 'angular2/core';

@Pipe({
    name: 'filterWith'
})

export class FilterWith {
    transform(value, [key, val]): any {
        return value && value.filter(item => item[key] == val);
    }
}
