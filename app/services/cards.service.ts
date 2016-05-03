import {Injectable} from 'angular2/core';
import {Card} from '../models/card';
import {CARDS} from './mock-cards';

@Injectable()

export class CardsService {
    fetchAll() {
        return Promise.resolve(CARDS);
    }
}
