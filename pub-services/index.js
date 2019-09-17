var services = require('./services/pubs.services');




console.log(services.getListPubs());
console.log(services.openDate());

module.exports = {
    services: {
        pubService: services,
        
    }
}