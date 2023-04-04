import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    product_name:{ type: String, required: true },
	product_id: { type: String, required: true },
	actual_price: { type: Number, required: true },
    discounted_price: { type: Number, required: true },
    discount:{ type: Number, required: true },
	product_desc: { type: String, required: true },
    rating:{ type: Number, required: true },
    warranty:{ type: Number, required: true },
    Brand:{ type: String, required: true },
    qt:Numb{ type: Number, required: true }er,
    status:{ type: String, required: true },
    product_master_image:{ type: String, required: true },
    product_demo_images:{ type: Array, required: true },
    availability:{ type: String, required: true }
});

const Products = mongoose.model('Products', productSchema);