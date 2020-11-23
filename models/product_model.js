var db = require('../database');
var product = {
    get: function (callback) {
        return db.query('select * from product_table', callback);
    },
    getById: function (id, callback) {
        return db.query('select * from product_table where id_product=$1', [id], callback);
    },
    add: function (product, callback) {
        console.log(product);
        return db.query('insert into product_table(name_product,category,image,price,brand,rating,numReviews,description,countinstock) values($1,$2,$3,$4,$5,$6,$7,$8,$9)',
            [product.name_product, product.category, product.image, product.price, product.brand, product.rating, product.numReviews, product.description, product.countinstock],
            callback
        );
    },
    delete: function (id, callback) {
        return db.query('delete from product_table where id_product', [id], callback);
    },
    update: function (id, product, callback) {
        return db.query('update product_table set name_produc$1,category=$2,image=$3,price=$4,brand=$5,rating=$6,numReviews=$7,description=$8,countinstock=$9 where id_product=$9)',
            [product.name_product, product.category, product.image, product.price, product.brand, product.rating, product.numReviews, product.description, product.countinstock, id],
            callback
        );
    },
    searchByName:function(value,callback) {
        var nameLike="%"+value+"%";
        return db.query('select * from product_table where name_product ILIKE $1 order by id_product desc',[nameLike], callback);
      },
}

module.exports = product;