const db = require('../dbConfig/database');
const constants = require('../common/constant');
const Cart = require('../schemas/cart');


exports.addProdctToCart = (req, res) => {
    const cartData = req.body;
    Cart
    .create(cartData)
    .then((response) => {
        res.status(200).send({ success: true, message: constants.responseMessage.ROOT_NODE_SUCCESS });
    })
    .catch((err) => {
    console.log(err,'err')
        res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
    }); 
};

exports.getCart = (req,res) => {
    const {userId} = req.query;
    console.log(userId)
    Cart
	.find({'userId':userId})
	.then((response) => {
		res.status(200).send({ data: response, message: constants.responseMessage.ROOT_NODE_SUCCESS});
	})
	.catch((err) => {
		res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
	});
}