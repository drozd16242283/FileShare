import bcrypt   from 'bcrypt-node'
import mongoose from '../libs/mongoose'


let UserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    fileToken: Array
})


UserSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.statics.comparePassword = function(password, hash, callback) {
    bcrypt.compare(password, hash, callback)
}

UserSchema.statics.getUserByUsername = function(username, callback) {
    this.findOne({ username: username }, callback)
}

UserSchema.statics.getUserByEmail = function(email, callback) {
    this.findOne({ email: email }, callback)
}

UserSchema.statics.getUserById = function(id, callback) {
    return this.findById({ _id: id }, callback)
}

UserSchema.methods.createUser = function(newUser, callback) {
    newUser.password = this.encryptPassword(newUser.password)

    newUser.save(callback)
}


const UserModel = mongoose.model('User', UserSchema)

export default UserModel
