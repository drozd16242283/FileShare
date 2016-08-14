var config = require('./index');
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');


var findDocuments = function(db, cb) {
    var collection = db.collection('coll');

    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log(docs);
        cb(docs);
    });
}

MongoClient.connect(config.get('db:dbAdress'), function(err, db) {
    assert.equal(null, err);
    console.log('Connection successfuly');

    findDocuments(db, function() {
        db.close();
    });
});
