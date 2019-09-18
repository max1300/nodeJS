const services = require('./services/pubs.services');
const fs = require('fs-extra');


function getTitle() {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve('le titre');
        }, 3000);
    });
}
    
getTitle().then( packageObj=> {
    fs.readJSON('./package.json')
    console.log(`bravo ${packageObj.name}`);
    
})
        



console.log(services.getListPubs());
//console.log(services.openDate());

module.exports = {
    services: {
        pubService: services,

    }
}