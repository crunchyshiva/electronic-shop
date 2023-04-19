const db = require('../dbConfig/database');
const constants = require('../common/constant');
const Cart = require('../schemas/cart');


exports.addProdctToCart = (req, res) => {
    const {userId} = req.body;
    const cartData = req.body;
    const newCart = {}
    
    Cart
    .findOne({ where: { userId } })
    .then(responseCart =>{
        //check if cart already exist
        if(responseCart?.userId?.toString()?.match(userId)){
            //check if product already exist in cart
            const cartProducts = [...responseCart.products]
            const isProductExist = cartProducts.some(item => item.product_id === req.body.product.product_id);
            if(isProductExist){
                const product = responseCart.products.find(item => item.product_id === req.body.product.product_id)
                product.product_qt =  product.product_qt*1 + req.body.product.product_qt*1
                product.total_amount = product.discounted_price * product.product_qt
                responseCart.total_price = responseCart.products.length > 0 && responseCart.products.reduce((acc,item) => {
                    return acc += item.total_amount
                },0)
                responseCart
                .save()
                .then((response) => {
                    // res.status(200).send({ success: true, message: constants.responseMessage.ROOT_NODE_SUCCESS });
                    return res.status(200).send({ status: true, cart: responseCart });
                })
                .catch((err) => {
                    console.log(err,'err')
                    res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
                });
            }else{
                const productData = {...cartData.product}
                responseCart.products.push(productData);
                responseCart.total_price = responseCart?.products.length > 0 && responseCart?.products.reduce((acc,item) => { 
                    return acc + item.total_amount },0)
                responseCart
                .save()
                .then((response) => {
                    return res.status(200).send({ status: true, cart: responseCart });
                    // res.status(200).send({ success: true, message: constants.responseMessage.ROOT_NODE_SUCCESS });
                })
                .catch((err) => {
                    console.log(err,'err')
                    res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
                });
            }
        }else{
            const total_price = cartData?.product?.discounted_price * cartData?.product?.product_qt
            const data = {
                userId:req.body.userId,
                'total_price':total_price,
                products:[]
            }
            data.products.push(cartData.product)
            Cart
            .create(data)
            .then((response) => {
                return res.status(200).send({ status: true, cart: data });
                // res.status(200).send({ success: true, message: constants.responseMessage.ROOT_NODE_SUCCESS });
            })
            .catch((err) => {
                console.log(err,'err')
                res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
            });
        }
        // return res.status(201).send({ status: true, newCart: newCart });
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