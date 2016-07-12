export class Card {
    constructor(
        public id: number,
        public columnId: number,
        public title: string,
        public description?: string,
        public points?: number) {
    }
}
