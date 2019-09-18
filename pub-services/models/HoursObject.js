class HoursObject {


    static toJson(value) {
        // TODO => retouner la valeur au format json
        return value;
    }

    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    toString() {
        return `Open at: ${this.start} and close at: ${this.end}`;
    }
}

module.exports = HoursObject;