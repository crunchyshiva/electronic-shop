const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	product_id: { 
        type: String, 
        required: true 
    },
    product_name:{ 
        type: String, 
        required: true 
    },
    product_category: { 
        type: String, 
        required: true 
    },
    product_category_img: { 
        type: String, 
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
    discount:{ 
        type: Number, 
        required: true 
    },
	product_desc: { 
        type: String, 
        required: true 
    },
    colors: { 
        type: Array, 
        required: false 
    },
    rating:{ 
        type: Number, 
        required: false 
    },
    warranty:{ 
        type: Number, 
        required: false 
    },
    brand:{ 
        type: String, 
        required: true 
    },
    product_master_image:{ 
        type: String, 
        required: true 
    },
    product_demo_images:{ 
        type: Array, 
        required: true 
    },
    availability:{ 
        type: String, 
        required: true 
    }
});

module.exports = Product = mongoose.model('product', ProductSchema);