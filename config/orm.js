let connection = require("./connection");

let orm = {
    selectAll: function(cb) {
        let queryStr = "SELECT * FROM burgers";
        let query = connection.query(queryStr,function(err,results,fields) {
            console.log(results);
            cb(err,results);
        });

        console.log(query.sql);
    },

    insertOne: function(body,cb) {
        let queryStr = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        let query = connection.query(queryStr,[body.burger_name,body.devoured], function(err, results, fields) {
            console.log(results);
            cb(err,results);
        });

        console.log(query.sql);
    },
    
    updateOne: function(id, cb) {
        let queryStr = "UPDATE burgers SET devoured=true WHERE id=?"
        let query = connection.query(queryStr,[id], function(err, results, fields) {
            console.log(results);
            cb(err,results);
        });
        
        console.log(query.sql);
    }
};

module.exports = orm;