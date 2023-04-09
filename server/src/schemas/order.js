const mongoose = require('mongoose');

const User = require('./user');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
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
        product_desc: {
            type: String,
            required: true
        }
    }],
    total_price:{
        type: String,
        required: true
    },
    shipping_address:{
        addres_line_1:{
            type: String,
            required: false
        },
        addres_line_2:{
            type: String,
            required: false
        },
        city:{
            type: String,
            required: true
        },
        district:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        pincode:{
            type: String,
            required: true
        },

    },
    payment_type:{
        type: String,
        required: true 
    }
});

module.exports = Order = mongoose.model('order', OrderSchema);