const express      = require('express');
const path         = require('path');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const flash        = require('express-flash');
const session      = require('express-session');
//const mongoose     = require('./app/libs/mongoose');
const MongoStore   = require('connect-mongo')(session);

// require config
const config       = require('./config');
//const log          = require('./libs/log')(module);


const app = express();


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true }));


app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
    secret: config.get('session:secret'),
    resave: config.get('session:resave'),
    saveUninitialized: config.get('session:saveUninitialized'),
    cookie: config.get('session:cookie'),
    store: new MongoStore({ url: config.get('db:dbAdress') })
}));

app.use(flash());



app.use('/api', require('./routes'));


app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

//require('./app/config/passport');


// 404 error
app.use((req, res, next) => {
    res.send('404: Not Found');
    next();
});



// Starting the server
app.listen(config.get('port'), function() {
    console.log('Server start at ' + config.get('port') + ' port!');
});
