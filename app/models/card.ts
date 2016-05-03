export class Card {
    constructor(
        public id: Number,
        public columnId: Number,
        public title: String,
        public description?: String,
        public points?: Number) {
    }
}
