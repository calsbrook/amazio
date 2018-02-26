const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var orderSchema = new Schema ({
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
})

module.exports = mongoose.model('Order', orderSchema)