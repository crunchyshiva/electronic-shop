const db = require('../dbConfig/database');
const constants = require('../common/constant');
const Cart = require('../schemas/cart');


exports.addProdctToCart = (req, res) => {
    const {userId} = req.body;
    const cartData = req.body;
    
    Cart
    .findOne({ where: { userId } })
    .then(response =>{
        if(response.userId.toString().match(userId)){
            const responseCart = [...response.products]
            const isProductExist = responseCart.some(item => item.product_id === req.body.product.product_id);
            if(isProductExist){
                cartData.product.product_qt =  cartData.product.product_qt*1 + req.body.product.product_qt*1
                Cart
                .updateOne(cartData)
            }else{
                responseCart.push(req.body.product)
                Cart
                .updateOne(responseCart)
            }
            console.log(cartData,'cartData')
    
        //   Cart
        //   .updateOne()

        }else{

        }
    })
    // Cart
    // .create(cartData)
    // .then((response) => {
    //     res.status(200).send({ success: true, message: constants.responseMessage.ROOT_NODE_SUCCESS });
    // })
    // .catch((err) => {
    // console.log(err,'err')
    //     res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
    // }); 
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