const orm = require("../config/orm");

let burger = {
    
    //Retrieve all burgers in the db
    all: function(cb) {
        orm.selectAll(function(err,results) {
            cb(err,results);
        });
    },

    //Adds one new Burger to the list
    insertOne: function(body, cb) {
        orm.insertOne(body,function(err,results) {
            cb(err,results);
        });
    },

    //Updates one burger as Devoured
    updateOne: function(id,cb) {
        orm.updateOne(id,function(err,results) {
            cb(err,results);
        })
    }
}

module.exports = burger;