import mongoose from 'mongoose';
const { Schema } = mongoose;
const User = require('./user');
const Product = require('./product');

const categorySchema = new Schema({
    categoryName: { type: String, required: true },
    category_image:{ type: String, required: true },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    product:{type: Schema.Types.ObjectId, ref: 'Product'},
});

const Category = mongoose.model('Category', categorySchema);