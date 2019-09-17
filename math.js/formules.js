const _ = require('lodash');

function addition(a, b) {
if (!Number.isInteger(a)|| !Number.isInteger(b)) {
        throw new Error('vous devez rentrer des nombres');
    } 

    return a + b;

}

function soustraction(a, b) {
    if (!_.isNumber(a) || !_.isNumber(b)) {
        throw new Error('vous devez rentrer des nombres');
    } else {
        return a - b;
    }

}

function multiplication(a, b) {
    if (!_.isNumber(a) || !_.isNumber(b)) {
        throw new Error('vous devez rentrer des nombres');
    } else {
        return a * b;
    }

}

function division(a, b) {
    if (!_.isNumber(a) || !_.isNumber(b)) {
        throw new Error('vous devez rentrer des nombres');
    } else {
        return a / b;
    }

}

module.exports = {
    addition: addition,
    soustraction: soustraction,
    multiplication: multiplication,
    division: division
}