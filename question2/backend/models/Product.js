const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    company: {
        name: {
            type: String,
            required: true
        }
    },
    categories: [{
        categoryName: {
            type: String,
            required: true
        }
    }]
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
