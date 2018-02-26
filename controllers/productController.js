const Product = require('../models/Product');

function index(req, res) {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => console.log(err))
}

module.exports = {
    index
}