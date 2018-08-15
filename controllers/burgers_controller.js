let burger = require("../models/burger"); 
let express = require("express");

let router = express.Router();

router.get("*", function(req, res) {
    burger.all(function(err,allBurgers) {
        if(err) {
            return res.status(500).end();
        } else {
            res.render("index", { burgers: allBurgers });
        }
    });
});

router.get("/api/allburgers", function(req, res) {
    burger.all(function(err,burgers) {
        if(err) {
            res.status(500).end();
        } else {
            res.json(burgers);
        }
    });
});

router.post("/api/burger", function(req, res) {
    burger.insertOne(req.body,function(err,result) {
        if(err) {
            res.status(500).end();
        } else {
            if(result.affectedRows == 0)
                res.status(400).end();
            else 
                res.status(200).end();
        }
    });
});

router.put("/api/burger/:id",function(req, res) {
    burger.updateOne(req.params.id,function(err,result) {
        if(err) {
            res.status(500).end();
        } else {
            if(result.affectedRows == 0)
                res.status(400).end();
            else
                res.status(200).end();
        }
    });
});

module.exports = router;