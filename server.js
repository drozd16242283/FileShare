const express      = require('express');
const path         = require('path');
const session      = require('express-session');
//const validator    = require('express-validator');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const flash        = require('express-flash');
//const MongoStore   = require('connect-mongo')(session);

// require config
const config       = require('./app/config');
const log          = require('./app/libs/log')(module);


const app = express();


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(flash());

app.use(express.static(path.join(__dirname, 'app/public')));
//app.use(validator());


app.use(session({
    secret: config.get('session:secret'),
    resave: config.get('session:resave'),
    saveUninitialized: config.get('session:saveUninitialized'),
    cookie: config.get('session:cookie')
    //store: new MongoStore({ mongooseConnection: mongoose.connection })
}));



// Configure express-react-engine
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// Require routes.js file
require('./app/routes')(app);


// Use own middleware
app.use(require('./app/middleware/ifUploadDirExists'));


// 404 error
app.use( (req, res, next) => {
    res.send('404: Not Found');
    next();
});



// Starting the server
app.listen(config.get('port'), function() {
    console.log('Server start at ' + config.get('port') + ' port!');
});
