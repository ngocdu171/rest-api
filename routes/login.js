var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var db = require('../database');

router.post('/', function(request, response) {
    if(request.body.username && request.body.password) {
        var username = request.body.username;
        var password = request.body.password;
        db.query('select * from user_table where username=$1', [username],
        function(error, results, fields) {
            if(results.rows.length > 0) {
                bcrypt.compare(password, results.rows[0].password, function(err, res) {
                    if(res) {
                        console.log("success");
                        response.send(true);
                    }
                    else {
                        console.log("wrong password");
                        response.send(false);
                    }
                    response.end();
                });
            }
            else {
                console.log("user does not exist");
                response.send(false)
            }
        });
    }
    else {
        console.log("enter your username and password");
        response.send(false);
    }
});

module.exports = router;