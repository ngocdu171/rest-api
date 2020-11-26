var express = require('express');
var router = express.Router();
var user = require('../models/user_model');
const basicAuth = require('express-basic-auth');
var db = require('../database');
const bcrypt = require('bcrypt');


function myAuthorizer(username, password,cb){
  db.query('SELECT * FROM user_table WHERE username = $1',[username], 
  function(error, dbResults, fields) {
    if (dbResults.rows.length > 0) {
      bcrypt.compare(password,dbResults.rows[0].password, function(err,res) {
        if(res) {
          console.log("succes");
          return cb(null, true);
        }
        else {
            console.log("wrong password");
            return cb(null, false);
        }			
          response.end();
        });
      }
      else{
        console.log("user does not exists");
        return cb(null, false);
      }
  });
}

//router.use(basicAuth({users: { 'admin': '1234' }}))
router.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))

router.get('/:id?', function(req, res, next) {
  if(req.params.id) {
    user.getById(req.params.id, function(err, rows) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(rows.rows);
      }
    });
  }
  else {
    user.get(function(err, rows) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(rows.rows);
      }
    });
  }
});

router.post('/', function(req,res,next) {
  user.add(req.body, function(err, rows) {
    if(err) {
      rows.json(err)
    }
    else {
      res.json(req.body)
    }
  });
});

router.delete('/:id', function(req,res,next) {
  user.delete(req.params.id, function(err, count) {
    if(err) {
      res.json(err);
    }
    else {
      res.json(count);
    }
  });
});

router.put('/:id', function(req,res,next) {
  user.update(req.params.id, req.body, function(err, rows) {
    if(err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

router.get('/name/:value?', function(req,res,next) {
  user.searchByName(req.params.value, function(err, rows) {
    if(err) {
      res.json(err);
    }
    else {
      res.json(rows.rows);
    }
  });
});

module.exports = router;