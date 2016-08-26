'use strict';
const path = require('path');
const fs   = require('fs');

let bootstrapModels = (req, res, next) => {
    let models = path.join(__dirname, '../models');
    let files = fs.readdirSync(models)
        .filter(file => file !== 'DBqueries');

    for(let i in files) {
        require(path.join(models, files[i]));
    }
    
    next();
};


module.exports = bootstrapModels;
