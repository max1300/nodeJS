var pubs     = require('../mocks/pubs.json');
const _      = require('lodash');
const moment = require('moment');



function getListPubs(){
     return pubs;
}


function openDate() {
    var dayListe   = pubs[0].openDays;
    var pubName    = pubs[0].name;
    var momentDate = moment().format('dddd');
    var counter    = pubs[0].openDays.length;

    for (var i = 0; i < counter; i++) {
        if (momentDate === dayListe[i]) {
            console.log(dayListe[i] + ' pub ' + pubName + ' open');
            return true;
        } else{
            console.log(dayListe[i] + ' pub ' + pubName + ' not open');
            return false;
        }
    }
}

module.exports = {
    getListPubs : getListPubs,
    openDate: openDate

}

