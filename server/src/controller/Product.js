const db = require('../dbConfig/database');
const constants = require('../common/constant');
const Product = require('../schemas/product');

exports.createProduct = (req, res) => {
  const productData = req.body;
  Product
	.create(productData)
	.then((response) => {
		res.status(200).send({ success: true, message: constants.responseMessage.ROOT_NODE_SUCCESS });
	})
	.catch((err) => {
	console.log(err,'err')
		res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
	}); 
};

exports.getCategory = (req,res) => {
	Product
	.find({},{product_category:1,product_category_img:2})
	.then((response) => {
		res.status(200).send({ data: response, message: constants.responseMessage.ROOT_NODE_SUCCESS});
	})
	.catch((err) => {
		res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
	});
}

exports.getProduct = (req,res) => {
	const {id} = req.query
	Product
	.findById(id)
	.then((response) => {
		res.status(200).send({ data: response, message: constants.responseMessage.ROOT_NODE_SUCCESS});
	})
	.catch((err) => {
		res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
	});
}

exports.getProductByCategory = (req,res) => {
	const {id} = req.query
	Product
	.aggregate([
		{ $sort: { date: -1 } },
		{
			$group: {
			  _id: {
				"product_category": "$product_category",
				"product_category_img":"$product_category_img"
			  },
			  products: { $push: "$$ROOT" }
			}
		},
	])
	.then((response) => {
		res.status(200).send({ data: response, message: constants.responseMessage.ROOT_NODE_SUCCESS});
	})
	.catch((err) => {
		console.log(err)
		res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
	});
}