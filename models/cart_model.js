var db = require('../database');
var cart = {
    get: function(username, callback) {
        return db.query('select * from cart_table where username=$1', [username], callback);
    },
    add: function(cart, callback) {
        return db.query('insert into cart_table(id_product,username,name_product,image,price,quantity) values($1,$2,$3,$4,$5,$6)',
        [cart.id_product ,cart.username ,cart.name_product ,cart.image ,cart.price ,cart.quantity], callback);
    },
    delete: function(id, callback) {
        return db.query('delete from cart_table where id_product=$1', [id], callback);
    },
    update: function(id, cart ,callback) {
        return db.query('update cart_table set quantity=$1 where id_product=$2',
        [cart.quantity, id], callback);
    }
}

module.exports = cart;