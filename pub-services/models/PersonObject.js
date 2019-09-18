class PersonObject {

    static toJson(value) {
        // TODO => retouner la valeur au format json
        return value;
    }

    constructor(firstName, lastName, mail) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
    }

    toString() {
        return `${this.firstName}_${this.lastName}`;
    }
}

module.exports = PersonObject;