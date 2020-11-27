var express = require('express');
var router = express.Router();
var cart = require('../models/cart_model');

router.get('/:username?',function(req, res, next) {
    cart.get(req.params.username, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows.rows);
        }
    })
});

router.post('/', function(req,res,next) {
    cart.add(req.body, function(err, count) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    })
});

router.delete('/:id', function(req,res, next) {
    cart.delete(req.params.id, function(err, count) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    })
});

router.put('/:id', function(req,res,next) {
    cart.update(req.params.id, req.body, function(err,rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    })
});

module.exports = router;