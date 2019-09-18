class BeersObject {

    static toJson(value) {
        // TODO => retouner la valeur au format json
        return value;
    }

    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    toString() {
        return `beer name : ${this.name} and her type is: ${this.type}`;
    }
}

module.exports = BeersObject;