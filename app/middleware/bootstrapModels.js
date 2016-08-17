'use strict';
const path = require('path');
const fs   = require('fs');

let bootstrapModels = (req, res, next) => {
    if (req.session.bootstrap) {
        let models = path.join(__dirname, '../models');

        var files = fs.readdirSync(models);

        for(let i in files) {
            require(path.join(models, files[i]));
        }
        console.log('models');

    } else {
        req.session.bootstrap = true;

        next();
    }
};

module.exports = bootstrapModels;
