const Pub = require('../models/PubObject');
const pubs = require('../mocks/pubs');



function getListPubs() {
    return pubs.map(pub => {
        return new Pub(
            pub.name,
            pub.owner,
            pub.openDays,
            pub.openHours,
            pub.beers
        );
    });
}


// function openDate() {
//     var dayListe   = pubs[0].openDays;
//     var pubName    = pubs[0].name;
//     var momentDate = moment().format('dddd');
//     var counter    = pubs[0].openDays.length;

//     for (var i = 0; i < counter; i++) {
//         if (momentDate === dayListe[i]) {
//             console.log(dayListe[i] + ' pub ' + pubName + ' open');
//             return true;
//         } else{
//             console.log(dayListe[i] + ' pub ' + pubName + ' not open');
//             return false;
//         }
//     }
//}

module.exports = {
    getListPubs: getListPubs,
    // openDate: openDate

}

