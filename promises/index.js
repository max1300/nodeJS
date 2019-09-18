const fs = require('fs-extra');


fs.readJSON('./package.json')
.then(packageObj => {
    console.log(packageObj);
})
.catch(err => {
    console.log('erreur my friends !')
})
