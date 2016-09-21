'use strict';
const bcrypt   = require('bcrypt-node');
const mongoose = require('../libs/mongoose');

let Schema = mongoose.Schema;


let User = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    }
});

User.methods.hashPassword = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.virtual('password')
    .set(password => {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.hashPassword(password);
    })
    .get(() => {
        return this._plainPassword;
    });

User.methods.checkPassword = password => {
    return bcrypt.compareSync(password, this.hashedPassword);
};


exports.User = mongoose.model('User', User);
