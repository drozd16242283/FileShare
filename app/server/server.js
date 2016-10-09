import express      from 'express'
import path         from 'path'
import bodyParser   from 'body-parser'
import cookieParser from 'cookie-parser'
import flash        from 'express-flash'
import session      from 'express-session'
import MongoStore   from 'connect-mongo'

// require config
import config       from './config'
//const log          = require('./libs/log')(module);

import api from '../api/'


const app = express();

const PATH_TO_INDEX_FILE = path.resolve(__dirname, '../public', 'index.html')


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true }));


app.use(express.static(path.join(__dirname, '../public/')));


app.use(session({
    secret: config.get('session:secret'),
    resave: config.get('session:resave'),
    saveUninitialized: config.get('session:saveUninitialized'),
    cookie: config.get('session:cookie')
    //store: new MongoStore({ url: config.get('db:dbAdress') })
}));

app.use(flash());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/api', api);


app.get('*', function(req, res) {
    res.sendFile(PATH_TO_INDEX_FILE);
});



//require('./app/config/passport');


// 404 error
/*app.use((req, res, next) => {
    res.send('404: Not Found');
    next();
});*/



// Starting the server
app.listen(config.get('port'), function() {
    console.log('Server start at ' + config.get('port') + ' port!');
});



export default app
