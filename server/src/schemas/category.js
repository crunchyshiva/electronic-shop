import mongoose from 'mongoose';
const { Schema } = mongoose;
const Product = require('./product');

const categorySchema = new Schema({
    categoryName: { type: String, required: true },
    category_image:{ type: String, required: true },
    product:{type: Schema.Types.ObjectId, ref: 'Product'},
});

const Category = mongoose.model('Category', categorySchema);