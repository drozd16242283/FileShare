var User = require('./models/user').User;

var user = new User({
    username: "Test",
    password: "secret",
    filePath: "lol"
});

user.save((err, user, affected) => {
    if (err) throw err;
});
