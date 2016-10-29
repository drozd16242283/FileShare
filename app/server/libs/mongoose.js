import mongoose from 'mongoose'
import config   from '../config/'


mongoose.Promise = global.Promise
mongoose.connect(config.get('db:dbAdress'), (err, resp) => {
    if (err) {
        console.log('Error conecting to the database. ' + err)
    } else {
        console.log('Connecting to database!')
    }
})


export default mongoose
