import bcrypt from 'bcrypt-node'
import mongoose from '../libs/mongoose'

let Schema = mongoose.Schema

let UserSchema = new Schema({
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
    fileToken: String
});

UserSchema.methods.encryptPassword = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.virtual('password')
    .set(function(password) {
        this._plainPassword = password
        this.salt = Math.random() + ''
        this.hashedPassword = this.encryptPassword(password)
    })
    .get(function() {
        return this._plainPassword
    })

UserSchema.methods.checkPassword = password => {
    return bcrypt.compareSync(password, this.hashedPassword)
}


const UserModel = mongoose.model('User', UserSchema)

export default UserModel
