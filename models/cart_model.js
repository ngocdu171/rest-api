var db = require('../database');
var cart = {
    get: function(username, callback) {
        return db.query('select * from cart_table where username=$1', [username], callback);
    },
    add: function(cart, callback) {
        return db.query('insert into cart_table(id_product,name_product,category,image,price,brand,rating,numReviews,description,countinstock,quantity,username) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)',
        [cart.id_product,cart.name_product,cart.category,cart.image,cart.price,cart.brand,cart.rating,cart.numreviews,cart.description,cart.countinstock,cart.quantity,cart.username],
        callback);
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