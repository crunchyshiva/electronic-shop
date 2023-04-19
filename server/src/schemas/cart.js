const mongoose = require('mongoose');

const User = require('./user');
const Product = require('./product');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{
        product_id: {
            type: String,
            required: true
        },
        product_name: {
            type: String,
            required: true
        },
        product_image:{
            type: String,
            required: true
        },
        product_category: {
            type: String,
            required: true
        },
        product_qt: {
            type: Number,
            required: true
        },
        actual_price: {
            type: Number,
            required: true
        },
        discounted_price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
        total_amount:{
            type: Number,
            required: true
        },
        product_desc: {
            type: String,
            required: true
        }
    }],
    total_price:{
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = Cart = mongoose.model('cart', CartSchema);