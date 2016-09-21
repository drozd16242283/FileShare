'use strict';
const PATH_TO_MODELS = __dirname + '../models/';
const fs   = require('fs');

let bootstrapModels = (req, res, next) => {
    let models = path.join(__dirname, '../models');
    let files = fs.readdirSync(models);


    for(let i in files) {
        console.log(PATH_TO_MODELS);
        require(path.join(models, files[i]));
    }

    next();
};


module.exports = bootstrapModels;
