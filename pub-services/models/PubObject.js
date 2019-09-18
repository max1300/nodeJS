const Beers = require('../models/BeersObject');
const Hours = require('../models/HoursObject');
const Person = require('../models/PersonObject');


class PubObject {

    static toJson(value) {
        // TODO => retouner la valeur au format json
        return value;
    }

    constructor(name, owner, openDays, openHours, beers) {
        this.name = name;
        this.owner = new Person(owner.firstName, owner.lastName, owner.mail);
        this.openDays = openDays;
        this.openHours = new Hours(openHours.start, openHours.end);
        this.beers = beers.map(beer =>{
            return new Beers(
                beer.type,
                beer.name
            );
        });
                
        };
    

    toString(){
        return `${this.name}_${this.owner.toString()}, ${this.openDays}, ${this.openHours.toString()}, ${this.beers.toString()}`;
    }

}

module.exports = PubObject;
