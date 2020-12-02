var db = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var user = {
    get: function(callback) {
        return db.query('select * from user_table order by id_user desc', callback);
    },
    getById: function(id, callback) {
        return db.query('select * from user_table where id_user=$1', [id], callback);
    },
    getByName: function(username, callback) {
        return db.query('select * from user_table where username=$1', [username], callback);
    },
    add: function(user, callback) {
        bcrypt.hash(user.password, saltRounds, function(err, hash) {
            return db.query('insert into user_table(username,password,email) values($1,$2,$3)',
            [user.username,hash,user.email], callback);
        });
    },
    delete: function(id, callback) {
        return db.query('delete from user_table where id_user=$1', [id], callback);
    },
    update: function(id, user, callback) {
        bcrypt.hash(user.password, saltRounds, function(err, hash) {
            return db.query('update user_table set username=$1, password=$2, email=$3 where id_user=$4',
        [user.username, hash, user.email, id], callback);
        });
    },
    searchByName: function(value, callback) {
        var nameLike="%"+value+"%";
        return db.query('select * from user_table username ILIKE $1 order by id_user', [nameLike], callback);
    }
}

module.exports = user;