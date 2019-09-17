var assert = require('assert');
var chai = require('chai');
var formules = require('../formules');
var expect = chai.expect;
var assert = chai.assert;

describe('math', function () {
    describe('addition', function () {
        it('should addition be valid', function () {
            expect(formules.addition(1, 3)).to.equal(4);
        }) 
        it('should addition throw an error if 1st argument is not a number', function () {
            expect(() => {formules.addition('niko', 3)
            }).to.throw;
        }) 
        it('should addition throw an error if 2st argument is not a number', function () {
            expect(() => {formules.addition(1, false)
            }).to.throw;
        }) 
        it('should addition throw an error if both arguments are not numbers', function () {
            expect(() => {formules.addition('niko', false)
            }).to.throw;
        })
    })

});

describe('math', function () {
    describe('soustraction', function () {
        it('should soustraction be valid', function () {
            expect(formules.soustraction(1, 3)).to.equal(4);
        }) 
        it('should soustraction throw an error if 1st argument is not a number', function () {
            expect(() => {formules.soustraction('niko', 3)
            }).to.throw;
        }) 
        it('should soustraction throw an error if 2st argument is not a number', function () {
            expect(() => {formules.soustraction(1, false)
            }).to.throw;
        }) 
        it('should soustraction throw an error if both arguments are not numbers', function () {
            expect(() => {formules.soustraction('niko', false)
            }).to.throw;
        })
    })

});
